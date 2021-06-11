import { combineReducers } from 'redux'
import { dataApi } from './api/dataApi'
import auth from './slices/auth'
import view from './slices/view'
import filters from './slices/filters'
import search from './slices/search'

export const rootReducer = combineReducers({
    auth,
    [dataApi.reducerPath]: dataApi.reducer,
    search,
    filters,
    view,
})