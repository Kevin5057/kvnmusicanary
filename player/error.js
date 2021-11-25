module.exports = (client, error, message, ...args) => {
    switch (error) {
        case 'NotPlaying':
            message.channel.send(`${client.emotes.error} There is no music being played on this server!`);
            break;
        case 'NotConnected':
            message.channel.send(`${client.emotes.error} You are not connected in any voice channel!`);
            break;
        case 'UnableToJoin':
            message.channel.send(`${client.emotes.error} I am not able to join your voice channel, please check my permissions! \nIf this bot having problem, you can join our support server to report! https://discord.gg/UPP6RXg3D2`);
            break;
        case 'VideoUnavailable':
            message.channel.send(`${client.emotes.error} ${args[0].title} is not available in your country! Skipping...`);
            break;
        case 'MusicStarting':
            message.channel.send(`\`The music is starting...\` \n \nhttps://discord.gg/UPP6RXg3D2 \nIf this bot having problem, you can join our support server to report! `);
            break;
        default:
            message.channel.send(`<a:loading:898426503287668766> **Something went wrong or crashed**, Please wait until fixed... \n<:TRT_VALblank:877168546868756540> **Error code**: \`${error}\` \n \nhttps://discord.gg/UPP6RXg3D2 \nIf this bot having problem, you can join support server to report!`);
    };
};
