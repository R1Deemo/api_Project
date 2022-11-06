const express = require('express')
const router = express.Router()


// 1. 导入 @escook/express-joi
const expressJoi = require('@escook/express-joi')
    // 2.导入验证表单数据的规则对象
const { reg_login_schema } = require('../schema/user')

const userHandler = require('../router_handler/user')
    //注册新用户
router.post('/reguser', expressJoi(reg_login_schema), userHandler.regUser)

//登录
router.post('/login', userHandler.login)

module.exports = router