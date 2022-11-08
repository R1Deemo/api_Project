const express = require('express')
const router = express.Router()

const artcate_hanlder = require('../router_handler/artcate')

//获取文章分类列表
router.get('/cates', artcate_hanlder.getArticleCates)
    //新增文章分类
router.post('/addcates', artcate_hanlder.addArticleCates)






module.exports = router