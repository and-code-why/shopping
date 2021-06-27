import { request } from './request'

export function getHomeMultidata() { //请求轮播图、商品推荐的数据
    return request({
        url: '/home/multidata'
    })
}
export function getHomeGoods(type, page) { //获取商品展示的数据
    return request({
        url: '/home/data',
        params: {
            type,
            page
        }
    })
}