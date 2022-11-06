const express = require('express')
const router = express.Router()

//挂在路由 
router.get('/userinfo', (req, res) => {
    res.send('ok')
})


module.exports = router