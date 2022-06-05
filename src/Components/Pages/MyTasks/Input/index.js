import { useRef } from 'react';
import { AiOutlineSearch, AiOutlinePlus } from 'react-icons/ai';
import { useAuth } from '../../../hook/context';
import './style.css';
const Input = () => {
  const { toggleModal, selectValues, selectType, getPostit, getAll } =
    useAuth();
  const input = useRef(null);

  function handleAddClick() {
    selectType('create');
    selectValues({
      title: '',
      description: '',
      finalDate: '',
    });
    toggleModal();
  }

  function handleSubmit(event) {
    event.preventDefault();
    const search = input.current.value.trim();
    if (search.length > 0) getPostit(search);
    else getAll();
  }

  return (
    <div className="task-container-header">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="input"
          id="input"
          className="input"
          placeholder="Procurar anotação"
          ref={input}
        />
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
