const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const database = require();
const data = require("../../config.json");

module.exports = {
    data: new SlashCommandBuilder().setName("crime").setDescription("Commit a virtual crime for a chance of coins"),
    async execute(interaction) {
        const user_conn = database.connect(`user_${interaction.user.id}`);
        const wallet = user_conn.get(interaction.user.id, wallet_bal);
        const jailTime = user_conn.get(interaction.user.id, jailTime);
        const timeout = 900;
        const chance = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
        const amount = Math.floor(Math.random() * (450 - 1 + 1)) + 1;

        const embedMessage1 = new MessageEmbed()
        .setTitle(`${data.emoji.misc.warning} You Committed a Crime and got **${amount}**`)
        .setDescription(`You robbed your neighbourhood hardware store by *secretly* stealing some pricey products. Fortunately, you were not caught; but, do not become overly optimistic because you might get caught. \n \n The heist got you **${amount}**, woohoo!`)
        .setColor(0x3959ff)
        .setAuthor({
            name: interaction.user.tag,
            iconURL: interaction.user.displayAvatarURL()
        })

        const embedMessage2 = new MessageEmbed()
        .setTitle(`${data.emoji.misc.warning} You Got Caught`)
        .setDescription(`Unfortunately, the clerk was able to catch you while you were attempting to steal from their store, and you were charged ${amount} coins.`)
        .setColor(0x3959ff)
        .setAuthor({
            name: interaction.user.tag,
            iconURL: interaction.user.displayAvatarURL()
        })

        const embedMessage3 = new MessageEmbed()
        .setTitle(`${data.emoji.misc.warning} You Got Caught`)
        .setDescription(`Unfortunately, the clerk was able to catch you while you were attempting to steal from their store, and you were charged ${amount} coins but you couldn't pay so you were jailed for 30 seconds.`)
        .setColor(0x3959ff)
        .setAuthor({
            name: interaction.user.tag,
            iconURL: interaction.user.displayAvatarURL()
        })

        if (amount === 1 || 2) {
            user_conn.add(`money_${interaction.user.id}`, amount)
            return interaction.reply({embeds: [embedMessage1]})
        }
        if (amount === 3 && wallet >= amount) {
            return interaction.reply({embeds: [embedMessage2]})
        }
    }
} 