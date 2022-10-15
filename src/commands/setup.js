const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("setup")
    .setDescription("Set your server up for your needs."),

    async execute(interaction) {
        return interaction.reply({content: `This feature is coming soon.`});
    }
}; 