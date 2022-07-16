import React, { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from "react-router-dom";
import { fetchPrompts , removePrompt } from "../actions/prompts";

import ErrorMessage from "./ErrorMessage";
//import Pending from "./Pending";
import styles from "../styles/Prompts.module.scss"
 

function Prompts() {
  const prompts = useSelector(state => state.prompts)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  console.log('prompts' , prompts)


  useEffect(() => {
      dispatch(fetchPrompts())
  }, [])

  function deletePrompt(id){
    dispatch(removePrompt(id))
  }


  return (  
    <div className={styles.Prompts}>
    <ErrorMessage />
    <h1>Hello Journal Prompts!</h1>
    {/* <Pending /> */}
    <ul>
      {prompts.map((prompt) => (
        <li key={prompt.id}>
          <p>{prompt.prompt}</p>
          <div className="category">
            {prompt.category}
          </div>
          <button onClick={()=>navigate('/edit/'+prompt.id)}>Edit this prompt</button>
          <button onClick={() => deletePrompt(prompt.id)}>Delete</button>
        </li>
      ))}
    </ul>
    </div>
  );
}

export default Prompts ;