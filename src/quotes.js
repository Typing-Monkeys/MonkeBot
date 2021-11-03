class Quotes {
    // ERRORS //
    static error_invalidSearch(value) {
        return `Monke needs valid search ${value}... try again ? ❌`;
    }

    static error_noResoultFound(value) {
        return `Monke no results found ${value}... try again ? ❌`;
    }

    static error_cantJoinChannel(value) {
        return `Monke can't join voice channel ${value}... try again ? ❌`;
    }

    static error_somethingWentWrong(value) {
        return `Monke went wrong ${value}... try again ? ❌`;
    }

    static error_noMusicIsPlaying(value) {
        return `Monke is no playing music ${value}... try again ? ❌`;
    }

    // INFOS //
    static info_loadingPlaylist(value) {
        return `Monke loading ${value ? 'playlist' : 'track'}... 🎧`;
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

    static info_pause(value) {
        return `Monke pause music ${value} ✅`;
    }

    // SUCCESS //
    static success_trackStart(value) {
        return `Monke play ${value} 🎧`;
    }

    static success_addQueue(value) {
        return `Monke add song ${value} to MonkeQueue ✅`;
    }

    static success_skipped(value) {
        return `Monke skip ${value} ✅`;
    }
}

module.exports = Quotes