module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		client.user.setActivity(`${client.guilds.cache.size} Servers`,  { type: 'WATCHING' });
		console.log(`Ready! Logged in as ${client.user.tag}`);
	},
};