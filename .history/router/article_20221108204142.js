const express = require('express')
const router = express.Router()

const articl_handler = require('../router_handler/article')

router.post('/add', articl_handler.addArticle)

module.exports = router