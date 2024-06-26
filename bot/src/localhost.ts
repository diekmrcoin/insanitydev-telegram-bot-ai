import 'dotenv/config';
import { Bot } from './bot/bot';
import { Config } from './config/config';
const bot = new Bot(Config.TELEGRAM_BOT_TOKEN);
bot.run();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
console.log('Started bot!');
