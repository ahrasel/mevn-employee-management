/* eslint-disable no-console */
// eslint-disable-next-line import/named
import mongoose, { ConnectOptions } from 'mongoose'
import { mongoDbUrl } from '../config/index.js'

const { connect } = mongoose

export default () =>
  connect(mongoDbUrl, { useNewUrlParser: true } as ConnectOptions)
    .then(() => {
      console.log('Connected to MongoDB')
    })
    .catch((err) => {
      console.log('Error connecting to MongoDB: ', err)
    })
