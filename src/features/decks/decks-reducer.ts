import { DecksItemType } from './decks-api.ts'

const initialState = {
  decks: [] as DecksItemType[], // todo: add type
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'SET-DECKS':
      return { ...state, decks: action.decks }
    default:
      return state
  }
}

export const setDecksAC = (decks: DecksItemType[]) => {
  return {
    type: 'SET-DECKS',
    decks,
  }
}

type DecksActions = ReturnType<typeof setDecksAC>
