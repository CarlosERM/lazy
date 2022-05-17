import PropTypes from 'prop-types';
import './style.css';

const Title = ({ title }) => {
  return <h2 className="title">{title}</h2>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Title;
