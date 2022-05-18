import './style.css';
import { ReactComponent as Search } from '../../../../Assets/search.svg';

const Input = () => {
  return (
    <form className="form">
      <input type="text" className="input" placeholder="Procurar anotação" />
      <button type="submit" className="add-button">
        <Search style={{ fill: 'white' }} />
      </button>
    </form>
  );
};

export default Input;
