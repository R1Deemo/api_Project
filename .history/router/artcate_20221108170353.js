const express = require('express')
const router = express.Router()

const artcate_hanlder = require('../router_handler/artcate')

//获取文章分类列表
router.get('/cates', artcate_hanlder.getArticleCates)






module.exports = router