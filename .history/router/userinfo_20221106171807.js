const express = require('express')
const router = express.Router()

//挂载路由 
router.get('/userinfo', (req, res) => {
    res.send('ok')
})


module.exports = router