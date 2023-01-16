import React from "react";
export function Button(props) {
  return (
    <button onClick={() => alert()} disabled={props.disabled}>
      {props.name}
    </button>
  );
}