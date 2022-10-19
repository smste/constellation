const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const data = require("../../config.json");

module.exports = {
    data: new SlashCommandBuilder().setName("kick").setDescription("kicks a specified user with reason").addUserOption((option) => option.setName('user').setDescription('specify user').setRequired(true)).addStringOption((option) => option.setName('reason').setDescription('specify reason').setRequired(false)).addBooleanOption((option) => option.setName('dm').setDescription('dm user').setRequired(false)),
    async execute(interaction) {
        console.log("KICK!");
    }
}