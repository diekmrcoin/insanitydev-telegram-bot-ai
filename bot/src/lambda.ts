import http from 'serverless-http';

import 'dotenv/config';
import { Bot } from './bot/bot';
import { Config } from './config/config';
const bot = new Bot(Config.TELEGRAM_BOT_TOKEN);

// setup webhook
export const serverlessBot = http(bot.bot.webhookCallback('/telegraf'));

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
console.log('Started bot!');
