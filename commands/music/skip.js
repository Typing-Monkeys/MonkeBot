const Quotes = require("../../src/quotes");

module.exports = {
    name: 'skip',
    aliases: ['sk'],
    utilisation: '{prefix}skip',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(Quotes.error_noMusicIsPlaying(message.author));

        const success = queue.skip();

        return message.channel.send(success ? Quotes.success_skipped(queue.current.title) : Quotes.error_somethingWentWrong(message.author));
    },
};