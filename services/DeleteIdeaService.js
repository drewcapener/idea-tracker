require('dotenv').config()
const getGoogleSheets = require('./utils')

const deleteIdeaService = async (id) => {
    const [ googleSheets, auth ] = await getGoogleSheets()

    const result = await googleSheets.spreadsheets.batchUpdate({
        spreadsheetId: process.env.SHEET_ID,
        resource: {
            'requests': [
                {
                    'deleteDimension': {
                        'range': {
                            'sheetId': 0,
                            'dimension': 'ROWS',
                            'startIndex': id - 1,
                            'endIndex': id,
                        }
                    }
                }
            ]
        }
    })
}

module.exports = deleteIdeaService;