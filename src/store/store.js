import { configureStore } from '@reduxjs/toolkit';
import { assetApi } from './api/asset/assetApi';
import { locationApi } from './api/location/locationApi';
import { userApi } from './api/user';
import { userSlice } from './user';

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [assetApi.reducerPath]: assetApi.reducer,
    [locationApi.reducerPath]: locationApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(userApi.middleware)
    .concat(assetApi.middleware)
    .concat(locationApi.middleware),
});
