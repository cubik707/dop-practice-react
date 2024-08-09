import { AppRootState } from '../../app/store.ts'

export const selectDucks = (state: AppRootState) => state.decksReducer.decks
