/* eslint-disable no-console */
import { Express } from 'express'
import expressLoader from './express.js'
import mongooseLoader from './mongoose.js'

export default async (app: Express) => {
  // mongoose connection loader
  console.log('\x1B[36m%s\x1B[0m', 'MongoDB Initializing')
  await mongooseLoader()
  // express server loader
  console.log('\x1B[36m%s\x1B[0m', 'Express server Initializing')
  await expressLoader(app)
}
