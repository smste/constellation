const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const data = require("../../config.json");
const economy = require("../resources/functions/economy")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("balance")
    .setDescription("Check yours or others balance")
    .addUserOption(option =>
        option
        .setName('user')
        .setDescription('The user you are checking')
        .setRequired(true)),

    async execute(interaction) {
        const guildId = interaction.guild.id;
        const userId = interaction.options.getMember('user').id;

        const wallet = await economy.getWallet(guildId, userId);
        const bank = await economy.getBank(guildId, userId);

        const embedMessage1 = new EmbedBuilder()
            .setTitle(`${data.emoji.economy.money_with_wings} Balance`)
            .setDescription(`**Wallet:** ${wallet}\n**Bank:** ${bank}\n**Total:** ${wallet+bank}`)
            .setColor(0x3959ff)
            .setAuthor({
                name: interaction.user.tag,
                iconURL: interaction.user.displayAvatarURL()
        });
        
        return interaction.reply({embeds: [embedMessage1]});
    }
};