require('dotenv').config()
const express = require('express');
const cors = require('cors');
const apiErrorHandler = require('./error/APIErrorHandler');
const addIdeaController = require('./controllers/AddIdeaController');
const getIdeasController = require('./controllers/GetIdeasController');
const updateIdeaController = require('./controllers/UpdateIdeaController');
const deleteIdeaController = require('./controllers/DeleteIdeaController');
const { auth } = require('express-oauth2-jwt-bearer');

const API_IDENTIFIER = (process.env.NODE_ENV === 'dev') ? process.env.DEV_API_IDENTIFIER : process.env.API_IDENTIFIER
const ISSUER_BASE_URL = (process.env.NODE_ENV === 'dev') ? process.env.DEV_ISSUER_BASE_URL : process.env.ISSUER_BASE_URL

const checkJwt = auth({
    audience: API_IDENTIFIER,
    issuerBaseURL: ISSUER_BASE_URL,
})

const app = express()

app.use(cors())
app.use(express.json())

app.post('/ideas', checkJwt, addIdeaController)

app.get('/ideas', checkJwt, getIdeasController)

app.patch('/ideas/:id', checkJwt, updateIdeaController)

app.delete('/ideas/:id', checkJwt, deleteIdeaController)

app.use(apiErrorHandler)

module.exports = app