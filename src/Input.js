import React from "react";
const Input = (props) => {
  return (
    <input
      type={props.type}
      id={props.id}
      className={props.class}
      placeholder={props.placeholder}
      value={props.estado}
      name={props.name}
      onChange={(e) => props.setestado(e.target.value)}
    />
  );
};

export default Input;
