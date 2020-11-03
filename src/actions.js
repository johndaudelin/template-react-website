import { Actions } from './constants'

export const changeSampleProperty = value => {
  return {
    type: Actions.SAMPLE_REDUX_ACTION,
    payload: value
  }
} 