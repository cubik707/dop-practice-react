import { AddDeckParams, decksAPI, DecksItemType } from './decks-api.ts'
import { addDeckAC, setDecksAC } from './decks-reducer.ts'
import { AppDispatch } from '../../app/store.ts'
import { Dispatch } from 'redux'

export const fetchDecksTC = (decks: DecksItemType[]) => {
  return (dispatch: Dispatch) => {
    decksAPI.fetchDecks().then((res) => {
      dispatch(setDecksAC(res.data.items))
    })
  }
}

export const addDeckTC = (params: AddDeckParams) => async (dispatch: Dispatch) => {
  return decksAPI.addDeck(params).then((res) => {
    return (dispatch: Dispatch) => {
      dispatch(addDeckAC(res.data))
    }
  })
}
