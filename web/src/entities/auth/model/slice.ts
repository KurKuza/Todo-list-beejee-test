import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IUser {
  isAnonym: boolean
}

const anonym: IUser = {
  isAnonym: true,
}

interface IAuthState {
  isFirstAuth: boolean
  isFetching: boolean
  user: IUser
}

const initialState: IAuthState = {
  isFirstAuth: true,
  isFetching: false,
  user: { ...anonym },
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authFetching(state) {
      state.isFetching = true
    },
    authFetchingSuccess(state, action: PayloadAction<IUser>) {
      state.isFetching = false
      state.user = action.payload
    },
    authFetchingError(state) {
      state.isFetching = false
      state.user = anonym
    },
    isFirstAuth(state) {
      state.isFirstAuth = false
    },
  },
})

export default authSlice.reducer
