const { EmbedBuilder, SlashCommandBuilder, messageLink } = require("discord.js");
const data = require("../../../../config.json");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("reaction-add")
    .setDescription("Creates a reaction role.")
    .addRoleOption(option => option.setName('role').setDescription('The role').setRequired(true))
    .addChannelOption(option => option.setName('channel').setDescription('Which channel it will be posted').setRequired(true).addChannelTypes('GUILD_TEXT'))
    .addStringOption(option => option.setName('message').setDescription('What the message will say')),

    async execute(interaction) {

    }
}