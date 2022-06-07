require('dotenv').config()
const express = require('express');
const cors = require('cors');
const apiErrorHandler = require('./error/APIErrorHandler');
const addIdeaController = require('./controllers/AddIdeaController');
const getIdeasController = require('./controllers/GetIdeasController');
const updateIdeaController = require('./controllers/UpdateIdeaController');
const deleteIdeaController = require('./controllers/DeleteIdeaController');
const { auth } = require('express-oauth2-jwt-bearer');

const checkJwt = auth({
    audience: process.env.API_IDENTIFIER,
    issuerBaseURL: process.env.ISSUER_BASE_URL,
})

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('This is the idea-tracker')
})

app.get('/private', checkJwt, (req, res) => {
    res.send('You shouldnt see this unless logged in')
})

app.post('/ideas', checkJwt, addIdeaController)

app.get('/ideas', checkJwt, getIdeasController)

app.patch('/ideas/:id', checkJwt, updateIdeaController)

app.delete('/ideas/:id', checkJwt, deleteIdeaController)

app.use(apiErrorHandler)

module.exports = app