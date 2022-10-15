const { EmbedBuilder, SlashCommandBuilder, ChannelType } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("ban")
    .setDescription("Bans a user from your server").addUserOption((option) => option.setName('user').setDescription('The user to ban').setRequired(true)).addStringOption((option) => option.setName('reason').setDescription('The reason for the ban').setRequired(false)).addNumberOption((option) => option.setName('duration').setDescription('The duration for the ban in hours').setRequired(false)).addNumberOption((option) => option.setName('purge_days').setDescription('Number of days to purge messages').setRequired(false)).addBooleanOption((option) => option.setName('dm').setDescription('shall I dm the user once banned')),
   
    async execute(interaction) {
        console.log("Ban!!");
    }
};