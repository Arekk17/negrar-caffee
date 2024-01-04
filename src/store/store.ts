import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './authSlice';
import { shopSlice } from './shopSLice';
export const store = configureStore({
    reducer: {
      userSlice: userSlice.reducer,
      shopSlice: shopSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
  })

  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
  