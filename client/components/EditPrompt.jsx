import React, {useState} from "react";
import { useDispatch } from "react-redux";

function EditPrompt () {
  
  const prompt = useSelector((state) => state.prompt)

  return ( 
    <form>
      <h3>Edit prompt</h3>
      <label htmlFor="prompt"> Edit journal prompt:
        <textarea id="prompt" name="prompt" type="text">
        </textarea>
      </label>
      <label htmlFor="category"> Edit journal category:
        <input id="category" name="category" type="text">
        </input>
      </label>
      <button type="submit"></button>
    </form>
   );
}

export default EditPrompt ;