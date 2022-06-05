import Button from '../../Button';
import { useAuth } from '../../hook/context';
import './style.css';

const ModalEdit = ({ type }) => {
  const { selected, selectValues, updatePostit, toggleModal, createPostit } =
    useAuth();

  const handleTitle = (event) => {
    selectValues({ ...selected, title: event.target.value });
  };

  const handleDescription = (event) => {
    selectValues({ ...selected, description: event.target.value });
  };

  const handleDate = (event) => {
    selectValues({ ...selected, finalDate: event.target.value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    const date = `${selected.finalDate.slice(6, 10)}-${selected.finalDate.slice(
      3,
      5
    )}-${selected.finalDate.slice(0, 2)}`;
    const send = {
      title: selected.title,
      description: selected.description,
      finalDate: date,
    };

    if (type === 'edit') {
      updatePostit(selected.id, send);
    } else {
      createPostit(send);
    }

    toggleModal();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="titulo" className="label-edit">
        Titulo:
      </label>
      <input
        type="text"
        id="titulo"
        name="titulo"
        className="input-edit"
        placeholder="Ex: Tarefa do Chuchu"
        value={selected.title}
        onChange={handleTitle}
      />
      <label htmlFor="descricao" className="label-edit">
        Descrição
      </label>
      <textarea
        id="descricao"
        name="descricao"
        className="input-edit input-edit--descricao"
        placeholder="Ex: Fazer Banco de Dados"
        value={selected.description}
        onChange={handleDescription}
      />
      <label htmlFor="data" className="label-edit">
        Data:
      </label>
      <input
        type="text"
        id="data"
        name="data"
        className="input-edit input-edit--data"
        placeholder="17/05/2022"
        value={selected.finalDate}
        onChange={handleDate}
      />
      <div className="button-container">
        <Button name="Cancelar" color="#83706F" type="submit" />
        <Button name="Salvar" color="#279AF1" />
      </div>
    </form>
  );
};

export default ModalEdit;
