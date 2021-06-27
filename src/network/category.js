import { request } from "./request";

export function getCategory() { //商品分类左侧侧边栏的数据
    return request({
        url: '/category'
    });
}

export function getCategoryInfo(maitKey) { //商品分类具体的商品信息数据
    return request({
        url: '/subcategory',
        params: {
            maitKey
        }
    })
}