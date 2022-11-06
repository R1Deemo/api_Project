// 导入数据库模块
const db = require('../db/index')

//对密码进行加密的包
const bcrypt = require('bcryptjs')


exports.regUser = (req, res) => {
    //获取用户注册信息
    const userinfo = req.body
        //判断用户名或密码是否为空
    if (!userinfo.username || !userinfo.password) {
        return res.send({ status: 1, message: '用户名或密码不能为空!' })
    }
    //检测用户名是否唯一
    // select得到的results是一个数组，数组大于0则表示存在
    const sqlStr = 'select * from ev_users where username=?'
    db.query(sqlStr, userinfo.username, (err, results) => {
            if (err) {
                return res.send({ status: 1, message: err.message })
            }
            if (results.length > 0) {
                return res.send({ status: 1, message: '用户名被占用' })
            }
            //TODO:用户名可用
            // 加密密码
            userinfo.password = bcrypt.hashSync(userinfo.password, 10)

        })
        // console.log(userinfo)
        // res.send('reg ok')
}

exports.login = (req, res) => {
    res.send('login ok')
}