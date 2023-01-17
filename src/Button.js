import React from "react";
export function Button(props) {
  return (
    <button onClick={() => alert()}  type={props.type} class={props.class} id={props.id} disabled={props.disabled} >
      {props.name}
    </button>
  );
}