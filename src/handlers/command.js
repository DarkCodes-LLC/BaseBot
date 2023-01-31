const { PermissionsBitField } = require('discord.js');
const { readdirSync } = require("fs-extra");
const { Routes } = require('discord-api-types/v9');
const { REST } = require('@discordjs/rest');


module.exports = (client) => {

    const commands = [];

    readdirSync('./src/commands').forEach( dir => {
        const files = readdirSync(`./src/commands/${dir}/`).filter(file => file.endsWith('.js'));

        for(const file of files){
            const command = require(`../commands/${dir}/${file}`);

            commands.push({
                name: command.name,
                description: command.description,
                type: command.type,
                options: command.options ? command.options : null,
                default_permission: command.default_permission ? command.default_permission : null,
                default_member_permissions: command.default_member_permissions ? PermissionsBitField.resolve(command.default_member_permissions).toString() : null
            });

            client.commands.set(command.name, command) && client.logger.info(`Loading command ${command.name}.js`)
        }
    });

    (async () => {
        await new REST().setToken(client.config.discord.token).put(
            Routes.applicationCommands(client.config.discord.client_id),
            { body: commands }
        );
    })();


};