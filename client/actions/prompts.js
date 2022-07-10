export const SET_PROMPT = 'SET_PROMPT'

export const setPrompt = (prompt) => {
  return {
    type: SET_PROMPT,
    payload: prompt,
  }
}
