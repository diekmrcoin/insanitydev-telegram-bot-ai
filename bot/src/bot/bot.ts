import { Telegraf } from 'telegraf';

export class Bot {
  public readonly bot: Telegraf;
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
  }

  public stop(signal: string) {
    if (!this.running) {
      return;
    }
    this.bot.stop(signal);
    this.running = false;
  }

  private defineCommands() {
    this.bot.command('start', this.startCommand.bind(this));
  }

  private startCommand(ctx: any) {
    ctx.reply('Welcome to the Telegram bot!');
  }

  private helpCommand(ctx: any) {
    ctx.reply('This is a help message');
  }
}