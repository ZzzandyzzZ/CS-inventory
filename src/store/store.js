import { configureStore } from '@reduxjs/toolkit';
import { assetApi } from './api/asset/assetApi';
import { userApi } from './api/user';
import { userSlice } from './user';

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [assetApi.reducerPath]: assetApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(userApi.middleware)
    .concat(assetApi.middleware),
});
