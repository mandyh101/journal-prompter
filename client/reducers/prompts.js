//import action creator from actions
import { ADD_PROMPT, SET_PROMPTS } from '../actions/prompts'

// const initialPromptState = [
//   {
//     id: 1,
//     prompt: ' Write a stream-of-consciousness with no clear goal.',
//     category: 'Mindfulness',
//   },
// ]

const initialPromptState = []


const promptsReducer = (state = initialPromptState, action) => {
  const { type, payload } = action

  switch (type) {
    case SET_PROMPTS:
      return payload
    case ADD_PROMPT:
      return[...state, payload] //add new prompt to state array
    default:
      return state
  }
}

export default promptsReducer
