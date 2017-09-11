// Let us use Discord.JS!
const Discord = require('discord.js');
// Defines client as the Bot User
const client = new Discord.Client()
    // Let us define config
const config = require('./config.json');

client.on('ready', () => {
    // For when it goes Online
    console.log("I'm Online!")
});

client.on('message', message => {
    // Defines message as the messages for the Bot
    if (message.content.startsWith(config.prefix + "ping")) {
        // So usage will be, ;;ping
        message.reply(`Pong!`)
            // If your message is ping, reply Pong!
    } else
    // Another Statement
    if (message.content.startsWith(config.prefix + "food")) {
        // Usage is ;;food
        message.reply('Yay! Food')
            // Replies Yay! Food
    }
});

// Let's let the bot Login
client.login(config.token)
    // Now , we make it login using the Config file!
