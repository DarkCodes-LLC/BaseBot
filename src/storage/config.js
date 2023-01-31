const { Partials, GatewayIntentBits, ActivityType } = require("discord.js");

module.exports = {

    discord: {
        client_id: "",
        token: "",
        invite: ""
    },

    intents: {
        partials: [
            Partials.Channel, // Text Channel Partial
            Partials.GuildMember, // Guild Member Partial
            Partials.User, // Discord User Partial
            Partials.Message, // Discord Message Partial
        ],
        intents: [
            GatewayIntentBits.MessageContent, // Message Content Bits
            GatewayIntentBits.Guilds, // Guild Related Bits
            GatewayIntentBits.GuildMembers, // Guild Members Bits
            GatewayIntentBits.GuildIntegrations, // Discord Integrations Bits
            GatewayIntentBits.GuildMessages, // Guild Messages Bits
            GatewayIntentBits.DirectMessages, // Direct Messages Bits
        ],
    },

    status: {
        activities: [
            {name: "with dark devs!", type: ActivityType.Playing},
            {name: "for github updates!", type: ActivityType.Watching},
            {name: "to dev chatter ;D", type: ActivityType.Listening},
            {name: "to a server near you!", type: ActivityType.Streaming, url: "https://twitch.tv/example"}
        ],
        status_types: [
            "online",
            "dnd",
            "idle"
        ]
    }

}