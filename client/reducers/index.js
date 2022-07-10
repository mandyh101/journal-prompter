import { combineReducers } from 'redux'
import promptsReducer from './prompts'

// import stuff from './stuff'

export default combineReducers({
  prompts: promptsReducer,
})
