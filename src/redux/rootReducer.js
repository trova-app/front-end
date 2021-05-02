import { combineReducers } from 'redux'
import auth from './slices/auth'
import data from './slices/data'
import view from './slices/view'
import filters from './slices/filters'

export const rootReducer = combineReducers({
    auth,
    data,
    filters,
    view
})