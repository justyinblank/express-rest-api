import express from 'express'
import routes from './routes'

const app = express()

app.use(express.json())

const PORT = 1337

app.listen(PORT, async () => {
  // eslint-disable-next-line no-console
  console.log(`App is running at http://localhost:${PORT}`)
  routes(app)
})
