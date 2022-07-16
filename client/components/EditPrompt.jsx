import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";

function EditPrompt () {
  
  const prompt = useSelector((state) => state.prompts)
  const [editPromptInput, setEditPromptInput] = useState({})
  const dispatch = useDispatch()

  function handleOnChange(e){
    setEditPromptInput({
      ...editPromptInput,
      [e.target.name]: e.target.value
    })
    console.log('edited prompt', editPromptInput)
  }

  return ( 
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
      <button type="submit"></button>
    </form>
   );
}

export default EditPrompt ;