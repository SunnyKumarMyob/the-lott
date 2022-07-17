const Input = ({ children, ...props }) => (
    <input
        type="text"
        key={props.key}
        id={props.id}
        name={props.name}
        className={props.className}
        disabled={props.disabled}>
    </input>
  );

  export default Input;
