import PropTypes from "prop-types";

export const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      style={{ backgroundColor: props.color }}
      className="btn"
    >
      {props.text}
    </button>
  );
};

Button.defaultProps = {
  color: "steelblue",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};
