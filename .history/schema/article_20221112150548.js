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

// const pagenum = joi.number().integer().min(1).required()
const pagenum = joi.number().integer().min(1)
const pagesize = joi.number().integer().min(1).required()
    // const cate_id = joi.string()
const cate_name_id = joi.string()
const status = joi.string().valid('已发布', '草稿')
    // const state = joi.string()
exports.get_articleList_schema = {
        body: {
            pagenum,
            pagesize,
            cate_name_id,
            state: status,
        }
    }
    // const cover_img = joi.binary().required()
const id = joi.number().integer().min(1).required()
exports.edit_article_schema = {
    body: {
        article_id: id,
        title,
        cate_id,
        content,
        state,
    }
}