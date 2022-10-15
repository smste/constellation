const { Client, Collection, GatewayIntentBits } = require('discord.js');
const fs = require('fs')

const client = Client({ intents: GatewayIntentBits.Guilds });
client.commands = new Collection();
client.commandArray = []

const functionFolders = fs.readdirSync(`./resources/functions`);
for (const folder of functionFolders) {
    const functionFolders = fs
    .readdirSync(`./resources/functions/${folder}`)
    .filter(file => file.endsWith('.js'));
    for (const file of functionFolders)
        require(`./functions/${folder}/${file}`)(client);
}

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: `${error} https://discord.gg/4dhF3cUEA5`, ephemeral: true });
	}
});

client.login(data.bot.token);