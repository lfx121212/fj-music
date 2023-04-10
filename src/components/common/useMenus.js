export function useMenus() {
    return [
        {
            name: "在线音乐",
            menus: [
                {
                    name:'推荐',
                    key:'discover',
                    icon: 'tuijian'
                },
                {
                    name:'音乐馆',
                    key:'music',
                    icon: 'yinle'
                },
                {
                    name:'视频',
                    key:'video',
                    icon: 'MV'
                },
                {
                    name:'电台',
                    key:'dj',
                    icon: 'diantai'
                },
            ]
        },
        {
            name: "我的音乐",
            menus: [
                {
                    name:'我的喜欢',
                    key:'like',
                    icon: 'xihuan'
                },
                {
                    name:'我的收藏',
                    key:'collection',
                    icon: 'shoucang'
                },
            ]
        },
        {
            name: "我创建的",
            key: 'establish',
            menus: [
                {
                    name:'嘿嘿嘿',
                    key:'like',
                    icon: 'xihuan'
                },
            ]
        }
    ]
}
