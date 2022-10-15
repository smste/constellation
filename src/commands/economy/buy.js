const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const database = require();
const data = require("../../config.json");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("buy")
    .setDescription("Purchase an item from the shop")
    .addStringOption(option => 
        option.setName('item')
		.setDescription('Select an item')
		.setRequired(true)
		.addChoices(
			{ name: 'Mystery Box', value: '259' },
			{ name: 'Light Bulb', value: '30' },
            { name: 'Fishing Rod', value: '100' },
            { name: 'Pickaxe', value: '150' },
            { name: 'Orange', value: '50' },
            { name: 'Mobile Phone', value: '600' },
            { name: 'Bracelet', value: '10000' },
            { name: 'Scarf', value: '300' },
            { name: 'Axe', value: '250' },
            { name: 'Screwdriver', value: '80' },
            { name: 'Ladder', value: '90' },
            { name: 'Bandaid', value: '40' },
            { name: 'Broom', value: '95' },
            { name: 'Plunger', value: '85' },
            { name: 'Sponge', value: '110' },
            { name: 'Old Key', value: '145' },
            { name: 'House Key', value: '130' },
            { name: 'Compass', value: '450' },
            { name: 'Credit Card', value: '750' },
            { name: 'Battery', value: '35' },
            { name: 'Flashlight', value: '400' },
            { name: 'Candle', value: '300' },
	)),
    async execute(interaction) {
        const user_conn = database.connect(`user_${interaction.user.id}`);
        const wallet = user_conn.get(interaction.user.id, wallet_bal);
        const bank = user_conn.get(interaction.user.id, bank_bal);

        const embedMessage1 = new MessageEmbed()
            .setTitle(`${data.emoji.misc.success} Purchase Success: **${interaction.options.get("item").name}** `)
            .setDescription(`You have successfully purchased **${interaction.options.get("item").name}** for **${interaction.options.get("items").name.value}** Coins`)
            .setColor(0x3959ff)
            .setAuthor({
                name: interaction.user.tag,
                iconURL: interaction.user.displayAvatarURL()
            })
            
        const embedMessage2 = new MessageEmbed()
            .setTitle(`${data.emoji.misc.error} Purchase Failure: **${interaction.options.get("item").name}**`)
            .setDescription(`There was a problem whilst purchasing **${interaction.options.get("item").name}**. You do not have the sufficient amount of money to purchase that item. Try using commands that earn you money and try again.`)
            .setColor(0x3959ff)
            .setAuthor({
                name: interaction.user.tag,
                iconURL: interaction.user.displayAvatarURL()
            })

        const embedMessage3 = new MessageEmbed()
            .setTitle(`${data.emoji.misc.error} Purchase Failure: **${interaction.options.get("item").name}**`)
            .setDescription(`There was a problem whilst purchasing **${interaction.options.get("item").name}**. You do not have the sufficient amount of money to purchase that item. Try withdrawing some money from your bank account since you have enough to pay for this item there.`)
            .setColor(0x3959ff)
            .setAuthor({
                name: interaction.user.tag,
                iconURL: interaction.user.displayAvatarURL()
            })
        
        if (wallet >= interaction.options.get("item").name.value) {
            user_conn.remove(`money_${interaction.user.id}`, amount)
            return interaction.reply({embeds: [embedMessage1]})
        } elseif (bank >= interaction.options.get("item").name.value || (wallet+bank) >= interaction.options.get("item").name.value); {
            return interaction.reply({embeds: [embedMessage3]})
        }
    }
}