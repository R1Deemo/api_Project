const express = require('express')
const router = express.Router()

// 导入验证数据中间件
const expressJoi = require('@escook/express-joi')
    // 2.导入验证表单数据的规则对象
const { update_userinfo_schema, update_password_schema } = require('../schema/user')

const userinfo_handler = require('../router_handler/userinfo')
    //挂载路由 
router.get('/userinfo', userinfo_handler.getUserInfo)
    //更新用户信息
router.post('/userinfo', expressJoi(update_userinfo_schema), userinfo_handler.updateUserInfo)

//修改密码
router.post('/updatepwd', expressJoi(update_password_schema), userinfo_handler.updatePassword)

//更新头像
router.post('/update/avatar', userinfo_handler.updateAvatar)




module.exports = router