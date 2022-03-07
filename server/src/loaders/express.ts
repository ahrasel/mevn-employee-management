import { json, Express } from 'express'
import morgan from 'morgan'

export default (app: Express) => {
  // HTTP request logger middleware for node.js
  app.use(morgan('dev'))
  // express json middleware
  app.use(json())
  // eslint-disable-next-line no-console
  console.log('\x1B[36m%s\x1B[0m', 'Express server Initialized')
  return app
}
