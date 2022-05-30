import { AiOutlineSearch, AiOutlinePlus } from 'react-icons/ai';
import { Modal, useModal } from '../../../Modal';
import './style.css';

const Input = () => {
  const [
    itemModalOpen,
    setItemModalOpen,
    toggleModal,
    selected,
    setSelected,
    type,
    setType,
  ] = useModal();

  console.log(
    itemModalOpen,
    setItemModalOpen,
    toggleModal,
    selected,
    setSelected,
    type,
    setType
  );

  const handleClick = (e) => {
    console.log(e);
    setSelected({ id: 10, title: '', description: '', finalData: '' });
    toggleModal();
    setType(false);
  };

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
        onClick={handleClick}
      >
        <AiOutlinePlus className="add-svg" />
      </button>
      {itemModalOpen && (
        <Modal
          handleClose={() => setItemModalOpen(false)}
          selected={selected}
          type={type}
        />
      )}
    </div>
  );
};

export default Input;
