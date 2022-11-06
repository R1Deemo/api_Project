const express = require('express')
const router = express.Router()

const userinfo_handler = require('../router_handler/userinfo')
    //挂载路由 
router.get('/userinfo', userinfo_handler.getUserInfo)


module.exports = router