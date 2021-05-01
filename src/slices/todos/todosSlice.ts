import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Todo } from '../../interfaces/Todo'
import { RootState } from '../../store'

const initialState: Todo[] = [] as Todo[]

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    add: (state, { payload }: PayloadAction<Todo>) => {
      return [payload, ...state]
      
    },
    update: (state, { payload }: PayloadAction<Todo>) => {
      const todoIndex = state.findIndex((_todo) => _todo.id === payload.id)
      return [...state.slice(0, todoIndex), payload, ...state.slice(todoIndex + 1)]
    },
    remove: (state, { payload }: PayloadAction<{ id: number }>) => {
      return state.filter((todo) => todo.id !== payload.id)
    }
  },
})

export const { add, update, remove } = todosSlice.actions
export const selectTodos = (state: RootState) => state.todos
// export const selectTodo = (state: RootState) => state.todos
