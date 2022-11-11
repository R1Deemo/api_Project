const express = require('express')
const router = express.Router()
    //解析formdata格式数据的包
const multer = require('multer')
    // 导入处理路径的核心模块
const path = require('path')
    // 创建multer的实例对象
const upload = multer({ dest: path.join(__dirname, '../uploads') })

const expressJoi = require('@escook/express-joi')
const { add_article_schema } = require('../schema/article')

const articl_handler = require('../router_handler/article')

//发布文章的路由
router.post('/add', upload.single('cover_img'), expressJoi(add_article_schema), articl_handler.addArticle)


// 获取文章列表数据
router.get('/list', articl_handler.getList)
module.exports = router