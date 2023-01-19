function TextArea(props) {
    return (
<textarea placeholder={props.placeholder} id={props.id} class={props.class} type={props.type}></textarea>
    );
}

export default TextArea;