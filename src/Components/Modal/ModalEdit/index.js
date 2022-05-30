import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from '../../Button';
import { useAuth } from '../../hook/context';
import './style.css';

const ModalEdit = ({ selected }) => {
  const { updatePost } = useAuth();
  const [task, setTask] = useState({
    id: selected.id,
    title: selected.title,
    description: selected.description,
    finalData: selected.date,
  });

  const handleTitle = (event) => {
    setTask({ ...task, title: event.target.value });
  };

  const handleDescription = (event) => {
    setTask({ ...task, description: event.target.value });
  };

  const handleDate = (event) => {
    setTask({ ...task, finalData: event.target.value });
  };

  function handleSubmit(event) {
    event.preventDefault();
    updatePost(task);
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
        value={task.title}
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
        value={task.description}
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
        value={task.finalData}
        onChange={handleDate}
      />
      <div className="button-container">
        <Button name="Cancelar" color="#83706F" type="submit" />
        <Button name="Salvar" color="#279AF1" />
      </div>
    </form>
  );
};

ModalEdit.propTypes = {
  selected: PropTypes.object,
};

export default ModalEdit;
