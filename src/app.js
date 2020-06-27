const express = require('express')
const cors = require('cors')

const { uuid } = require('uuidv4')

const app = express()

app.use(express.json())
app.use(cors())

const repositories = []

app.get('/repositories', (request, response) => {
  return response.json(repositories)
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
  const {
    techs,
    title,
    url
  } = request.body

  const { id } = request.params

  const repositoryIndex = repositories.findIndex(repository => repository.id === id)

  if (repositoryIndex < 0) return response.status(404).json({ error: 'Repository not found' })

  const repository = {
    id,
    techs,
    title,
    url
  }

  repositories[repositoryIndex] = repository

  return response.json(repository)
})

app.delete('/repositories/:id', (request, response) => {
  const { id } = request.params

  const repositoryIndex = repositories.findIndex(repository => repository.id === id)

  if (index < 0) return response.status(404).json({ error: 'repository not found' })

  repositories.splice(repositoryIndex, 1)

  return response.status(204).send()
})

app.post('/repositories/:id/like', (request, response) => {
  // TODO
})

module.exports = app
