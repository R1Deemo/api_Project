// 导入数据库模块
const db = require('../db/index')

//对密码进行加密的包
const bcrypt = require('bcryptjs')



exports.regUser = (req, res) => {
    //获取用户注册信息
    const userinfo = req.body
        //判断用户名或密码是否为空
        // if (!userinfo.username || !userinfo.password) {
        //     // return res.send({ status: 1, message: '用户名或密码不能为空!' })
        //     return res.cc('用户名或密码不能为空!')
        // }
        //检测用户名是否唯一
        // select得到的results是一个数组，数组大于0则表示存在
    const sqlStr = 'select * from ev_users where username=?'
    db.query(sqlStr, userinfo.username, (err, results) => {
            if (err) {
                // return res.send({ status: 1, message: err.message })
                return res.cc(err.message)
            }
            if (results.length > 0) {
                // return res.send({ status: 1, message: '用户名被占用' })
                return res.cc('用户名被占用')
            }
            //TODO:用户名可用
            // 加密密码
            userinfo.password = bcrypt.hashSync(userinfo.password, 10)
                // 注册用户
            const sql = 'insert into ev_users set ?'
            db.query(sql, { username: userinfo.username, password: userinfo.password }, (err, results) => {
                // 判断sql是否成功
                if (err) return res.cc(err)
                    // 判断注册行是否为1
                if (results.affectedRows !== 1) return res.cc('注册用户失败，请重新注册')
                    // res.send({ status: 0, message: '注册成功' })
                res.cc('注册成功', 0)
            })

        })
        // console.log(userinfo)
        // res.send('reg ok')
}

exports.login = (req, res) => {
    // const userinfo = req.body
    // const s = 'select * from ev_users where username=?,password=?'
    // db.query(s, userinfo.username, userinfo.password, (err, results) => {
    //     if (err) return res.cc(err.message)
    //     if (results.length < 0) return res.cc('登陆失败')
    //     res.cc('成功', 0)
    // })
    res.send('login ok')
}