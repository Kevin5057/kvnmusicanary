module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} Music stopped as i have been __disconnected__ from the channel!`);
};