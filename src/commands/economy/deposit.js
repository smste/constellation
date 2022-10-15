const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const database = require();
const data = require("../../config.json");

module.exports = {
    data: new SlashCommandBuilder().setName("deposit").setDescription("Deposit amount to bank").addNumberOption(option => option.setName('amount').setDescription('Amount depositing').isRequired(true)),
    async execute(interaction) {

    }
}