const Quotes = require("../../src/quotes");

module.exports = {
    name: 'pause',
    aliases: [],
    utilisation: '{prefix}pause',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(Quotes.error_noMusicIsPlaying(message.author));

        const success = queue.setPaused(true);
        
        return message.channel.send(success ? Quotes.info_pause(queue.current.title) : Quotes.error_somethingWentWrong(message.author));
    },
};