exports.regUser = (req, res) => {
    //获取用户注册信息
    const userinfo = req.body
    if (!userinfo.username || !userinfo.password) {
        return res.send('用户名或密码不能为空')
    }
    console.log(userinfo)
    res.send('reg ok')
}

exports.login = (req, res) => {
    res.send('login ok')
}