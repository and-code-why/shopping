export default {
    addCounter(state, payload) { //商品数量+1
        payload.count++;
    },
    addToCart(state, paylode) { //添加到购物车
        paylode.checked = false //购物车商品的选中按钮,默认不选中
        state.cartList.push(paylode)
    },
    addnum(state, payload) { //购物车商品数量+1按钮
        payload.count++;
    },
    reducenum(state, payload) { //购物车商品数量-1按钮
        payload.count--;
    }
}