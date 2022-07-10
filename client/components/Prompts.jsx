import React from "react";
import { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux'
import { fetchPrompts } from "../actions/prompts";
 

function Prompts() {
  const prompts = useSelector(state => state.prompts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPrompts())
  }, [])

  return (  
    <div>
    <h1>Hello Journal Prompts!</h1>
    <ul>
      {prompts.map((prompt) => (
        <li key={prompt.id}>{prompt.prompt}</li>
      ))}
    </ul>
    </div>
  );
}

export default Prompts ;