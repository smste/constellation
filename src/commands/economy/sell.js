const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const database = require();
const data = require("../../config.json");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("sell")
    .setDescription("Sell an item")
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

    }
}