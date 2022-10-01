import PropTypes from "prop-types";
import s from "./Button.module.css";

const Button = ({ type, onClick, text }) => {
  return (
    <button className={s.button} type={type} onClick={onClick} text={text}>
      {text}
    </button>
  );
};

export default Button;

Button.propTypes = { onClick: PropTypes.func.isRequired };
