const db = require('../db/index')

const bcrypt = require('bcryptjs')


//获取用户信息的基本函数
exports.getUserInfo = (req, res) => {
        // console.log(req.headers.authorization)
        //只要身份认证成功，就会向req.user上挂载在上值
        const sql = 'select id,username,nickname,email,user_pic from ev_users where id =?'
        db.query(sql, req.user.id, (err, results) => {
                //执行语句失败
                if (err) return res.cc(err)
                    //执行成功但结果为空
                if (results.length !== 1) return res.cc('获取用户信息失败！')

                //查询成功
                res.send({
                    status: 0,
                    message: '获取用户信息成功',
                    data: results[0],
                })

            })
            // res.send('ok')
    }
    //更新用户信息的函数
exports.updateUserInfo = (req, res) => {
        const sqlStr = 'update ev_users set ? where id=?'
        db.query(sqlStr, [req.body, req.body.id], (err, results) => {
                // 执行sql失败
                if (err) return res.cc(err)
                    //执行成功但影响行数不为1
                if (results.affectedRows !== 1) return res.cc('修改失败')
                return res.cc('修改成功', 0)
            })
            // res.send('ok')

    }
    //修改密码的函数
exports.updatePassword = (req, res) => {
    // const userinfo = req.body
    const sql = 'select * from ev_users where id=?'
    db.query(sql, req.user.id, (err, results) => {
            if (err) return res.cc(err)
            if (results.length !== 1) return res.cc('用户不存在')
                // TODO:判断密码是否正确
            const compareResult = bcrypt.compareSync(req.body.oldPwd, results[0].password)
            if (!compareResult) return res.cc('原密码错误')
                // 原密码正确后修改
            const sql = `update ev_users set password=? where id=?`
            const newPwd = bcrypt.hashSync(req.body.newPwd, 10)
            db.query(sql, [newPwd, req.user.id], (err, results) => {
                if (err) return res.cc(err)
                if (results.affectedRows !== 1) return res.cc('更新失败')
                res.cc('更新成功', 0)
            })
        })
        // res.send('ok')
}