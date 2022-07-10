//import action creator from actions
import { SET_PROMPT } from '../actions/prompts'

const initialPromptState = [
  {
    id: 1,
    prompt: ' Write a stream-of-consciousness with no clear goal.',
    category: 'Mindfulness',
  },
]

const promptsReducer = (state = initialPromptState, action) => {
  const { type, payload } = action

  switch (type) {
    case SET_PROMPT:
      return payload
    default:
      return state
  }
}

export default promptsReducer
