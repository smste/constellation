const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const database = require();
const data = require("../../config.json");

module.exports = {
    data: new SlashCommandBuilder().setName("leaderboard").setDescription("See the leaderboard"),
    async execute(interaction) {

    }
}