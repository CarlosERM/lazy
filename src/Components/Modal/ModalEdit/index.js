import Button from '../../Button';
import './style.css';

const ModalEdit = () => {
  return (
    <form>
      <label htmlFor="titulo" className="label-edit">
        Titulo:
      </label>
      <input
        type="text"
        id="titulo"
        name="titulo"
        className="input-edit"
        placeholder="Ex: Tarefa do Chuchu"
      />
      <label htmlFor="descricao" className="label-edit">
        Descrição
      </label>
      <textarea
        id="descricao"
        name="descricao"
        className="input-edit input-edit--descricao"
        placeholder="Ex: Fazer Banco de Dados"
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
      />
      <div className="button-container">
        <Button name="Cancelar" color="#83706F" />
        <Button name="Salvar" color="#279AF1" />
      </div>
    </form>
  );
};

export default ModalEdit;
