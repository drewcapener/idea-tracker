const addIdeaService = require("../services/AddIdeaService")

const addIdeaController = async (req, res, next) => {
    try {
        const id = await addIdeaService(req.body)
        res.set('location', `/ideas/${id}`)
        res.status(201)
        res.end()
    } catch(e) {
        next(e) 
    }
}

module.exports = addIdeaController;