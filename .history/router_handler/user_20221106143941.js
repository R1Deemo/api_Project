exports.regUser = (req, res) => {
    //获取用户注册信息
    const userinfo = req.body
    console.log(userinfo)
    res.send('reg ok')
}

exports.login = (req, res) => {
    res.send('login ok')
}