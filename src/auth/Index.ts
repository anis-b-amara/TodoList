import { User } from '../interfaces/User'
import { authUser } from '../userConfig'
export const auth = ({ email, password }: User): boolean =>
  email === authUser.email && password === authUser.password
