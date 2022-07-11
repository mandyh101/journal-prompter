import React, {useState} from "react";
// import { useDispatch } from "react-redux";

//uncomment below import once action creator is set up
//import {addPrompt} from '../actions/prompts' 

function AddPrompt () {
  //create local state to control form input
  const [newPrompt, setNewPrompt] = useState('') 
  // const dispatch = useDispatch

  function handleSubmit(e){
    e.preventDefault()
    console.log(newPrompt)
    setNewPrompt('')
    //once action is created, replace line 14 with dispatch(addPrompt(newPrompt)) nd then setNewPrompt back to empty string
  }

  function handleChange(e){
    setNewPrompt(e.target.value)
  }
  
  // next step is to add another input for category
  return ( 
    <form onSubmit={handleSubmit}>
      <label htmlFor="promptInput">Add a new journl prompt!</label>
      <input id="promptInput" type="text" name="promptInput" value={newPrompt} onChange={handleChange}></input>
      <input type='submit' value='Create' />
    </form>
   );
}

export default AddPrompt ;