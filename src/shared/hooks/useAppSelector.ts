import { TypedUseSelectorHook, useSelector } from 'react-redux'
import type { RootState } from '../store/app.store'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector