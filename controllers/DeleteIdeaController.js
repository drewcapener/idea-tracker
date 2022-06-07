const deleteIdeaService = require("../services/DeleteIdeaService")

const deleteIdeaController = async (req, res, next) => {
    try {
        const id = req.params['id']
        await deleteIdeaService(id)
        res.status(204)
        res.end()
    } catch(e) {
        next(e) 
    }
}

module.exports = deleteIdeaController;