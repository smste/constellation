const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const database = require();
const data = require("../../config.json");

module.exports = {
    data: new SlashCommandBuilder().setName("fish").setDescription("Throw your rod out and catch some bait"),
    async execute(interaction) {

    }
}