const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("respect")
    .setDescription("Pay your respects to two friends of mine that passed away for some daily rewards"),

    async execute(interaction) {

        const amount = Math.floor(Math.random() * (200 - 1 + 1)) + 1;
        
        return interaction.reply({content: `Thank you for paying your respects, here is ${amount}`});
    }
};