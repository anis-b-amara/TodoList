import { User } from '../interfaces/User'
import { authUser } from '../userConfig'

export const isAuth = ({ email, password }: User): boolean =>
  email === authUser.email && password === authUser.password
