const updateIdeaService = require("../services/UpdateIdeaService")

const updateIdeaController = async (req, res, next) => {
    try {
        const id = req.params['id']
        await updateIdeaService(id, req.body)
        res.status(200)
        res.end()
    } catch(e) {
        next(e) 
    }
}

module.exports = updateIdeaController;