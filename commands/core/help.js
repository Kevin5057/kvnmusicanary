module.exports = {
  name: "help",
  description: "Show all existing commands",
  aliases: ["h"],
  permissions: {
    user: [],
    client: []
  },
  cooldown: 5,
  execute(client, message, args) {
        if (!args[0]) {
            const infos = message.client.commands.filter(x => x.category == 'Infos').map((x) => '`' + x.name + '`').join(', ');
            const music = message.client.commands.filter(x => x.category == 'Music').map((x) => '`' + x.name + '`').join(', ');

            message.channel.send({
                embed: {
                    color: '7289da',
                    author: { name: 'K V N Music bot help', iconURL:'https://cdn.discordapp.com/attachments/865614901690630216/898635213515685918/logo.gif' },
                    title: 'Help Pannel',
                    thumbnail: {url: 'https://cdn.discordapp.com/attachments/865614901690630216/898635752697659443/K20V20N20Music_prev_ui.png'},
                    footer: { text: '©2021 K V N Development' },
                    fields: [
                        { name: ':robot: Bot', value: infos },
                        { name: '<:KS_music_logo:895900288836333598> Music', value: music },
                        { name: ':card_box: Filters', value: client.filters.map((x) => '`' + x + '`').join(', ') },
                        { name: ':globe_with_meridians: Website', value: '[Invite](https://discord.com/oauth2/authorize?client_id=873133649921462272&scope=bot&permissions=4399157064) | [Commands](https://kvnteam7.wixsite.com/kvnmusic/commands) | [Support Server](https://discord.gg/UPP6RXg3D2)'}
                    ],
                    timestamp: new Date(),
                    description: `Use \`${client.config.discord.prefix}\` followed by a command name to get more additional information on a command.`,
                },
            });
        } else {
            const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(x => x.aliases && x.aliases.includes(args.join(" ").toLowerCase()));

            if (!command) return message.channel.send(`${client.emotes.error} I did not find this command!`);

            message.channel.send({
                embed: {
                    color: '7289da',
                    author: { name: 'K V N Music bot help', iconURL: 'https://media.discordapp.net/attachments/865614901690630216/898635213515685918/logo.gif' },
                    image: {url: 'https://cdn.discordapp.com/attachments/906495241186574358/906495459625951232/K_V_N_MUSIC_-_Banner.png'},
                    footer: { text: '©2021 K V N Development' },
                    fields: [
                        { name: 'Name', value: command.name, inline: true },
                        { name: 'Category', value: command.category, inline: true },
                        { name: 'Aliase(s)', value: command.aliases.length < 1 ? 'None' : command.aliases.join(', '), inline: true },
                        { name: 'Utilisation', value: command.utilisation.replace('{prefix}', client.config.discord.prefix), inline: true },
                    ],
                    timestamp: new Date(),
                    description: 'Find information on the command provided.\nMandatory arguments `[]`, optional arguments `<>`.',
                }
            });
        };
    },
};