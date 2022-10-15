const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const database = require();
const data = require("../../../config.json");

module.exports = {
    data: new SlashCommandBuilder().setName("work").setDescription("Do jobs to earn coins"),
    async execute(interaction) {
        const user_conn = database.connect(`user_${interaction.user.id}`);
        const jobs = data.jobs
    }
}