import 'dotenv/config';
import { Bot } from './bot/bot';
import { Config } from './config/config';
import { ClaudeAI } from './claude/claude';
Config.validate(true);
const claude = new ClaudeAI(Config.CLAUDE_API_KEY);
const bot = new Bot(Config.TELEGRAM_BOT_TOKEN, claude);
bot.run();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
console.log('Started bot!');
