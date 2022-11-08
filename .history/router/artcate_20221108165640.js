const express = require('express')
const router = express.Router()

// const =require('./router_handle/')

//获取文章分类列表
router.get('/cates', (req, res) => {
    res.send('ok')
})






module.exports = router