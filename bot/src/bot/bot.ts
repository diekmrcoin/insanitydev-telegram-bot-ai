import { Telegraf } from 'telegraf';
import { message } from 'telegraf/filters';

export class Bot {
  private bot: Telegraf;
  private running: boolean = false;
  constructor(token: string) {
    this.bot = new Telegraf(token);
    this.defineCommands();
  }

  public run() {
    if (this.running) {
      return;
    }
    this.bot.launch();
    this.running = true;
    console.log('Bot is running');
  }

  public webhookCallback(path: string, options: any) {
    return this.bot.webhookCallback(path, options);
  }

  public stop(signal: string) {
    if (!this.running) {
      return;
    }
    this.bot.stop(signal);
    this.running = false;
  }

  private defineCommands() {
    this.bot.command('start', (ctx) => this.startCommand(ctx));
    this.bot.command('help', (ctx) => this.helpCommand(ctx));

    this.bot.on(message('text'), (ctx) => this.onText(ctx));
  }

  private startCommand(ctx: any) {
    ctx.reply('Welcome to the Telegram bot!');
  }

  private async quitCommand(ctx: any) {
    ctx.reply('Goodbye!');
    // await ctx.telegram.leaveChat(ctx.message.chat.id);
    await ctx.leaveChat();
  }

  private helpCommand(ctx: any) {
    ctx.reply('This is a help message');
  }

  private onText(ctx: any) {
    ctx.reply(ctx.message.text);
  }
}
