import { TypedUseSelectorHook, useSelector as useReduxSelector } from 'react-redux'
import type { RootState } from '../../redux/store'

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector