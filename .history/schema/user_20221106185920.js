// 导入验证规则的包
// 导入 Joi 来定义验证规则
const joi = require('joi')



// 2. 定义验证规则
// 注意：如果客户端提交的某些参数项未在 schema 中定义，
// 此时，这些多余的参数项默认会被忽略掉

const username = joi.string().alphanum().min(1).max(10).required()
const password = joi.string().pattern(/^[\S]{6,12}$/).required()
exports.reg_login_schema = {

    // 定义验证注册和登录表单数据的规则对象
    // 2.1 校验 req.body 中的数据
    body: {
        username,
        password,

    },
    //   // 2.2 校验 req.query 中的数据
    //   query: {
    //     name: Joi.string().alphanum().min(3).required(),
    //     age: Joi.number().integer().min(1).max(100).required()
    //   },
    //   // 2.3 校验 req.params 中的数据
    //   params: {
    //     id: Joi.number().integer().min(0).required()
    //   }
}

// 定义id，nickname，email的验证规则
const id = joi.number().integer().min(1).required()
const nickname = joi.string().required()
const email = joi.string().email().required()
exports.update_userinfo_schema = {
        body: {
            id,
            nickname,
            email,
        }

    }
    //修改密码
const old = joi.number().integer().min(1).required()
const newP = joi.string().required()
const repassword = joi.ref('password')
exports.update_userinfo_schema = {
    body: {
        old,
        newP,
        repassword

    }

}