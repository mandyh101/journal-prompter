import request from 'superagent'
const promptApi = '/api/v1/prompts/'

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

export function addNewPrompt(newPrompt) {
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

export function removePromptApi(promptId) {
  console.log('hit delete route', promptId)
  return (
    request
      .delete(promptApi + promptId)
      // .send(promptId)
      .then((response) => {
        return response
      })
      .catch((err) => {
        console.error(err)
      })
  )
}

export function updatePrompt(prompt) {
  console.log('hit update route', prompt.promptId)
  return request
    .patch(promptApi + prompt.promptId)
    .send(prompt)
    .then((res) => {
      return res.body
    })
    .catch((err) => {
      console.error(err)
    })
}
