import './style.css';
import PropTypes from 'prop-types';

const Button = ({ name, color }) => {
  return (
    <button className="button" style={{ background: color }}>
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Button;
