const Quotes = require("./quotes");

player.on('error', (queue, error) => {
    console.log(`[${new Date().fullDate()}] Error emitted from the queue ${error.message}`);
});

player.on('connectionError', (queue, error) => {
    console.log(`[${new Date().fullDate()}] Error emitted from the connection ${error.message}`);
});

player.on('trackStart', (queue, track) => {
    if (!client.config.opt.loopMessage && queue.repeatMode !== 0) return;
    queue.metadata.send(Quotes.success_trackStart(track.title));
});

player.on('trackAdd', (queue, track) => {
    queue.metadata.send(Quotes.success_addQueue(track.title));
});

player.on('botDisconnect', (queue) => {
    queue.metadata.send(Quotes.info_botDisconnected());
});

player.on('channelEmpty', (queue) => {
    queue.metadata.send(Quotes.info_leave());
});

player.on('queueEnd', (queue) => {
    queue.metadata.send(Quotes.info_endQueue());
});