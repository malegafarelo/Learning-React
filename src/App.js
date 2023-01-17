import React from "react"
import Input from './Input'
import { Button } from "./Button";
import { useState } from 'react';

const App = () => {

  const [estado, setEstado] = useState()

  const input ={
    type:"text",
    placeholder:"ingrese su nombre",
    class:"input1"
  }

  const button ={
    class: "btn-primary", 
    color: "#000000"
  }
  return(
      <div>
        <Input estado={estado} setEstado={setEstado} class={input.class} type={input.type} placeholder={input.placeholder}/>
        <Button disabled={!estado} name="Buscar" class={button.class}/>
      </div>
  );
}

export default App;