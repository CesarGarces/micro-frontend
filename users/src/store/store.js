import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import errorMiddleware from './middleware/errorMiddleware';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(errorMiddleware),
});

export default store;