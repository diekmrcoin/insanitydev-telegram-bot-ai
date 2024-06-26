import Anthropic from '@anthropic-ai/sdk';
import { TextBlock } from '@anthropic-ai/sdk/resources/messages';

export class ClaudeAI {
  private anthropic: Anthropic;
  private systemConfig: any;
  constructor(apiKey: string) {
    this.anthropic = new Anthropic({
      apiKey: apiKey,
    });
    this.systemConfig = {
      role: 'user',
      content:
        '<system>You are Clau, a cheerful female engineer, you must answer spanish, you can use Markdown, and you are in a chat group of software engineering. From now on, you will get a compendium of all the messages a chat group has sent every minute. Collaborate and engage with the messages trying to help the users. Try to be very concise and helpful.<system>',
    };
  }

  async sendMessage(message: string, model = ClaudeModels.haiku_3): Promise<string> {
    const chain = [
      this.systemConfig,
      {
        role: 'assistant',
        content: 'Hola 💅, soy Clau, vuestro asistente, estoy aquí para opinar y ayudar en lo necesario.',
      },
      {
        role: 'user',
        content: message,
      },
    ];
    const answer = await this.anthropic.messages.create({
      max_tokens: 1024,
      messages: chain,
      model: model,
    });
    return (answer.content[0] as TextBlock).text;
  }
}

export enum ClaudeModels {
  sonnet_3_5 = 'claude-3-5-sonnet-20240620',
  opus_3 = 'claude-3-opus-20240229',
  sonnet_3 = 'claude-3-sonnet-20240229',
  haiku_3 = 'claude-3-haiku-20240307',
}
