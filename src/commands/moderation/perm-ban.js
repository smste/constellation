const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const database = require();
const data = require("../../config.json");

module.exports = {
    data: new SlashCommandBuilder().setName("ban").setDescription("Ban a specified user.").addUserOption(option => option.setName('user').setDescription('Person being banned').setRequired(true)).addStringOption(option => option.setName('reason').setDescription('Reason for ban').setRequired(true)),
    async execute(interaction) {
        guild.members.ban(interaction.options.getUser("user"), interaction.options.getUser("reason"));
    }
}