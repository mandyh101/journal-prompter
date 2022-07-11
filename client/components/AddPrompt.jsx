import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { savePrompt } from "../actions/prompts";


const initialForm = {
  id: '',
  prompt: '',
  category: '',
}

function AddPrompt () {

  //create local state to control form input
  const [newPrompt, setNewPrompt] = useState(initialForm) //?does this need to be an empty object to capture both the prompt and teh category?

  const dispatch = useDispatch()
  // const prompts = useSelector(state => state.prompts)
  // console.log(prompts)

  function handleSubmit(evt) {
    evt.preventDefault()
    dispatch(savePrompt(newPrompt))
    // clear all fields
    setNewPrompt(initialForm)
  }

  function handleChange(evt) {
    // this comes from name="fieldName" in the input
    console.log(evt.target.name)
    // this comes from what the user typed
    console.log(evt.target.value)

    setNewPrompt({
      // copy the rest of the fields
      ...newPrompt,
      // overwrite just the one we care about
      [evt.target.name]: evt.target.value,
    })
  }

  // next step is to add another input for category
  return ( 
    <form onSubmit={handleSubmit}>
      <label htmlFor="promptInput">Add a new journal prompt!</label>
      <input id="promptInput" type="text" name="prompt" value={newPrompt.prompt} onChange={handleChange}></input>
      <label htmlFor="category">Add a new prompt category</label>
      <input id="category" type="text" name="category" value={newPrompt.category} onChange={handleChange}></input>
      <input type='submit' value='Create' />
    </form>
   );
}

export default AddPrompt ;