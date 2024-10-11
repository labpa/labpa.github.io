import { configureStore} from '@reduxjs/toolkit'
import authReducer from "../features/auth/authSlice"
import {supabaseAuthApi} from "../api/authApi";




export const store = configureStore({
    reducer: {

        auth: authReducer,
        [supabaseAuthApi.reducerPath]: supabaseAuthApi.reducer,


    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(supabaseAuthApi.middleware),

    devTools: true,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
