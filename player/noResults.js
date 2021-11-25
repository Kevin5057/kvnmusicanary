module.exports = (client, message, query) => {
    message.channel.send(`${client.emotes.off} No results found on YouTube for ${query}!`);
};