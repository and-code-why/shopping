export default {
    addCart(context, payload) {
        return new Promise((reslove, reject) => {
            let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
            if (oldProduct) { //商品的数量+1
                context.commit('addCounter', oldProduct);
                reslove();
            } else { //添加商品
                payload.count = 1
                context.commit('addToCart', payload);
                reslove();
                // reslove('添加成功，在购物车等亲~')
            }
        })
    }
}