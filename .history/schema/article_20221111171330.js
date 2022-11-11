const joi = require('joi')

const title = joi.string().required()
const cate_id = joi.number().integer().min(1).required()
const content = joi.string().required().allow('')
const state = joi.string().valid('已发布', '草稿').required()

exports.add_article_schema = {
    body: {
        title,
        cate_id,
        content,
        state,
    }
}

const pagenum = joi.integer().min(1).required()
const pagesize = joi.integer().min(1).required()
    // const cate_id = joi.string()
const cate_name_id = joi.string()
    // const state = joi.string()
exports.get_articleList_schema = {
    body: {
        pagenum,
        pagesize,
        cate_name_id,
        state,
    }
}