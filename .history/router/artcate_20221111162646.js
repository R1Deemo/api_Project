const express = require('express')
const router = express.Router()



const artcate_hanlder = require('../router_handler/artcate')
    // 导入验证数据的中间件 
const expressJoi = require('@escook/express-joi')
    // 导入需要验证的规则对象
const { add_cate_schema, delete_cate_schema, get_cate_schema, update_cate_schema } = require('../schema/artcate')


//获取文章分类列表
router.get('/cates', artcate_hanlder.getArticleCates)
    //新增文章分类
router.post('/addcates', expressJoi(add_cate_schema), artcate_hanlder.addArticleCates)

//根据id删除文章
router.get('/deletecate/:id', expressJoi(delete_cate_schema), artcate_hanlder.deleteCateById)

//根据id获取文章分类数据
router.get('/cates/:id', expressJoi(get_cate_schema), artcate_hanlder.getCateById)

//跟新文章分类数据
router.post('/updatecate', expressJoi(update_cate_schema), artcate_hanlder.updateCateById)


module.exports = router