const APIError = require('../error/APIError')
const IdeaModel = require('../models/idea.model')
const getGoogleSheets = require('./utils')
require('dotenv').config()

const updateIdeaService = async (id, idea) => {
    const valResult = IdeaModel.validate(idea)
    if (valResult.error) throw APIError.invalidRequestBody('The idea object is malformed.')

    const [ googleSheets, auth ] = await getGoogleSheets()

    await googleSheets.spreadsheets.values.update({
        auth,
        spreadsheetId: process.env.SHEET_ID,
        range: `Sheet1!A${id}:B${id}`,
        valueInputOption: 'USER_ENTERED',
        resource: {
            values: [
                [ idea.title, idea.desc ]
            ]
        }
    })
}

module.exports = updateIdeaService;