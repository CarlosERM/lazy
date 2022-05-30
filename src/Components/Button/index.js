import './style.css';
import PropTypes from 'prop-types';
import { useAuth } from '../hook/context';

const Button = ({ name, color, id, type }) => {
  const { deleteOne } = useAuth();

  const handleClick = () => {
    if (name === 'Deletar') deleteOne(id);
    if (name === 'Editar') console.log('editar');
  };

  return (
    <button
      className="buttonn"
      style={{ background: color, boxShadow: `0rem 0rem .3125rem ${color}` }}
      onClick={handleClick}
      type={'button' | type}
    >
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  id: PropTypes.number,
  type: PropTypes.string,
};

export default Button;
