import React from "react";
const Input = (props) => {
  return (
    <input
      type={props.type}
      id={props.id}
      class={props.class}
      placeholder={props.placeholder}
      value={props.estado}
      onChange={(e) => props.setEstado(e.target.value)}
    />
  );
};

export default Input;
