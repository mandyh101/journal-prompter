import {
  addNewPrompt,
  getPromptsData,
  removePromptApi,
  editPromptApi,
  getPromptById,
} from '../apis/promptsApi'

export const SET_PROMPTS = 'SET_PROMPTS'
export const SET_PROMPT = 'SET_PROMPT'
export const SET_PROMPTS_PENDING = 'SET_PROMPTS_PENDING'
export const SET_ERROR = 'SET_ERROR'
export const ADD_PROMPT = 'ADD_PROMPT'
export const DEL_PROMPT = 'DEL_PROMPT'
export const UPDATE_PROMPT = 'UPDATE_PROMPT'

export function updatePrompt(prompt) {
  return {
    type: UPDATE_PROMPT,
    payload: prompt,
  }
}

export function editPrompt(prompt) {
  return (dispatch) => {
    // dispatch(setPromptsPending())
    return editPromptApi(prompt)
      .then((updatedPrompt) => {
        dispatch(updatePrompt(updatedPrompt))
        return null
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}

export function fetchPrompt(id) {
  return (dispatch) => {
    console.log('action', id)
    return getPromptById(id)
      .then((prompt) => {
        console.log('action', prompt)
        dispatch(setPrompt(prompt))
        return null
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}

export function fetchPrompts() {
  return (dispatch) => {
    dispatch(setPromptsPending())
    return getPromptsData()
      .then((prompts) => {
        dispatch(setPrompts(prompts))
        return null
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}

export function savePrompt(newPrompt) {
  return (dispatch) => {
    return addNewPrompt(newPrompt)
      .then(() => {
        // dispatch(postPrompt(prompt))
        dispatch(addPrompt(newPrompt))
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}

export function removePrompt(promptId) {
  return (dispatch) => {
    return removePromptApi(promptId)
      .then(() => {
        dispatch(deletePrompt(promptId))
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}

export const deletePrompt = (promptId) => {
  return {
    type: DEL_PROMPT,
    payload: promptId,
  }
}

export function addPrompt(newPrompt) {
  return {
    type: ADD_PROMPT,
    payload: newPrompt,
  }
}

export function setPromptsPending() {
  return {
    type: SET_PROMPTS_PENDING,
  }
}

export const setPrompt = (prompt) => {
  return {
    type: SET_PROMPT,
    payload: prompt,
  }
}

export const setPrompts = (prompts) => {
  return {
    type: SET_PROMPTS,
    payload: prompts,
  }
}

export function setError(errMessage) {
  return {
    type: SET_ERROR,
    errMessage,
  }
}
