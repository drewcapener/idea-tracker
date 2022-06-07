const app = require('./app')

const PORT = parseInt(process.env.PORT) || 8080 

app.listen(PORT, () => {
  console.log(`idea tracker is listening on port ${PORT}`)
})