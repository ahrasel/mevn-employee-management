// create account
import User, { IUser } from '../models/user.model'
export async function createAccount(
  user: IUser
): Promise<Promise<IUser> | string> {
  try {
    return await User.create(user)
  } catch (error: any) {
    // check is validation error
    if (error.name === 'ValidationError') {
      return error.message
    }
    return 'error' + error
  }
}
