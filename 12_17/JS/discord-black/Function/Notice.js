exports.embNotice = function (Discord, guilds) {

    const embed = new Discord.RichEmbed()
        .setColor(0xEA1A11)
        .setThumbnail("https://vignette.wikia.nocookie.net/fantendo/images/a/af/Call_of_Duty_Black_Ops_4_icon.png")
        .setTitle(guilds.guild_Channels.Delete_Developer.emojis._Fixparrot + "  Notice")
        .addField("PatchNote", "Module(최적화)")
        .addField("I'm Going to...", "Add User Recent the Matchs\nMaking Site\naddDataBase")
        .setFooter("ver 1.0.1");

    guilds.guild_Channels.BamBe.Channel.text.Notice.send({
        embed
    });
}