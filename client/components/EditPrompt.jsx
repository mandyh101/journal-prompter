import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {useParams} from 'react-router-dom'
import {fetchPrompt} from '../actions/prompts'

function EditPrompt () {
  
  const prompt = useSelector(state => state.prompts)
  const [editPromptInput, setEditPromptInput] = useState({})
  const {id} = useParams()

  const dispatch = useDispatch()

  useEffect(() => {
    console.log(id)
    dispatch(fetchPrompt(id))
    console.log(prompt)
  //   // setEditPromptInput(prompt)
  //   // console.log(editPromptInput)
  //   //setPromptInput as prompt - sets the default value as the prompt being edited
  }, [])


  function handleOnChange(e){
    console.log('tagert', e.target.name)
    console.log('val', e.target.value)
    setEditPromptInput({
      ...editPromptInput,
      [e.target.name]: e.target.value
    })
    console.log('edited prompt', editPromptInput)
  }

  return ( 
    <>
    <form>
      <h3>Edit prompt</h3>
      <label htmlFor="prompt"> Edit journal prompt:
        <textarea 
        id="prompt" 
        name="prompt" 
        type="text" 
        defaultValue={prompt.prompt}
        onChange={handleOnChange}>
        </textarea>
      </label>
      <label htmlFor="category"> Edit journal category:
        <input 
        id="category" 
        name="category" 
        type="text" 
        defaultValue={prompt.category}
        onChange={handleOnChange}>
        </input>
      </label>
      <button type="submit">Save changes</button>
    </form>
    </>
   );
}

export default EditPrompt ;