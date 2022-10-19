const { EmbedBuilder, SlashCommandBuilder, ChannelType } = require("discord.js");
const data = require("../../config.json");

module.exports = {
    data: new SlashCommandBuilder().setName("lock").setDescription("kicks a specified user with reason").addChannelOption((option) => option.setName('channel').setDescription('the channel to lock').setRequired(true).addChannelTypes(ChannelType.GuildText, ChannelType.GuildCategory, ChannelType.GuildVoice, ChannelType.PublicThread,ChannelType.PrivateThread)),
    async execute(interaction) {
        console.log("LOCK!");
    }
}