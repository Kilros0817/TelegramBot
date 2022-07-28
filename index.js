// replace the value below with the Telegram token you receive from @BotFather
const TelegramBot = require('node-telegram-bot-api');
const token = '5315416686:AAFAPv0qJznkMF9KVkzaMW8SQmf1saO7rXI';
const channel_id = '-1001625382295';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token);

function broadcastMessage(){
    console.log('send message');
    bot.sendMessage(channel_id, 'BURN DETECTED');
}

setTimeout(broadcastMessage, 2000);
