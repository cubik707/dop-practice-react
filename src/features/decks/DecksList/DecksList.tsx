import s from './DecksList.module.css'
import { useEffect } from 'react'
import { decksAPI } from '../decks-api.ts'
import { useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { setDecksAC } from '../decks-reducer.ts'
import { DeckItem } from './DeckItem/DeckItem.tsx'
import { selectDucks } from '../decks-selectors.ts'

export const DecksList = () => {
  const decks = useAppSelector(selectDucks)
  const dispatch = useAppDispatch()

  useEffect(() => {
    decksAPI.fetchDecks().then((res) => {
      dispatch(setDecksAC(res.data.items))
    })
  }, [])

  return (
    <ul className={s.list}>
      {decks.map((d) => {
        return <DeckItem deck={d} />
      })}
    </ul>
  )
}
