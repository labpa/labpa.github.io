import { configureStore} from '@reduxjs/toolkit'
import authReducer from "../features/auth/authSlice"
import {supabaseAuthApi} from "../api/authApi";
import {supabaseApiBuchhaltung} from "../api/buchhaltungApi";


export const store = configureStore({
    reducer: {

        auth: authReducer,
        [supabaseAuthApi.reducerPath]: supabaseAuthApi.reducer,
        [supabaseApiBuchhaltung.reducerPath]: supabaseApiBuchhaltung.reducer,


    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(supabaseApiBuchhaltung.middleware, supabaseAuthApi.middleware),

    devTools: true,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
