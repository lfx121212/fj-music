export default {
    state: {
        /** 音乐播放信息 */
        isPlay: false, // 播放状态
        curTime: 0, // 当前音乐的播放位置
        changeTime: 0, // 指定播放时刻
        duration: 0, // 音乐时长
    },
    getters: {
        isPlay: state => state.isPlay,
        curTime: state => state.curTime,
        changeTime: state => state.changeTime,
        duration: state => state.duration,
    },
    mutations: {
        setIsPlay: (state, isPlay) => { state.isPlay = isPlay },
        setCurTime: (state, curTime) => { state.curTime = curTime },
        setChangeTime: (state, changeTime) => { state.changeTime = changeTime },
        setDuration: (state, duration) => { state.duration = duration },
    },
}
