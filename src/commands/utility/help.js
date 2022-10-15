const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const database = require();
const data = require("../../config.json");

module.exports = {
    data: new SlashCommandBuilder().setName("help").setDescription("If you're lost this is the command for you"),
    async execute(interaction) {
        
    }
}