const path = require('path')

const db = require('../db/index')

//发布文章
exports.addArticle = (req, res) => {
        if (!req.file || req.file.fieldname != 'cover_img') return res.cc('封面图片是必选参数')
        console.log(req.file)
        const articleInfo = {
                //标题，内容，发布状态，所属分类id
                ...req.body,
                //封面存放路径
                cover_img: path.join('/uploads', req.file.filename),
                //文章发布时间
                pub_date: new Date(),
                //文章作者id
                author_id: req.user.id,

            }
            // console.log(articleInfo)
        const sql = 'insert into ev_articles set ?'
        db.query(sql, articleInfo, (err, results) => {
            if (err) return res.cc(err)
            if (results.affectedRows != 1) return res.cc('发布文章失败')
            res.cc('发布成功', 0)
        })

    }
    //获取文章列表
exports.getList = (req, res) => {
        const sql = 'select article_id,title,pub_date,state,name from ev_article_cate s,ev_articles c where s.id=c.cate_id &&s.is_delete<>1 '
        db.query(sql, (err, results) => {
            if (err) return res.cc(err)
            if (results !== 0) {
                res.send({
                    "status": 0,
                    "message": "获取文章列表成功！",
                    "data": results

                })
            }

        })
    }
    //根据id删除文章数据
exports.deleteArticle = (req, res) => {
        const sql = 'update ev_articles set is_delete=1 where article_id=?'
        db.query(sql, req.params.id, (err, results) => {
            if (err) return res.cc(err)
            if (results.affectedRows != 1) return res.cc('删除失败')
            res.cc('删除文章成功', 0)
        })
    }
    //根据id获取文章数据
exports.getArticle = (req, res) => {
        const sql = 'select * from ev_articles where article_id=?'
        db.query(sql, req.params.id, (err, results) => {
            if (err) return res.cc(err)
            if (results !== 0) {
                console.log('results')
                res.send({
                    "status": 0,
                    "message": "获取文章列表成功！",
                    "data": results

                })
            }

        })
    }
    // 根据id更新文章信息
exports.editArticle = (req, res) => {
    if (!req.file || req.file.fieldname != 'cover_img') return res.cc('封面图片是必选参数')
        // console.log(req.file)
    const articleInfo = {
        //标题，内容，发布状态，所属分类id
        ...req.body,
        cover_img: path.join('/uploads', req.file.filename)
    }
    console.log(articleInfo)
    const sql = 'update ev_articles set ? where article_id=?'
    db.query(sql, [articleInfo, req.body.article_id], (err, results) => {
        if (err) return res.cc(err)
        if (results.affectedRows != 1) return res.cc('发布文章失败')
        res.cc('发布成功', 0)
    })
}