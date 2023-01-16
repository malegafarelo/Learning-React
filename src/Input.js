import React from 'react';
const Input = (props) => {

    return(
        <input type="text" value={props.estado} onChange={(e)=>props.setEstado(e.target.value)} />
    );
}

export default Input;