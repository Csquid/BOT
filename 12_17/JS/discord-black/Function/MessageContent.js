const searchSetting = require("./searchSetting.js");
const Discord = require("discord.js");
const notice = require("./Notice.js");
const oc = require("./OpenChat.js");

exports.Message = function (message, userStats, gc) {
    let searStr = message.content;
    let chSearStr = searStr.replace(/\#/, "-");
    let userTag = chSearStr.substr(4);
    const checkMessage = message.content.toString();

    // const em = "<a:ultrafastparrot:487267818266427416>";

    if (message.content === "ping") {
        message.channel.send("pong");
    }

    if (message.author.id == "283573754074890241") {
        if (message.content == "/join") {
            message.member.voiceChannel.join();
        }
        if (message.content == "/Notice" || message.content == "/공지") {
            notice.embNotice(Discord, gc);
        }
        if (message.content == "/OpenChat") {
            oc.oppChat(Discord, gc);
        }
    }

    if (message.content == "/icon") {
        message.channel.send(message.author.avatarURL);
    }

    let checkSearch;
    if (searStr.search("/전적") > -1) {

        checkSearch = searchSetting.check(userTag, message);

        if (checkSearch == true) {
            searchSetting.InputUserData(userTag, userStats, message);
        }

    }
    if (checkMessage.indexOf("?") != -1) {
        message.react(gc.emoji_DeleteDeveloper);
    }
    if (checkMessage.indexOf("!") != -1) {
        message.react(gc.emoji_DeleteDeveloper);
    }
    if (checkMessage.indexOf("js") != -1) {
        message.react(gc.emoji_EmojiServer_javascript);
    }

    const voiceChannel = message.member.voiceChannel;
    let list = new Array();

    // if (checkMessage.search("/play") > -1) {
    //     if (playing == 1) {
    //         message.channel.send("Music Playing");
    //         return;
    //     }

    //     if (!voiceChannel) {
    //         message.channel.send("you are not voice channel");
    //         return;
    //     }

    //     url = checkMessage.substr(6);
    //     let stream;

    //     if (url == "") {
    //         stream = null;
    //         message.channel.send("write url please");
    //     } else {
    //         stream = ytdl(url, {
    //             filter: 'audioonly'
    //         });
    //     }

    // }

    if (message.content == "/stop") {
        voiceChannel.leave();
    } else if (message.content == "/pause") {
        voiceChannel.connection.dispatcher.pause();
    } else if (message.content == "/resume") {
        voiceChannel.connection.dispatcher.resume();
    } else if (message.content == "/mute") {
        voiceChannel.connection.dispatcher.setVolume(0);
    } else if (message.content == "/mute return") {
        voiceChannel.connection.dispatcher.setVolume(1);
    } else if (message.content == "/loop") {

    } else if (message.content == "/loop cancel") {

    }
}