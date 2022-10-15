const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const database = require();
const data = require("../../../config.json");

module.exports = {
    data: new SlashCommandBuilder().setName("beg").setDescription("Earn coins by begging"),
    async execute(interaction) {
        const user_conn = database.connect(`user_${interaction.user.id}`);
        const timeout = 900;
        const amount = Math.floor(Math.random() * (200 - 1 + 1)) + 1;

        if (user_conn !== null && timeout - (Date.now() - user_conn.timeout) > 0) {
            const time = ms(timeout - (Date.now() - beg));
            const embedMessage = new MessageEmbed()
            .setTitle(`${data.emoji.misc.stop_sign} hold your horses`)
            .setDescription(`Do not go around trying to get more than you can get, try again in **${time.minutes} minutes**, nice try.`)
            .setColor(0xff3939)
            .setAuthor({
                name: interaction.user.tag,
                iconURL: interaction.user.displayAvatarURL()
            })
            .addFields.addFields([
                {
                    name: `${data.emoji.misc.star} Perks of Pro`,
                    value: `If you want to get rid of having to wait so long, you can purchase Constellation Pro and only have to wait 5 minutes! \n \n **Interested?** https://patreon.com/constellationbot`,
                    inline: true
                },
            ])
            return interaction.reply({embeds: [embedMessage]})
        } else {
            const embedMessage = new MessageEmbed()
            .setTitle(`${data.emoji.economy.coin} you begged & received ${amount} coins`)
            .setDescription(`Be happy that the guy you've been begging on the street has finally agreed to give you a good ${amount} coins. \n \n Now you have to wait **15 minutes** before you can try again.`)
            .setColor(0x3959ff)
            .setAuthor({
                name: interaction.user.tag,
                iconURL: interaction.user.displayAvatarURL()
            })
            .addFields([
                {
                    name: `Well...`,
                    value: `Now you have to wait **15 minutes** before you can try again.`,
                    inline: true
                },
                {
                    name: `${data.emoji.misc.star} Perks of Pro`,
                    value: `Having Pro allows you to bypass this limit by an extra 10 minutes lowering your cooldown to 5 minutes instead. \n \n **Interested?** https://patreon.com/constellationbot`,
                    inline: true
                },
            ])
            user_conn.add(`money_${interaction.user.id}`, amount)
            return interaction.reply({embeds: [embedMessage]})
        }
    } 
}