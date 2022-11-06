const express = require('express')
const router = express.Router()

const expressJoi = require('@escook/express-joi')
    // 2.导入验证表单数据的规则对象
const { update_userinfo_schema } = require('../schema/user')

const userinfo_handler = require('../router_handler/userinfo')
    //挂载路由 
router.get('/userinfo', userinfo_handler.getUserInfo)
    //更新用户信息
router.post('/userinfo', expressJoi(update_userinfo_schema), userinfo_handler.updateUserInfo)




module.exports = router