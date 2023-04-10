export default {
    state: {
        /** 音乐播放信息 */
        isPlay: false, // 播放状态
    },
    getters: {
        isPlay: state => state.isPlay,
    },
    mutations: {
        setIsPlay: (state, isPlay) => { state.isPlay = isPlay },
    },
}
