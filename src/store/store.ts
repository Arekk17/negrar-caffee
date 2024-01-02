import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './authSlice';
export const store = configureStore({
    reducer: {
      userSlice: userSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
  })

  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
  