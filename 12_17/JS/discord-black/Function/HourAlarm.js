//Alarm Every Hour ("2 Hour!"), ("23 Hour!")

oc = require("./OpenChat.js")

exports.Alarm = function (Discord, guilds, previousHour) {
    setInterval(() => {
        let datelet = new Date();
        let currentHour = datelet.getHours();

        if (previousHour < currentHour) {
            guilds.guild_Channels.BamBe.Channel.text.LoLWait.send(currentHour + " Hour!");
            previousHour = currentHour;
            if (currentHour == 18) {
                oc.oppChat(Discord, guilds);
            }
        }
    }, 60000);
}

// gc_BamBe_.forEach(function(value, key) {
//   console.log(key + ' = ' + value);
// });js