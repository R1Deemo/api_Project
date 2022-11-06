//获取用户信息的基本函数
exports.getUserInfo = (req, res) => {
    console.log(req.headers.authorization)
    res.send('ok')
}