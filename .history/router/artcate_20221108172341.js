const express = require('express')
const router = express.Router()

const artcate_hanlder = require('../router_handler/artcate')
    // 导入验证数据的中间件 
const expressJoi = require('@hapi/joi')
    // 导入需要验证的规则对象
const { add_cate_schema } = require('../schema/artcate')


//获取文章分类列表
router.get('/cates', artcate_hanlder.getArticleCates)
    //新增文章分类
router.post('/addcates', expressJoi(add_cate_schema), artcate_hanlder.addArticleCates)






module.exports = router