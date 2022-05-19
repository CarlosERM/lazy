import { AiOutlineSearch, AiOutlinePlus } from 'react-icons/ai';
import './style.css';

const Input = () => {
  return (
    <div className="task-container-header">
      <form className="form">
        <input type="text" className="input" placeholder="Procurar anotação" />
        <button type="submit" className="button button--search">
          <AiOutlineSearch className="search-svg" />
        </button>
      </form>
      <button type="button" className="button button--add">
        <AiOutlinePlus className="add-svg" />
      </button>
    </div>
  );
};

export default Input;
