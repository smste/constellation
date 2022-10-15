const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const database = require();
const data = require("../../config.json");

module.exports = {
    data: new SlashCommandBuilder().setName("lottery").setDescription("Have a shot at the lottery"),
    async execute(interaction) {

    }
}