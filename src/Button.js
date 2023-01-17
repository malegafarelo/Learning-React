import React from "react";
export function Button(props) {
  return (
    <button onClick={() => alert()}  type="submit "class="search-btn" id="btn-1" disabled={props.disabled}>
      {props.name}
    </button>
  );
}