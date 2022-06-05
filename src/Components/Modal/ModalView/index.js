import Button from '../../Button';
import { useAuth } from '../../hook/context';
import './style.css';

const ModalView = () => {
  const { selected, selectType } = useAuth();
  function handleDeleteClick() {
    selectType('delete');
  }
  function handleEditClick() {
    selectType('edit');
  }

  return (
    <div>
      <h2 className="title-modal">{selected.title}</h2>
      <p className="paragraph-modal">{selected.description}</p>
      <div className="footer-modal">
        <p className="date-modal">{selected.finalDate}</p>
        <div className="button-container">
          <Button name="Deletar" color="#FE5F55" onClick={handleDeleteClick} />
          <Button name="Editar" color="#279AF1" onClick={handleEditClick} />
        </div>
      </div>
    </div>
  );
};

export default ModalView;
