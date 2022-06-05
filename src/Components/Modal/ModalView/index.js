import { convertDate } from '../../../utils/convertDate';
import Button from '../../Button';
import { useAuth } from '../../hook/context';
import './style.css';

const ModalView = () => {
  const { selected } = useAuth();
  const date = convertDate(selected.finalDate);
  return (
    <div>
      <h2 className="title-modal">{selected.title}</h2>
      <p className="paragraph-modal">{selected.description}</p>
      <div className="footer-modal">
        <p className="date-modal">{date}</p>
        <div className="button-container">
          <Button name="Deletar" color="#FE5F55" />
          <Button name="Editar" color="#279AF1" />
        </div>
      </div>
    </div>
  );
};

export default ModalView;
