

var Bot = (function() {
    
    function Respounse (msg){

        if(msg.text == "/start") {
            res = "Привіт, " + msg.name + ", напишіть свій email."
        }
        else {
            res = "Ваше повідомлення: " + msg.text
        }

        return {
            fromId: msg.fromId,
            respoynse: res
        }
    }
    
    return {
        InputRes: function(msg) {
            //console.log(msg);

            _msg = {
                fromId: msg.from.id,
                text: msg.text,
                name: msg.from.first_name
            }

            console.log(_msg);
            //console.log(Respounse(_msg));
           
             return Respounse(_msg);
        },
        
        
    }

})();

module.exports.Bot = Bot;