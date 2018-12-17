//Client.Guilds
const ClientGuild = require("./Class/ClientGuildClass.js");
//UserStats
const ustClass = require("./Class/UserStats.js");
const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();
//function
const funs = require("./Function/index");

let userStats = new ustClass();

//Guilds Class
let gc = new ClientGuild(client.guilds);

let curreHo = new Date();
let previousHour = curreHo.getHours();

start = function (callback) {
  client.on("ready", () => {
    client.user.setActivity("/도움말");

    gc.init();

    funs.HourAlarm.Alarm(Discord, gc, previousHour);

    console.log("I am ready!");

    callback();
  });
};

start(function () {
  client.on("message", message => {
    funs.Msg.Message(message, userStats, gc);
    funs.WriteMessage.write(message);
  });
});

client.login(config.token);