import { Todo } from '../interfaces/Todo'
import { User } from '../interfaces/User'

/** 
 * Local storage get/set user
 */
export const getUserFromLocalStorage = (): User | undefined => {
  const userFromLocalStorage = localStorage.getItem('user')
  try {
    if (!!userFromLocalStorage) {
      return JSON.parse(userFromLocalStorage) as User
    }
  } catch (error) {
    console.error('Error getting user from local storage')
  }
}

export const setUserToLocalStorage = (user: User): void => {
  localStorage.setItem('user', JSON.stringify(user))
}

export const removeUserFromLocalStorage = (): void => {
  localStorage.removeItem('user')
}

/** 
 * Local storage get/set user
 */

export const getTodosFromLocalStorage = (): Todo[] | undefined => {
  const todosFromLocalStorage = localStorage.getItem('todos')
  try {
    if (!! todosFromLocalStorage) {
      return JSON.parse(todosFromLocalStorage) as Todo[]
    }
  } catch (error) {
    console.error('Error getting todos from local storage')
  }
}

export const setTodosToLocalstorage = (todos: Todo[]): void => {
  localStorage.setItem('todos', JSON.stringify(todos))
}