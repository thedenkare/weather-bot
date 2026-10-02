require('dotenv').config();
const { Bot } = require('node-telegram-bot-api');

const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new Bot(token);

bot.command('start', (ctx) => {
  return ctx.reply('Привет! Я буду подсказывать, как одеться по погоде.');
});

bot.startPolling();