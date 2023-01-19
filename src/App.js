import React from "react"
import Input from './Input'
import { Button } from "./Button";
import { useState } from 'react';
import TextArea from "./TextArea";
import "./App.css"
import CheckBox from "./CheckBox";


const App = () => {

  const [estado, setEstado] = useState()

  const input ={
    type:"text",
    placeholder:"Ingrese su nombre",
    class:"input1"
  }

  const button ={
    class: "btn-primary", 
    color: "#000000"
  }

  const textArea ={
    placeholder:"Escriba su apellido",
    id: 4,
    class: "textArea1",
    type:"Checkbox"
  }

  const checkBox={
    class:"checkbox1",
    type: "CheckBox",

  }
  return(
      <div>
        <Input estado={estado} setEstado={setEstado} class={input.class} type={input.type} placeholder={input.placeholder}/>
        <TextArea placeholder={textArea.placeholder} id={textArea.id} class={textArea.class}/>
        <CheckBox class={checkBox.class} type={checkBox.type}></CheckBox>
        <Button disabled={!estado} name="Buscar" class={button.class}/>
      </div>
  );
}

export default App;