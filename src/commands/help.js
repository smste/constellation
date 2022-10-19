const { EmbedBuilder, SlashCommandBuilder, ChannelType } = require("discord.js");
const data = require("../../config.json");

module.exports = {
    data: new SlashCommandBuilder().setName("help").setDescription("Get some help with how to use Constellation"),
    async execute(interaction) {
        console.log("i");
    }
}