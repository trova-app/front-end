import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './rootReducer'
import { dataApi } from './api/dataApi'

export const store = configureStore({
    reducer: rootReducer,
    // Need this because the data fetch is real big, only affects dev mode
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
            .concat(dataApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch