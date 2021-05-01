import { configureStore } from "@reduxjs/toolkit";
import { todosSlice } from "./slices/todos/todosSlice";
import { userSlice } from "./slices/user/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    todos: todosSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch