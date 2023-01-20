function Radio(props) {
  return (
    <input
      class={props.class}
      type={props.type}
      value={props.value}
      onChange={props.onChange}
    ></input>
  );
}

export default Radio;
