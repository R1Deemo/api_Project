exports.addArticle = (req, res) => {
    if (!req.file || req.file.fieldname != 'cover_img') return res.cc('封面图片是必选参数')
    res.send('ok')
}