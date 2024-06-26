import { Telegraf } from 'telegraf';

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
