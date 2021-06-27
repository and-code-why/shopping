export default {
    cartListLength(state) { //返回购物车商品的种类个数
        return state.cartList.length
    },
    cartList(state) { //购物车的商品列表
        return state.cartList
    }
}