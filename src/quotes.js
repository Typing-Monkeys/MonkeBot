class Quotes {
    // ERRORS //
    static error_invalidSearch(value) {
        return `Please enter a valid search ${value}... try again ? ❌`;
    }

    static error_noResoultFound(value) {
        return `No results found ${value}... try again ? ❌`;
    }

    static error_cantJoinChannel(value) {
        return `I can't join the voice channel ${value}... try again ? ❌`;
    }

    // INFOS //
    static info_loadingPlaylist(value) {
        return `Loading your ${res.playlist ? 'playlist' : 'track'}... 🎧`;
    }

    static info_botDisconnected() {
        return 'Monke was kicked out ❌';
    }

    static info_leave() {
        return 'Monke alone... Monke sad... Monke leave ❌';
    }

    static info_endQueue() {
        return 'Monke no more song ✅';
    }

    // SUCCESS //
    static success_trackStart(value) {
        return `Monke play ${value} 🎧`;
    }

    static success_addQueue(value) {
        return `Monke add song ${value} to MonkeQueue ✅`;
    }
}

module.exports = Quotes