import Button from '../../Button';
import { useAuth } from '../../hook/context';
import './style.css';

export const ModalDelete = () => {
  const { toggleModal, deletePostit, selected } = useAuth();

  function handleDeleteClick() {
    console.log(selected.id);
    deletePostit(selected.id);
    toggleModal();
  }
  function handleCancelClick() {
    toggleModal();
  }

  return (
    <>
      <p className="delete-paragraph">Tem certeza que deseja deletar ?</p>
      <div className="button-container">
        <Button name="Deletar" color="#FE5F55" onClick={handleDeleteClick} />
        <Button
          name="Cancelar"
          color="#83706F"
          type="submit"
          onClick={handleCancelClick}
        />
      </div>
    </>
  );
};
