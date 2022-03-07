import express, { json } from 'express'
import loaders from './loaders'
const app = express()

loaders(app)

app.use(json())

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.get('/', (req, res) => {
  res
    .json({
      message: 'Api Worked 🌎🌍🌏',
    })
    .status(200)
})

export default app
