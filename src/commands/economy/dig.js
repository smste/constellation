const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const database = require();
const data = require("../../config.json");

module.exports = {
    data: new SlashCommandBuilder().setName("dig").setDescription("Use your pickaxe to dig up expensive things."),
    async execute(interaction) {
        const user_conn = database.connect(`user_${interaction.user.id}`);
    }
}