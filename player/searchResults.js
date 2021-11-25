module.exports = (client, message, query, tracks) => {
    message.channel.send({
        embed: {
            color: '5865f2',
            author: { name: `Here are your search results for "${query}"`, iconURL: `https://media.discordapp.net/attachments/865614901690630216/898635752697659443/K20V20N20Music_prev_ui.png` },
            footer: { text: '©2021 K V N Development' },
            timestamp: new Date(),
            description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`,
        },
    });
};