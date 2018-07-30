const BASEURL = "https://www.easy-mock.com/mock/5ae9d12c0a492d2535b91362/vueshop/"
const LOCALURL = "http://localhost:3000/"

const URL = {
    getShopIndexInfo: BASEURL + "shopindex", //商城首页所有数据
    resisterUser: LOCALURL + 'user/register',
    loginUser: LOCALURL + 'user/login',
    getGoodsInfo: LOCALURL + 'goods/getDetailGoodsInfo',
    getCategoryList: LOCALURL + 'category/getCategoryList',
}

module.exports = URL