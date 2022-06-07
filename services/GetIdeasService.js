const getGoogleSheets = require('./utils')
require('dotenv').config()

const getIdeasService = async () => {
    const [ googleSheets, auth ] = await getGoogleSheets()

    const getRows = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId: process.env.SHEET_ID,
        range:  'Sheet1!A:B',
    })

    if (!getRows.data.values) return []
    
    return getRows.data.values.map((row, index) => {
        row[1] = row[1] ? row[1] : ''
        return [index + 1, row[0], row[1]]
    })
}

module.exports = getIdeasService;