/* eslint-disable require-await */
import { ConnectOptions } from 'mongodb'
import mongoose from 'mongoose'
import { mongoDbUrl } from '../server/src/config'

beforeAll(async () => {
  const mongoUri = mongoDbUrl

  mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    // useUnifiedTopology: true,
  } as ConnectOptions)
})

afterAll(async () => {
  await mongoose.disconnect()
  await mongoose.connection.close()
})
