// 导入相关包
const express = require('express')
    // 创建服务器的实例对象
const app = express()

//解决跨域问题
const cors = require('cors')
app.use(cors())

// 解析表单数据
app.use(express.urlencoded({ extended: false }))

const joi = express('@hapi/joi')

// 在路由函数之前，封装res.cc函数
app.use(function(req, res, next) {
    // status默认值为1，表示失败
    res.cc = function(err, status = 1) {
        res.send({
            status,
            message: err instanceof Error ? err.message : err,
        })
    }
    next()
})


//导入并使用路由模块
const userRouter = require('./router/router')
app.use('/api', userRouter)
    //错误中间件
app.use(function(err, req, res, next) {
        if (err) res.cc(err)
            // res.cc(err)
    })
    // 启动服务器
app.listen(3007, () => {
    console.log('run at  http://127.0.0.1:3007')

})