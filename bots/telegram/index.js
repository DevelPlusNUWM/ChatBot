var CONSTS = require("../constants.js");
var TBot = require("./bot.js");

const TelegramBot = require('node-telegram-bot-api');


var Telegram = (function() {
    
    const token = CONSTS.Config.get('Telegram.tokken')
    const bot = new TelegramBot(token, {polling: true});
   

    bot.onText(/(.+)/, (msg, match) => {
          
        var res = TBot.Bot.InputRes(msg)
        
        console.log(res);
        bot.sendMessage(res.fromId, res.respoynse);
        
    
    });
    
    return {
        Start: function() {
           
        }
    }

})();


module.exports.Telegram = Telegram;