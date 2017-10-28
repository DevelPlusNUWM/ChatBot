var CONSTS = require("../constants.js");
var TBot = require("./bot.js");

const TelegramBot = require('node-telegram-bot-api');


var Telegram = (function() {
    
    const token = CONSTS.Config.get('Telegram.tokken')
    const bot = new TelegramBot(token, {polling: { interval: 2000, timeout: 10 }});
    //var res;

    bot.onText(/(.+)/, (msg, match) => {
        // 'msg' is the received Message from Telegram
        // 'match' is the result of executing the regexp above on the text content
        // of the message
      

         
        res = TBot.Bot.InputRes(msg)
        
        console.log(res);
        bot.sendMessage(res.fromId, res.respoynse);
        console.log(res + "respounsed");
        //const chatId = msg.chat.id;
        //const resp = match[1]; // the captured "whatever"
    });


    //console.log(res);
    //bot.sendMessage(res.fromId, res.respoynse);


    return {
        Start: function() {
            console.log("Telegram Bot sacsesful started");
        }
    }

})();


module.exports.Telegram = Telegram;