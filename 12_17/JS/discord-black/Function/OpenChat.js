exports.oppChat = function (Discord, guilds) {

    const emoa1 = guilds.guild_Channels.Delete_Developer.emojis._gentlemanparrot + guilds.guild_Channels.Delete_Developer.emojis._parrotwave1;
    const emoa2 = guilds.guild_Channels.Delete_Developer.emojis._parrotwave1 + guilds.guild_Channels.Delete_Developer.emojis._gentlemanparrot;

    const embed = new Discord.RichEmbed()
        .setColor(0xEA1A11)
        .addField(
            emoa1 + "  오픈톡방 아직 참여 안하신 분들은 많이 참여해 주세용  " + emoa2,
            "<https://open.kakao.com/o/gsCEi33>");

    guilds.guild_Channels.BamBe.Channel.text.Notice.send({
        embed
    });
}