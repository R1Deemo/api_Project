const express = require('express')
const router = express.Router()

//挂载路由 
router.get('/userinfo', (req, res) => {
    console.log(req.headers)
    res.send('ok')
})


module.exports = router