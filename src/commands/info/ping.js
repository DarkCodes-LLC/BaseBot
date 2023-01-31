const { ApplicationCommandType, EmbedBuilder} = require('discord.js');

module.exports = {
    name: 'ping',
    description: "Check Bot Latency!.",
    type: ApplicationCommandType.ChatInput,
    cooldown: 3000,
    run: async (client, interaction) => {

        let startTime = Date.now();
        const message = await interaction.channel.send("Pinging...");
        let endTime = Date.now();

        message.delete();

        const pingEmbed = new EmbedBuilder();
        pingEmbed.setColor("#ffffff");
        pingEmbed.setDescription(`\`\`\`Latency: ${endTime - startTime}ms\nWebsocket: ${client.ws.ping}ms\`\`\``);
        interaction.reply({ embeds: [pingEmbed] });
    }
};