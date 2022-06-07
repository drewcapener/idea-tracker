const APIError = require('../error/APIError')
const IdeaModel = require('../models/idea.model')
const getGoogleSheets = require('./utils')
require('dotenv').config()

const addIdeaService = async (idea) => {
    const valResult = IdeaModel.validate(idea)
    if (valResult.error) throw APIError.invalidRequestBody('The idea object is malformed.')

    const [ googleSheets, auth ] = await getGoogleSheets()

    const result = await googleSheets.spreadsheets.values.append({
        auth,
        spreadsheetId: process.env.SHEET_ID,
        range: 'Sheet1!A:B',
        valueInputOption: 'USER_ENTERED',
        resource: {
            values: [
                [ idea.title, idea.desc ]
            ]
        }
    })
    return result.data.updates.updatedRange.split(/[A-Z]|:/).pop()
}

module.exports = addIdeaService;