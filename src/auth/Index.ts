import { User } from '../interfaces/User'
import { authUser } from '../userConfig'
export const auth = ({ email, password }: User): boolean =>
  email === authUser.email && password === authUser.password


export const getUserFromLocalStorage = (): User | undefined => {
  const userFromLocalStorage = localStorage.getItem('user')
  try {
    return userFromLocalStorage && JSON.parse(userFromLocalStorage)
  } catch (error) {
    console.error(error)
  }
}