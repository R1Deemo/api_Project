const { result } = require('@hapi/joi/lib/base')
const { isResolvable } = require('@hapi/joi/lib/common')
const db = require('../db/index')

// 获取文章列表
exports.getArticleCates = (req, res) => {
        //查询未删除的文章，按id从小到大排序
        const sql = 'select * from ev_article_cate where is_delete=0 order by id asc'
        db.query(sql, (err, results) => {
                if (err) return res.cc(err)
                res.send({
                    status: 0,
                    message: '获取文章列表成功',
                    data: results,
                })
            })
            // res.send('ok')
    }
    //新增文章分类
exports.addArticleCates = (req, res) => {
        const sql = 'select * from ev_article_cate where name=? or alias=?'
        db.query(sql, [req.body.name, req.body.alias], (err, results) => {
                if (err) return res.cc(err)
                if (results.length === 2) return res.cc('分类和别名被占用，请更换后在试')
                if (results.length === 1 && req.body.name === results[0].name && req.body.alias === results[0].alias) return res.cc('分类或别名被占用，请更换后在试')

                if (results.length === 1 && req.body.name === results[0].name) return res.cc('分类被占用，请更换后在试')
                if (results.length === 1 && req.body.alias === results[0].alias) return res.cc('别名被占用')
                const sqlStr = 'insert into ev_article_cate set?'
                db.query(sqlStr, req.body, (err, results) => {
                    if (err) return res.send(err)
                    if (results.affectedRows != 1) return res.cc('新增文章分类失败')
                    res.cc('添加成功', 0)
                })



            })
            // res.send('ok')
    }
    //删除文章分类
exports.deleteCateById = (req, res) => {
    const sql = "update ev_article_cate set is_delete=1 where id=?"
    db.query(sql, req.params.id, (err, results) => {
        if (err) return res.cc(err)
        if (results.affectedRows != 1) return res.cc('删除失败')
        res.cc('删除文章分类成功', 0)
    })
}

//获取文章分类数据
exports.getCateById = (req, res) => {
        const sql = 'select * from ev_article_cate where  id=?'
        db.query(sql, req.params.id, (err, results) => {
            if (err) return res.cc(err)
            if (results.length !== 1) return res.cc('获取文章分类数据失败')
            res.send({
                status: 0,
                message: '获取文章列表成功',
                data: results[0],
            })
        })
    }
    //更新文章分类数据
exports.updateCateById = (req, res) => {
    const sql = 'select * from ev_article_cate where id<>? and (name=? or alias=?)'
    db.query(sql, [req.body.id, req.body.name, req.body.alias], (err, results) => {
        if (err) return res.cc(err)
        if (results.length === 2) return res.cc('分类名称与名称被占用，请更换后重试')
        if (results.length === 1 && results[0].name === req.body.name && results[0].alias === req.body.alias) return res.cc('分类名称与名称被占用，请更换后重试')
        if (results.length === 1 && results[0].name === req.body.name) return res.cc('分类名称被占用，请更换后重试')
        if (results.length === 1 && results[0].alias === req.body.alias) return res.cc('别名被占用，请更换后重试')

    })
}