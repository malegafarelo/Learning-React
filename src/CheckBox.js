function CheckBox(props){
    return (
        <input class={props.class} id={props.id}  type={props.type} disabled={props.disabled} value={props.value} onChange={props.onChange}></input>
    )
}

export default CheckBox