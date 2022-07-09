import React from "react";
import {useSelector} from 'react-redux'
 

function Prompts() {
  const prompts = useSelector(state => state.prompts)
  return (  
    <h1>Hello Journal Prompts!</h1>
  );
}

export default Prompts ;