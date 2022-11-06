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
    //在路由之前，配置解析token的中间件
const expressJWT = require('express-jwt')
const config = require('./config')
    //配置解析token并设置不需要token就能访问的前缀
app.use(expressJWT({ secret: config.jwtSecretKey }).unless({ path: [/^\/api/] }))

//导入并使用路由模块
const userRouter = require('./router/user')
app.use('/api', userRouter)
    //导入并使用用户信息的路由模块
const userinfoRouter = require('./router/userinfo')
app.use('/my', userinfoRouter)
    //错误中间件
app.use(function(err, req, res, next) {
        //身份认知失败的错误
        if (err.name === 'UnauthorizedError') return res.cc('身份认证失败')
            //未知错误
        res.cc(err)
            // res.cc(err)
    })
    // 启动服务器
app.listen(3007, () => {
    console.log('run at  http://127.0.0.1:3007')

})