import { configureStore } from '@reduxjs/toolkit';
// ...
import theplanReducer from '../features/theplan';

import credentialsReducer from '../features/credentials';

export const store = configureStore({
  reducer: {
    theplan: theplanReducer,
    credentials: credentialsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
