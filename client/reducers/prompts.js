//import action creator from actions
import {
  ADD_PROMPT,
  SET_PROMPTS,
  DEL_PROMPT,
  UPDATE_PROMPT,
} from '../actions/prompts'

const initialPromptState = []

const promptsReducer = (state = initialPromptState, action) => {
  const { type, payload } = action

  switch (type) {
    case SET_PROMPTS:
      return payload
    case ADD_PROMPT:
      return [...state, payload] //add new prompt to state array
    case DEL_PROMPT:
      //might need to create a new Array to persist the state change
      return state.filter((prompt) => prompt.id !== payload)
    case UPDATE_PROMPT:
      return state.map((prompt) => {
        //map over the prompts
        if (prompt.id === payload.id) {
          // if prompt id matches the prompt id of the payload
          return { ...prompt, ...payload } //return the prompt but overwrite it with any new data in the payload.
        }
        return prompt
      })
    default:
      return state
  }
}

export default promptsReducer
