import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Todo } from '../../interfaces/Todo'
import { RootState } from '../../store'

const initialState: Todo[] = []

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    add: (state, { payload }: PayloadAction<Todo>) => {
      return [...state, payload]
    },
    update: (state, { payload }: PayloadAction<Todo>) => {
      const todoIndex = state.findIndex((_todo) => _todo.id === payload.id)
      return [
        ...state.slice(0, todoIndex),
        payload,
        ...state.slice(todoIndex + 1),
      ]
    },
    remove: (state, { payload }: PayloadAction<{ id: string }>) => {
      return state.filter((todo) => todo.id !== payload.id)
    },
    fetch: (state, { payload }: PayloadAction<Todo[]>) => {
      return [...state, ...payload]
    },
  },
})

export const { add, update, remove, fetch } = todosSlice.actions
export const selectTodos = (state: RootState) => state.todos
export const selectTodo = (id?: string) => (state: RootState) =>
  state.todos.find((todo: Todo) => todo.id === id)
