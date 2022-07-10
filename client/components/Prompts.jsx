import React from "react";
import {useSelector} from 'react-redux'
 

function Prompts() {
  const prompts = useSelector(state => state.prompts)
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