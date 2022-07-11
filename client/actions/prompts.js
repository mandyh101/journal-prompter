import { getPromptsData } from "../apis/promptsApi"

export const SET_PROMPTS = 'SET_PROMPT'
export const SET_PROMPTS_PENDING = 'SET_PROMPTS_PENDING'
export const SET_ERROR = 'SET_ERROR'
export const ADD_PROMPT = 'ADD_PROMPT'

export const addPrompt = (newPrompt) => {
  return {
    type: newPrompt
    //next step is to update payload to include category
  }
}

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