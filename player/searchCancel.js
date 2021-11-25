module.exports = (client, message, query, tracks) => {
    message.channel.send(`${client.emotes.off} You did not provide a valid response... Please send the command again!`);
};