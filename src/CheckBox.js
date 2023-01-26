function CheckBox(props) {
  return (
    <input
      className={props.class}
      id={props.id}
      type={props.type}
      disabled={props.disabled}
      value={props.value}
      onChange={props.onChange}
    ></input>
  );
}

export default CheckBox;
