import './App.css'
import { Decks } from '../features/decks/Decks.tsx'
import { GlobalError } from './GlobalError/GlobalError.tsx'
import { useAppSelector } from './store.ts'
import { LinearLoader } from '../common/components/Loader/LinearLoader.tsx'
import { selectAppStatus } from './app-selectors.ts'

export const App = () => {
  const status = useAppSelector(selectAppStatus)
  return (
    <div>
      {status === 'loading' && <LinearLoader/>}
      <Decks />
      <GlobalError />
    </div>
  )
}
