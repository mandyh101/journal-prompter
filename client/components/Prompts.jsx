import React, { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux'
import { fetchPrompts } from "../actions/prompts";
 

function Prompts() {
  const prompts = useSelector(state => state.prompts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPrompts())
  }, [])

  return (  
    <div className="prompts-container">
    {/* insert error message component here */}
    <h1>Hello Journal Prompts!</h1>
    {/* insert loading indicator here */}
    <ul>
      {prompts.map((prompt) => (
        <li key={prompt.id}>{prompt.prompt}</li>
      ))}
    </ul>
    </div>
  );
}

export default Prompts ;