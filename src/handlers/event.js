const { readdirSync } = require('fs-extra');

module.exports = (client) => {

    readdirSync('./src/events').forEach(dirs => {
        const events = readdirSync(`./src/events/${dirs}`).filter(files => files.endsWith('.js'));

        for (const file of events) {
            const event = require(`../events/${dirs}/${file}`);
            client.logger.info(`Loading event ${file}`);
            client.on(file.split(".")[0], event.bind(null, client));
        }

    });

}