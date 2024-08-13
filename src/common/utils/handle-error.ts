import { isAxiosError } from 'axios'
import { useDispatch } from 'react-redux'
import { setAppErrorAC } from '../../app/app-reducer.ts'
import { AppDispatch } from '../../app/store.ts'
import { Dispatch } from 'redux'

type ServerError = {
  errorMessages: Array<{field: string, message: string}>
}
export const handleError = (e: any, dispatch: Dispatch) => {
  let errorMessage: string;
  if(isAxiosError<ServerError>(e)){
    errorMessage = e.response ? e.response.data.errorMessages[0].message : e.message
  } else {
    errorMessage = (e as Error).message;
  }
  dispatch(setAppErrorAC(errorMessage))
  console.log(errorMessage);
}