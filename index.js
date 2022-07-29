// replace the value below with the Telegram token you receive from @BotFather
// const Web3 = require("web3");
// const Incinerator = require("./const/Incinerator.json");

// const socketProvider =
//   "wss://speedy-nodes-nyc.moralis.io/3eb1bbe3cea7ab422badd600/bsc/mainnet/ws";

// const web3Socket = new Web3(
//   new Web3.providers.WebsocketProvider(socketProvider)
// );

// const socket = new web3Socket.eth.Contract(
//   Incinerator.abi,
//   Incinerator.contractAddress
// );

// const API_URL =
//   "https://speedy-nodes-nyc.moralis.io/3eb1bbe3cea7ab422badd600/bsc/mainnet";

// const web3 = new Web3(new Web3.providers.HttpProvider(API_URL));

// const contract = new web3.eth.Contract(
//   Incinerator.abi,
//   Incinerator.contractAddress
// );

const TelegramBot = require("node-telegram-bot-api");
const token = "5421835043:AAElpJAls3p3aChs6lH3VtLkelGM66I42y0";
const channel_id = "-1001616504473";

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// socket.events.TokenBurn().on("data", async function (event) {
//   let data = event.returnValues;
//   console.log("data", data);
//   const supply = await contract.methods.totalSupply().call();
//   console.log("totalSupply", supply);
//   bot.sendMessage(channel_id, "BURN DETECTED");
// });

function sendMessageToBot() {
  bot.sendMessage(channel_id, "BURN DETECTED");
}

setInterval(sendMessageToBot, 20000)
