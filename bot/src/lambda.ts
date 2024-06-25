import { APIGatewayProxyEventV2, APIGatewayProxyResultV2, Handler } from 'aws-lambda';
import TelegramBot from 'node-telegram-bot-api';
import { ClaudeAI } from './claude/claude';
import 'dotenv/config';

// Create a new bot instance
const bot = new TelegramBot(process.env.BOT_TOKEN!, { polling: true });
const claudeAI = new ClaudeAI();
const allowedChatIds = process.env.TELEGRAM_ALLOWED_IDS!.split(',').map(Number);

// Initialize message storage
const messageStorage: any = {};

// Handle incoming messages
bot.on('message', async (msg) => {
  if (!allowedChatIds.includes(msg.chat.id)) {
    console.log('Unauthorized chat id:', msg.chat.id);
    return;
  }
  if (!msg.from) return;
  console.log({
    username: msg.from.username,
    text: msg.text,
  });
  if (!msg) return;
  const chatId = msg.chat.id;
  if (!msg.text) return;
  const text = msg.text;
  if (!messageStorage[chatId]) {
    messageStorage[chatId] = [];
  }
  messageStorage[chatId].push({
    username: msg.from.username,
    text,
  });
});

// Handle incoming commands
bot.onText(/\/start/, async (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Welcome to the bot!');
});

bot.onText(/\/help/, async (msg) => {
  console.log('Helping');
  await processAndSendMessages();
});

// Function to process and send message compendium
async function processAndSendMessages() {
  Object.keys(messageStorage).forEach(async (chatId) => {
    if (messageStorage[chatId].length > 0) {
      // Compile messages into a single string
      const compendium = messageStorage[chatId].map((msg: any) => `${msg.username}: ${msg.text}`).join('\n');
      // Send the compendium to the chat
      const response = await claudeAI.sendMessage(chatId, compendium);
      bot.sendMessage(chatId, response);
      // Clear the storage for the chat
      messageStorage[chatId] = [];
    }
  });
}
console.log('Started bot!');

export const handler: Handler<APIGatewayProxyEventV2, APIGatewayProxyResultV2> = async (event) => {
  // console.log('Received event:', event);
  if (!event.body) {
    return { statusCode: 400, body: JSON.stringify({ message: 'No body provided' }) };
  }
  const data = JSON.parse(event.body);
  const { message, chatId } = data;

  if (!message || !chatId) {
    return { statusCode: 400, body: JSON.stringify({ message: 'Invalid body' }) };
  }

  // Check if the chat ID is allowed
  if (!allowedChatIds.includes(chatId)) {
    return {
      statusCode: 403,
      body: JSON.stringify({ message: 'Unauthorized chat id' }),
    };
  }

  // Send the message via the Telegram bot
  try {
    await bot.sendMessage(chatId, message);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Message sent successfully' }),
    };
  } catch (error) {
    console.error('Failed to send message:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to send message' }),
    };
  }
};
