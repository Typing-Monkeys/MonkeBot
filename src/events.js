player.on('error', (queue, error) => {
    console.log(`[${new Date().fullDate()}] Error emitted from the queue ${error.message}`);
});

player.on('connectionError', (queue, error) => {
    console.log(`[${new Date().fullDate()}] Error emitted from the connection ${error.message}`);
});

player.on('trackStart', (queue, track) => {
    if (!client.config.opt.loopMessage && queue.repeatMode !== 0) return;
    queue.metadata.send(`Monke play ${track.title} 🎧`);
    //queue.metadata.send(`Started playing ${track.title} in **${queue.connection.channel.name}** 🎧`);
});

player.on('trackAdd', (queue, track) => {
    queue.metadata.send(`Monke add song ${track.title} to MonkeQueue ✅`);
    //queue.metadata.send(`Track ${track.title} added in the queue ✅`);
});

player.on('botDisconnect', (queue) => {
    queue.metadata.send('Monke was kicked out ❌');
    //queue.metadata.send('I was manually disconnected from the voice channel, clearing queue... ❌');
});

player.on('channelEmpty', (queue) => {
    queue.metadata.send('Monke alone... Monke sad... Monke leave ❌');
    //queue.metadata.send('Nobody is in the voice channel, leaving the voice channel... ❌');
});

player.on('queueEnd', (queue) => {
    queue.metadata.send('Monke no more song ✅');
    //queue.metadata.send('I finished reading the whole queue ✅');
});