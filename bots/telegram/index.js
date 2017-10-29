var CONSTS = require("../constants.js");
var TBot = require("./bot.js");

const TelegramBot = require('node-telegram-bot-api');


var Telegram = (function() {
    
    const token = CONSTS.Config.get('Telegram.tokken')
    
        
    const bot = new TelegramBot(token, {
        webHook: {
            post: CONSTS.Config.get('port')
        }
    });
    

    bot.setWebHook(CONSTS.Config.get('url') + "/bot" + token);
    
    bot.on('message', msg => {
        
        res = TBot.Bot.InputRes(msg)
        
        console.log(res);
        bot.sendMessage(res.fromId, res.respoynse);
        //console.log(res + "respounsed");
    
    });
    
    return {
        Start: function() {
           // console.log("Telegram Bot sacsesful started");
        }
    }

})();


module.exports.Telegram = Telegram;