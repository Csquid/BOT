const guild_enum = require("../Enum/GuildEnum.js");

module.exports = class GuildClass {
  constructor(obj) {
    this._guild = obj;
  }

  init() {
    this.guild_Delete_Developer = this._guild.get(guild_enum.guildRoomEnum.delete_Developer);
    this.guild_Include_Stdio = this._guild.get(guild_enum.guildRoomEnum.include_Stdio);
    this.guild_BamBe_Friend = this._guild.get(guild_enum.guildRoomEnum.bamBe_Friend);
    this.guild_Emoji_Server = this._guild.get(guild_enum.guildRoomEnum.emoji_Server);
    this.guild_Bot_Shop = this._guild.get(guild_enum.guildRoomEnum.bot_Shop);

    this.channel_Delete_Developer = this.guild_Delete_Developer.channels;
    this.channel_Include_Stdio = this.guild_Include_Stdio.channels;
    this.channel_BamBe_Friend = this.guild_BamBe_Friend.channels;
    this.channel_Emoji_Server = this.guild_Emoji_Server.channels;
    this.channel_Bot_Shop = this.guild_Bot_Shop.channels;

    this.textChannel_Notice_Bambe = this.channel_BamBe_Friend.get(guild_enum.GroupChannel.bamBe_Friend._notice);
    this.textChannel_General_Bambe = this.channel_BamBe_Friend.get(guild_enum.GroupChannel.bamBe_Friend._general);
    this.textChannel_LoL_Waiting_Bambe = this.channel_BamBe_Friend.get(guild_enum.GroupChannel.bamBe_Friend._lolWaiting);
    this.textChannel_Callofduty_stats_Bambe = this.channel_BamBe_Friend.get(guild_enum.GroupChannel.bamBe_Friend._callOfDutyStats);

    this.emoji_Delete_gentlemanparrot = this.guild_Delete_Developer.emojis.get(guild_enum.EmojiChannel.delete_Developer._gentlemanparrot);
    this.emoji_Delete_parrotwave1 = this.guild_Delete_Developer.emojis.get(guild_enum.EmojiChannel.delete_Developer._parrotwave1);
    this.emoji_Delete_fixparrot = this.guild_Delete_Developer.emojis.get(guild_enum.EmojiChannel.delete_Developer._fixparrot);
    this.emoji_DeleteDeveloper = this.guild_Delete_Developer.emojis.get("487267818266427416");

    this.emoji_EmojiServer_javascript = this.guild_Emoji_Server.emojis.get(guild_enum.EmojiChannel.emoji_Server._javascript);

    this.guild_Channels = {
      "BamBe": {
        "Channel": {
          "text": {
            "Notice": this.textChannel_Notice_Bambe,
            "General": this.textChannel_General_Bambe,
            "LoLWait": this.textChannel_LoL_Waiting_Bambe,
            "CallOfDudy_Stats": this.textChannel_Callofduty_stats_Bambe
          },
          "voice": {}
        }
      },
      "Delete_Developer": {
        "emojis": {
          "_gentlemanparrot": this.emoji_Delete_gentlemanparrot,
          "_parrotwave1": this.emoji_Delete_parrotwave1,
          "_Fixparrot": this.emoji_Delete_fixparrot
        }
      }
    }
  }

  printDeleteDeveloper() {
    // console.log(guild_enum.GroupChannel.bamBe_Friend._general);
  }

  channelSend() {
    this.textChannel_General_Bambe.send("Hello? I'm Testing");
    // console.log(this.guild_Delete_Developer.emojis)
  }

  get_Data() {
    return this.channel_BamBe_Friend;
  }
  get_Text_Channel_Notice_Bambe() {
    return this.textChannel_Notice_Bambe;
  }
  get_Text_Channel_BamBe_Friend_General() {
    return this.textChannel_General_Bambe;
  }
  get_Text_Channel_BamBe_Friend_LoL_Waiting() {
    return this.textChannel_Lol_Waiting_Bambe;
  }
  get_TextChannel_Callofduty_stats_Bambe() {
    return this.textChannel_Callofduty_stats_Bambe;
  }
  get_Emoji1() {
    return this.emoji_DeleteDeveloper;
  }
  get_Emoji_fixparrot() {
    return this.emoji_Delete_fixparrot;
  }
  get_Emoji_gentlemanparrot() {
    return this.emoji_Delete_gentlemanparrot;
  }
  get_Emoji_parrotwave1() {
    return this.emoji_Delete_parrotwave1;
  }
};