// replace the value below with the Telegram token you receive from @BotFather
const TelegramBot = require('node-telegram-bot-api');
const token = '5421835043:AAElpJAls3p3aChs6lH3VtLkelGM66I42y0';
const channel_id = '-1001616504473';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

function broadcastMessage(){
    console.log('send message');
    bot.sendMessage(channel_id, 'BURN DETECTED');
}

let nIntervId = setInterval(broadcastMessage, 2000);

