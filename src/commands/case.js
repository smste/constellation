const { EmbedBuilder, SlashCommandBuilder, ChannelType } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("case")
    .setDescription("Find a specific case for a moderation")
    .addUserOption((option) => option.setName('user').setDescription('The cases for user').setRequired(true))
    .addStringOption(option => 
        option.setName('deatil')
		.setDescription('Select what you want to do')
		.setRequired(true)
		.addChoices(
			{ name: 'Change', value: '1' },
			{ name: 'View', value: '2' },
            { name: 'Remove', value: '3' },
	))
    .addStringOption(option => 
        option.setName('type')
		.setDescription('Select a type of case')
		.setRequired(false)
		.addChoices(
			{ name: 'Kicks', value: '1' },
			{ name: 'Bans', value: '2' },
            { name: 'Timeouts', value: '3' },
	)),
   
    async execute(interaction) {
        console.log("Ban!!");
    }
};