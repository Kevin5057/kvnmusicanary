const fs = require('fs');
const discord = require('discord.js');
const client = new discord.Client({ disableMentions: 'everyone' });
const { Player } = require('discord-player');
const axios = require("axios");

client.player = new Player(client);
client.config = require('./config/bot');
client.emotes = client.config.emojis;
client.filters = client.config.filters;
client.commands = new discord.Collection();

process.on('unhandledRejection', (error) => console.error("Promise Warning Catch:", error))

require("http").createServer((_, res) => res.end("Client/App is Ready to use \nWeb: https://kvnteam7.wixsite.com/kvnmusic \n \n  ========================= \n \n   Prefix: [>] \n \n  ========================= \n \n   Bot Info: \n   -help \n   -debug \n   -ping \n \n  ========================= \n \n   Music: \n   -clear-queue \n   -nowplaying \n   -filters \n   -filter \n   -loop  \n   -pause \n   -play \n   -queue \n   -resume \n   -search \n   -shuffle \n   -skip \n   -stop \n   -volume <number> \n \n   Filters: \n   8D, gate, haas, phaser, treble, tremolo, vibrato, reverse, karaoke, flanger, mcompand, pulsator, subboost, bassboost, vaporwave, nightcore, normalizer, surrounding \n \n  =========================== \n   ©2021 K V N Development")).listen(8080)

client.on('messageCreate', async message => { // 'message' for Discord.js v12
    if (message.content === 'start') {
        if(message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'doodlecrew').then(async invite => {
                return message.channel.send(`${invite.code}`);
            });
        };
    };
});

fs.readdirSync('./commands').forEach(dirs => {
    const commands = fs.readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));

    for (const file of commands) {
        const command = require(`./commands/${dirs}/${file}`);
        console.log(`Loading command ${file}`);
        client.commands.set(command.name.toLowerCase(), command);
    };
});

const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
const player = fs.readdirSync('./player').filter(file => file.endsWith('.js'));

for (const file of events) {
    console.log(`Loading discord.js event ${file}`);
    const event = require(`./events/${file}`);
    client.on(file.split(".")[0], event.bind(null, client));
};

for (const file of player) {
    console.log(`Loading discord-player event ${file}`);
    const event = require(`./player/${file}`);
    client.player.on(file.split(".")[0], event.bind(null, client));
};

client.login(client.config.discord.token);