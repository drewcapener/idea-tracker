const { google } = require('googleapis')

const getGoogleSheets = async () => {
    const auth = new google.auth.GoogleAuth({
        keyFile: 'credentials.json',
        scopes: 'https://www.googleapis.com/auth/spreadsheets',
    })

    const client = await auth.getClient()

    return [ google.sheets({ version: 'v4', auth: client }), auth ]
}

module.exports = getGoogleSheets;