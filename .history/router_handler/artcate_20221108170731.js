const { result } = require('@hapi/joi/lib/base')
const { isResolvable } = require('@hapi/joi/lib/common')
const db = require('../db/index')

// 获取文章列表
exports.getArticleCates = (req, res) => {
    const sql = 'select * from ev_article_cate where is_delete=0 by id asc'
    db.query(sql, (err, results) => {
            if (err) return res.cc(err)
            res.send({
                status: 0,
                message: '获取文章列表成功'，
                data: results
            })
        })
        // res.send('ok')
}