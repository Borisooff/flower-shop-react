const { Category } = require('../models/models')
const ApiError = require('../error/ApiError');

class CategoryController {
    async create(req, res, next) {
        try {
            const { name } = req.body
            const category = await Category.create({ name })
            return res.json(category)
        }catch(e){
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        const category = await Category.findAll()
        return res.json(category)
    }

}

module.exports = new CategoryController()