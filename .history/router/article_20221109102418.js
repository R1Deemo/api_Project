const express = require('express')
const router = express.Router()
    //解析formdata格式数据的包
const multer = require('multer')
    // 导入处理路径的核心模块
const path = require('path')
    // 创建multer的实例对象
const uploads = multer({ data: path.join(__dirname, '../upoloads') })

const expressJoi = require('@escook/express-joi')
const { add_article_schema } = require('../schema/article')

const articl_handler = require('../router_handler/article')

//发布文章的路由
router.post('/add', uploads.single('cover_img'), expressJoi(add_article_schema), articl_handler.addArticle)

module.exports = router