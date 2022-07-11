import React, { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux'
import { fetchPrompts } from "../actions/prompts";

import ErrorMessage from "./ErrorMessage";
import Pending from "./Pending";
import styles from "./Prompts.module.css"
 

function Prompts() {
  const prompts = useSelector(state => state.prompts)
  const dispatch = useDispatch()

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchPrompts())
    }, 500)
    
  }, [])

  return (  
    <div className="prompts-container">
    <ErrorMessage />
    <h1>Hello Journal Prompts!</h1>
    <Pending />
    <ul>
      {prompts.map((prompt) => (
        
        <li key={prompt.id}>{prompt.prompt}</li>
       
        
      ))}
    </ul>
    </div>
  );
}

export default Prompts ;