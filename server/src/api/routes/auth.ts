import { Router } from 'express'
import AuthController from '../controllers/auth-controller'

const router: Router = Router()

router.post('/login', AuthController.login)

router.post('/register', AuthController.createAccount)

router.post('/update-profile', AuthController.updateProfile)

router.post('/update-password', AuthController.updatePassword)

router.post('/forget-password', AuthController.forgetPassword)

router.post('/logout', AuthController.logout)

export default router
