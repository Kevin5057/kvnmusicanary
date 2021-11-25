module.exports = {
    name: 'debug',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}debug',

    execute(client, message) {
        message.channel.send(`**Connected**: \`${client.voice.connections.size} channels\`  \n**Servers on**: \`${client.guilds.cache.size} servers\` \n**Bot Status**: \` Online\` \n**Bot Users** : \`${client.users.cache.size} users\` `);
    },
};