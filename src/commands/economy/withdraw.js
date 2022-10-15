const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const database = require();
const data = require("../../config.json");

module.exports = {
    data: new SlashCommandBuilder().setName("withdraw").setDescription("Withdraw from bank").addNumberOption(option => option.setName('amount').setDescription('Amount withdrawing').setRequired(true)),
    async execute(interaction) {

    }
}