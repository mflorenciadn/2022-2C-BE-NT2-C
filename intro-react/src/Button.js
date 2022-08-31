const Button = (props) => {
  return (
    <button className={props.className} onClick={props.handleClick}>
      Mi boton con jsx
    </button>
  );
};

export default Button;
