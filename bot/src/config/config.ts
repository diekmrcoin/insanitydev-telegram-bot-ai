export class Config {
  public static readonly TELEGRAM_BOT_TOKEN: string = process.env.TELEGRAM_BOT_TOKEN || '';
  public static readonly CLAUDE_API_KEY: string = process.env.CLAUDE_API_KEY || '';
  // TODO: migrate this to a dynamodb record
  public static readonly ALLOWED_CHAT_IDS: string[] = (process.env.ALLOWED_CHAT_IDS || '').split(',');

  public static validate(fail: boolean): boolean {
    if (!Config.TELEGRAM_BOT_TOKEN) {
      console.error('TELEGRAM_BOT_TOKEN is required');
      if (fail) {
        throw new Error('TELEGRAM_BOT_TOKEN is required');
      }
      return false;
    }
    if (!Config.CLAUDE_API_KEY) {
      console.error('CLAUDE_API_KEY is required');
      if (fail) {
        throw new Error('CLAUDE_API_KEY is required');
      }
      return false;
    }
    if (!Config.ALLOWED_CHAT_IDS.length) {
      console.error('ALLOWED_CHAT_IDS is required');
      if (fail) {
        throw new Error('ALLOWED_CHAT_IDS is required');
      }
      return false;
    }
    return true;
  }
}
