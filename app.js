// Let us use Discord.JS!
const Discord = require('discord.js');
// Defines client as the Bot User
const client = new Discord.Client()

client.on('ready', () => {
    // For when it goes Online
    console.log("I'm Online!")
});

client.on('message', message => {
    // Defines message as the messages for the Bot
    if (message.content === "ping") {
        message.reply(`Pong`)
            // If your message is ping, reply Pong!
    }
});

// Let's let the bot Login
client.login('NO TOKEN FOR YOU!')
