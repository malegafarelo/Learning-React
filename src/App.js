import React from "react"
import Input from './Input'
import { Button } from "./Button";
import { useState } from 'react';

const App = () => {

  const [estado, setEstado] = useState()

  return(
      <div>
        <Input estado={estado} setEstado={setEstado} />
        <Button disabled={!estado} name="Buscar"/>
      </div>
  );
}

export default App;