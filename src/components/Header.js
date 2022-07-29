import PropTypes from "prop-types";

export const Header = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// CSS in JS example
// const headingStyle = {
//   color: "blue",
//   backgroundColor: "yellow",
// };
