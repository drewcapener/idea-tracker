require('dotenv').config()
const { google } = require('googleapis')
const path = require('path')

const getGoogleSheets = async () => {
    let auth = null
    if (process.env.NODE_ENV === 'dev') {
        auth = new google.auth.GoogleAuth({
            keyFile: path.join(__dirname, 'credentials.json'),
            scopes: 'https://www.googleapis.com/auth/spreadsheets',
        })
    } else {
        auth = new google.auth.GoogleAuth({
            scopes: 'https://www.googleapis.com/auth/spreadsheets',
        })
    }

    const client = await auth.getClient()

    return [ google.sheets({ version: 'v4', auth: client }), auth ]
}

module.exports = getGoogleSheets;