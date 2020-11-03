import { Actions } from '../constants'
import { combineReducers } from 'redux'

export const sampleProperty = (state = null, action) => {
  switch (action.type){
    case Actions.SAMPLE_REDUX_ACTION:
      return action.payload
    default:
      return state
  }
}

export default combineReducers({
  sampleProperty
})