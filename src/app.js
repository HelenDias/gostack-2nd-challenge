const express = require('express')
const cors = require('cors')

const { uuid } = require('uuidv4')

const app = express()

app.use(express.json())
app.use(cors())

const repositories = []

app.get('/repositories', (request, response) => {
  // TODO
})

app.post('/repositories', (request, response) => {
  const {
    techs,
    title,
    url
  } = request.body

  const repository = {
    id: uuid(),
    techs,
    title,
    url,
    likes: 0
  }

  repositories.push(repository)

  return response.json(repository)
})

app.put('/repositories/:id', (request, response) => {
  // TODO
})

app.delete('/repositories/:id', (request, response) => {
  // TODO
})

app.post('/repositories/:id/like', (request, response) => {
  // TODO
})

module.exports = app
