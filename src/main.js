const { Client, Collection } = require("discord.js");
const { readdirSync } = require("fs-extra");

const client = new Client(require("./storage/config").intents);

client.commands = new Collection();
client.cooldown = new Collection();
client.logger = require("./utilities/logger");
client.config = require("./storage/config");

readdirSync('./src/handlers').forEach((handler) => {
    require(`./handlers/${handler}`)(client);
});

client.login(client.config.discord.token).catch(err => {
    client.logger.error("Invalid Bot Token!");
    process.exit(0);
});