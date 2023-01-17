import React from 'react';
const Input = (props) => {

    return(
        <input type="search"  id="input1" class="form-control" placeholder='Ingrese su nombre' value={props.estado} onChange={(e)=>props.setEstado(e.target.value)}/>
    );
}

export default Input;