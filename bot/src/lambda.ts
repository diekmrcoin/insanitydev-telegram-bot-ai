import http from 'serverless-http';

import 'dotenv/config';
import { Bot } from './bot/bot';
import { Config } from './config/config';
Config.validate(false);
const bot = new Bot(Config.TELEGRAM_BOT_TOKEN);
// bot.run();

// setup webhook
export const serverlessBot = http(bot.webhookCallback('/', { secretToken: Config.TELEGRAM_SECRET_TOKEN }));

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
console.log('Started bot!');
