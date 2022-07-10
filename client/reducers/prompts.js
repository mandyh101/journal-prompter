//import action creator from actions
import { SET_PROMPTS } from '../actions/prompts'

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
      console.log(payload)
      return payload
    default:
      return state
  }
}

export default promptsReducer
