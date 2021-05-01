import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { User } from "../../interfaces/User"
import { RootState } from "../../store"

const initialState: User = {
  email: '',
  password: '',
} as User

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, { payload }: PayloadAction<User>) => {
      return { ...state, email: payload.email, password: payload.password}
      
    },
    logout: (state) => {
      return { ...state, email: '', password: '' } 
    }
  }
})

export const { login, logout } = userSlice.actions
export const selectUser = (state: RootState) => state.user