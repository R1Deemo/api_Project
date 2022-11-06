const db = require('../db/index')




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

exports.updateUserInfo = (req, res) => {
    const sqlStr = 'updata ev_users set ? where id=?'
    db.query(sqlStr, [req.body, req.body.id], (err, results) => {
        // 执行sql失败
        if (err) return res.cc(err)
            //执行成功但影响行数不为1
        if (results.affectedRows !== 1) return res.cc('修改失败')
        return res.cc('修改成功', 0)
    })
    res.send('ok')

}