const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const data = require("../../config.json");
const economy = require("../resources/functions/economy")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("reaction-clear")
    .setDescription("Creates a reaction role."),

    async execute(interaction) {

    }
}