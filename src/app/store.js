import { combineReducers, configureStore } from '@reduxjs/toolkit'
import counterSlice from '@f/counter/counterSlice'
import todosSlice from '@f/todos/todosSlice'
import usersSlice from '@f/users/usersSlice'
import mainMiddleware from '../middlewaries/Minddleware'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'main',
  version: 1,
  storage,
  // blacklist: ['todos']
  // whitelist: ['todos']
}

const rootReducer = combineReducers({
  counter: counterSlice,
  todos: todosSlice,
  users: usersSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export const persistor = persistStore(store)