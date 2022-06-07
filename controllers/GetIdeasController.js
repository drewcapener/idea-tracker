const getIdeasService = require("../services/GetIdeasService");

const getIdeasController = async (req, res, next) => {
    try {
        const ideas = await getIdeasService()
        res.status(200).json(ideas)
    } catch(e) {
        next(e) 
    }
}

module.exports = getIdeasController;