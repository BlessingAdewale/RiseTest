import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// ...
import theplanReducer from '../features/theplan';

import credentialsReducer from '../features/credentials';

import otpReducer from '../features/otp';

import logInReducer from '../features/logIn';

export const store = configureStore({
  reducer: {
    theplan: theplanReducer,
    credentials: credentialsReducer,
    otp: otpReducer,
    logIn: logInReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
