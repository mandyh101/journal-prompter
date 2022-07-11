import { addNewPrompt, getPromptsData } from "../apis/promptsApi"

export const SET_PROMPTS = 'SET_PROMPT'
export const SET_PROMPTS_PENDING = 'SET_PROMPTS_PENDING'
export const SET_ERROR = 'SET_ERROR'
export const ADD_PROMPT = 'ADD_PROMPT'
export const POST_PROMPT = 'POST_PROMPT'


export function fetchPrompts () {
  return (dispatch) => {
    dispatch(setPromptsPending())
    return getPromptsData()
    
      .then(prompts => {
        dispatch(setPrompts(prompts))
        return null
      })
      .catch(err => {
        dispatch(setError(err.message))
      })
  }
}

export function savePrompt(newPrompt){
  return (dispatch) => {
    console.log('new prompt' , newPrompt)
    return addNewPrompt(newPrompt)
    .then(() => {
      // dispatch(postPrompt(prompt))
      dispatch(addPrompt(newPrompt))
    })
    .catch(err => {
      dispatch(setError(err.message))
    })
  }

}

export function addPrompt(newPrompt){
  return {
    type: ADD_PROMPT,
    payload: newPrompt
  }
}

// export const postPrompt = (prompt) => {
//   return {
//     type: POST_PROMPT,
//     payload: prompt,
//   }
// }

export function setPromptsPending () {
  return {
    type: SET_PROMPTS_PENDING
  }
}

export const setPrompts = (prompt) => {
  return {
    type: SET_PROMPTS,
    payload: prompt,
  }
}

export function setError(errMessage){
  return{
    type:SET_ERROR,
    errMessage
  }
}