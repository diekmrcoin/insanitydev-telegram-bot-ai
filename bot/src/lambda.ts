import { APIGatewayProxyEventV2, APIGatewayProxyResultV2, Handler } from 'aws-lambda';
import 'dotenv/config';
import { Bot } from './bot/bot';
import { Config } from './config/config';
const bot = new Bot(Config.TELEGRAM_BOT_TOKEN);

export const handler: Handler<APIGatewayProxyEventV2, APIGatewayProxyResultV2> = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Started bot!',
    }),
  };
};

console.log('Started bot!');
