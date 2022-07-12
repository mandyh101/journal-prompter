import React, { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux'
import { fetchPrompts , removePrompt } from "../actions/prompts";

import ErrorMessage from "./ErrorMessage";
import Pending from "./Pending";
import styles from "./Prompts.module.css"
 

function Prompts() {
  const prompts = useSelector(state => state.prompts)
  const dispatch = useDispatch()

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchPrompts())
    }, 50)
    
  }, [])

  function handleClick(id){
    console.log(id)
    dispatch(removePrompt(id))
  }

  return (  
    <div className={styles.Prompts}>
    <ErrorMessage />
    <h1>Hello Journal Prompts!</h1>
    <Pending />
    <ul>
      {prompts.map((prompt) => (
        <li key={prompt.id}>{prompt.prompt} 
        <div>
          <button onClick={() => handleClick(prompt.id)}>Delete</button>
        </div>
        </li>
      ))}
    </ul>
    </div>
  );
}

export default Prompts ;