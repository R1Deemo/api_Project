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
    const sql = 'select is_delete<>1 from ev_article_cate where ev_article_cate id,ev_articles cate_id '
    db.query(sql, (err, results) => {
        res.send(results)
    })
}