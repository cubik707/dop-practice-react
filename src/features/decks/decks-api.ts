import axios, { AxiosResponse } from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})

export const decksAPI = {
  fetchDecks() {
    return instance.get<FetchDecksResponse>('/v2/decks')
  },
  addDeck(params: AddDeckParams) {
    return instance.post<DecksItemType>('/v1/decks', params)
  },
}

export type AddDeckParams = {
  name: string
}

type FetchDecksResponse = {
  items: DecksItemType[]
  pagination: {
    currentPage: number
    itemsPerPage: number
    totalPages: number
    totalItems: number
  }
}

export type DecksItemType = {
  isFavorite: boolean
  author: {
    id: string
    name: string
  }
  id: string
  userId: string
  name: string
  isPrivate: boolean
  cover: string
  created: string
  updated: string
  cardsCount: number
}
