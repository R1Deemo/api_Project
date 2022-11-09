const express = require('express')
const router = express.Router()
    //解析formdata格式数据的包
const multer = require('multer')
const path = require('path')

const articl_handler = require('../router_handler/article')

router.post('/add', articl_handler.addArticle)

module.exports = router