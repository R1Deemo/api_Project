// 导入相关包
const express = require('express')
    // 创建服务器的实例对象
const app = express()

//解决跨域问题
const cors = require('cors')
app.use(cors())

// 解析表单数据
app.use(express.urlencoded({ extended: false }))

//导入并使用路由模块
const userRouter = require('./router/router')
app.use('/api', userRouter)

// 启动服务器
app.listen(3007, () => {
    console.log('run at  http://127.0.0.1:3007')

})