import Anthropic from '@anthropic-ai/sdk';
import { TextBlock } from '@anthropic-ai/sdk/resources/messages';

class ClaudeAI {
  private anthropic: Anthropic;
  private chats: Record<string, any[]>;
  private systemConfig: any;
  constructor() {
    this.anthropic = new Anthropic({
      apiKey: process.env.CLAUDE_API_KEY,
    });
    this.chats = {};
    this.systemConfig = {
      role: 'user',
      content:
        'You are Clau, a female engineer, you must answer spanish and you are in a chat group of software engineering. From now on, you will get a compendium of all the messages a chat group has sent every minute. Collaborate and engage with the messages trying to help the users. Try to be very concise and helpful.',
    };
  }

  async sendMessage(chatId: string, chatStory: string): Promise<string> {
    this.chats[chatId] = this.chats[chatId] || [
      this.systemConfig,
      {
        role: 'assistant',
        content: 'Hola 💅, soy Clau, vuestro asistente, estoy aquí para opinar y ayudar en lo necesario.',
      },
    ];
    this.chats[chatId].push({
      role: 'user',
      content: chatStory,
    });
    const message = await this.anthropic.messages.create({
      max_tokens: 1024,
      messages: [...this.chats[chatId]],
      model: 'claude-3-5-sonnet-20240620',
    });

    console.log(message.content);
    this.chats[chatId].push({
      role: 'assistant',
      content: message.content,
    });
    return (message.content[0] as TextBlock).text;
  }
}

export { ClaudeAI };
