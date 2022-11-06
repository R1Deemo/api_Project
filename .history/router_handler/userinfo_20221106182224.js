const db = require('../db/index')


const sql = 'select id,username,nickname,emali,user_pic from ev_user where id =?'

//获取用户信息的基本函数
exports.getUserInfo = (req, res) => {
    // console.log(req.headers.authorization)
    //只要身份认证成功，就会向req.user上挂载在上值
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