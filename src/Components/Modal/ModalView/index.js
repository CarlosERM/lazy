import Button from '../../Button';
import './style.css';

const ModalView = () => {
  return (
    <div>
      <h2 className="title-modal">oi</h2>
      <p className="paragraph-modal">oi</p>
      <div className="footer-modal">
        <p className="date-modal">oi</p>
        <div className="button-container">
          <Button name="Deletar" color="#FE5F55" />
          <Button name="Editar" color="#279AF1" />
        </div>
      </div>
    </div>
  );
};

export default ModalView;
