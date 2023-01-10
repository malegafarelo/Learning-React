import React, { useState } from "react";
export function TextInput() {
  const [mensaje, setMensaje] = useState("");

  function DeshabilitarBtn() {
    return mensaje.length <= 0;
  }

  return (
    <div>
      <input onChange={(e) => setMensaje(e.target.value)}></input>
      <button onClick={() => alert(mensaje)} disabled={DeshabilitarBtn()}>
        Buscar
      </button>
    </div>
  );
}
