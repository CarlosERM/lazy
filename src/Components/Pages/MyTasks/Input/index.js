import { AiOutlineSearch, AiOutlinePlus } from 'react-icons/ai';
import { useAuth } from '../../../hook/context';
import './style.css';

const Input = () => {
  const { toggleModal, selectValues, selectType } = useAuth();
  function handleAddClick() {
    selectType('edit');
    selectValues({
      title: '',
      description: '',
      finalDate: '',
    });
    toggleModal();
  }
  return (
    <div className="task-container-header">
      <form className="form">
        <input type="text" className="input" placeholder="Procurar anotação" />
        <button type="submit" className="button button--search">
          <AiOutlineSearch className="search-svg" />
        </button>
      </form>

      <button
        type="button"
        className="button button--add"
        onClick={handleAddClick}
      >
        <AiOutlinePlus className="add-svg" />
      </button>
    </div>
  );
};

export default Input;
