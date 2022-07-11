import request from 'superagent'
const promptApi = '/api/v1/prompts'

export function getPromptsData() {
  return request
    .get(promptApi)
    .then((response) => {
      const promptData = response.body
      return promptData
    })
    .catch((err) => {
      console.error(err)
    })
}

export function addNewPrompt(newPrompt){
  return request
  .post(promptApi)
  .send(newPrompt)
  .then((res) => {
    return res.body 
  })
  .catch((err) => {
    console.error(err)
  }) 
  
}