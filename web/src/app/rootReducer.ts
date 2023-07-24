import { authSlice } from '@/entities/auth'
import { taskModel } from '@/entities/task'
import { todoSlice } from '@/entities/todo'
import { combineReducers } from '@reduxjs/toolkit'

export const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
  [todoSlice.name]: todoSlice.reducer,
  tasks: taskModel.reducer,
})
