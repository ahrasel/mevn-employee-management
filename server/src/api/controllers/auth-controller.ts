import { Request, Response } from 'express'
import { createAccount } from '../services/auth.service'

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

  async createAccount(req: Request, res: Response) {
    const result = await createAccount(req.body)

    if (typeof result === 'string') {
      return res.status(400).json({
        message: result,
        status: 400,
        success: false,
      })
    }

    return res.status(200).json({
      message: 'Account created successfully',
      status: 200,
      success: true,
      data: result,
    })
  }
}

export default new AuthController()
