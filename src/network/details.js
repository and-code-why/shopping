import { request } from './request'

export function getDetails(iid) { //商品详情页的数据
    return request({
        url: "/detail",
        params: {
            iid
        }
    })
}

export function getRecommend() { //商品详情页的推荐商品数据
    return request({
        url: 'recommend'
    })
}
export class Goods { //商品详情页的商品详细信息
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title //商品的标题
        this.desc = itemInfo.desc //商品的描述（购物车中需要用到）
        this.price = itemInfo.price //商品的价格
        this.lowNowPrice = itemInfo.lowNowPrice //商品的最低价（购物车中需要用到）
        this.oldPrice = itemInfo.oldPrice //商品的旧价格
        this.discountDesc = itemInfo.discountDesc //商品的折扣
        this.columns = columns //商品的销量信息
        this.services = services //商品的服务
    }
}

export class Shop { //商品详情页的商品店铺的详细信息
    constructor(shopInfo) {
        this.name = shopInfo.name //店铺的名称
        this.shopLogo = shopInfo.shopLogo //店铺的logo
        this.cSells = shopInfo.cSells //店铺的总销量
        this.cGoods = shopInfo.cGoods //店铺的全部宝贝
        this.score = shopInfo.score //店铺的评分(数组)
    }
}

export class Params { //商品详情页的商品参数的详细信息
    constructor(info, rule) {
        this.images = info.images ? info.images[0] : ''
        this.set = info.set; //关于商品的参数
        this.tables = rule.tables; //关于商品尺码的参数
    }
}