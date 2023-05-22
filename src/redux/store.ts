import { configureStore } from '@reduxjs/toolkit';
import boardDataSlice from './slices/boardDataSlice';

export const store = configureStore({
    reducer: {
        boardDataSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
    devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;