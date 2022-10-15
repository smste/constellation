const { Client, Collection, GatewayIntentBits } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const data = require("../config.json")

const mongo = require('./resources/events/mongo');
const guildsSchema = require('./resources/structures/guilds-structure');

const eventsPath = path.join(__dirname, './resources/events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

// client.on('guildCreate', async (guild) => {
// 	const id = guild.id;
// 	const result = null

// 	try {
// 	result = await guildsSchema.findOne({
// 		guildid,
// 		bannedGuild,
// 	})} finally {
// 		console.log("hello");
// 	}

// 	await mongo().then(async (mongoose) => {
// 	try {
// 		const data = {
// 		guildid: id,
// 		bannedGuild: false,
// 		};
	
// 	if (!result) {
// 		await new guildsSchema(data).save()
// 	}
// 	} finally {
// 		mongoose.connection.close()
// 	};
// 	});
// });

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	};
};

client.commands = new Collection();
const commandsPath = path.join(__dirname, './commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	client.commands.set(command.data.name, command);
	console.log(`Loaded ${command.data.name}`)
}

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: `${error}`, ephemeral: true });
	}
});

client.login(data.bot.token);