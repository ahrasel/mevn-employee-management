import { Request, Response } from 'express'

class AuthController {
  logout(req: Request, res: Response) {
    res.status(200).send(req.body)
  }

  forgetPassword(req: Request, res: Response) {
    res.status(200).send(req.body)
  }

  updatePassword(req: Request, res: Response) {
    // console.log('auth req body =>', req.body)
    res.status(200).send(req.body)
  }

  updateProfile(req: Request, res: Response) {
    res.status(200).send(req.body)
  }

  login(req: Request, res: Response) {
    // console.log('auth req body =>', req.body)
    res.status(200).send(req.body)
  }

  createAccount(req: Request, res: Response) {
    // console.log('auth req body =>', req.body)
    res.status(200).send(req.body)
  }
}

export default new AuthController()
