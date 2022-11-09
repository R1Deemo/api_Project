const express = require('express')
const router = express.Router()
    //解析formdata格式数据的包
const multer = require('multer')
    // 导入处理路径的核心模块
const path = require('path')
    // 创建multer的实例对象
const upload = multer({ data: path.join(__dirname, '../uploads') })

const articl_handler = require('../router_handler/article')

router.post('/add', articl_handler.addArticle)

module.exports = router