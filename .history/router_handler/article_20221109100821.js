exports.addArticle = (req, res) => {
    console.log(req.file)
    console.log('------------------------------')
    console.log(req.body)
    res.send('ok')
}