// Import the necessary modules
import { Telegraf } from 'telegraf';

// Define the start command function
function startCommand(ctx: any) {
  // Send a welcome message to the user
  ctx.reply('Welcome to the Telegram bot!');
}

// Export the start command function
module.exports = startCommand;
