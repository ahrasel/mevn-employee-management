import cors from 'cors'
import { Express, Request, Response } from 'express'

// import statusRoutes from "./status.js";
import authRoutes from './auth.js'

export default (app: Express) => {
  // CORS-enabled for all origins
  app.use(cors())

  // auth routes
  app.use('/account', authRoutes)

  // 404 route
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  app.use((req: Request, res: Response) => {
    res.status(404).json({
      message: 'Not Found',
    })
  })

  return app
}
