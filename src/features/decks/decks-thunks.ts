import { decksAPI, DecksItemType } from './decks-api.ts'
import { setDecksAC } from './decks-reducer.ts'
import { AppDispatch } from '../../app/store.ts'

export const fetchDecksTC = (decks: DecksItemType[]) => {
  return (dispatch: AppDispatch) => {
    decksAPI.fetchDecks().then((res) => {
      dispatch(setDecksAC(res.data.items))
    })
  }
}
