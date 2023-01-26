import React from "react";
export function Button(props) {
  return (
    <button onClick={() => alert()}  type={props.type} className={props.class} id={props.id} disabled={props.disabled} >
      {props.name}
    </button>
  );
}