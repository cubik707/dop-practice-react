import { useAppDispatch, useAppSelector } from '../../../../app/store.ts'
import { selectDucks } from '../../decks-selectors.ts'
import { useEffect } from 'react'
import { fetchDecksTC } from '../../decks-thunks.ts'

export const useFetchDecks = () => {
  const decks = useAppSelector(selectDucks)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchDecksTC(decks))
  }, [dispatch])
  return {
    decks,
  }
}
