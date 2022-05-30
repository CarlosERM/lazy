import PropTypes from 'prop-types';

import Button from '../../Button';
import './style.css';

const ModalView = ({ selected }) => {
  return (
    <div>
      <h2 className="title-modal">{selected.title}</h2>
      <p className="paragraph-modal">{selected.description}</p>
      <div className="footer-modal">
        <p className="date-modal">{selected.date}</p>
        <div className="button-container">
          <Button name="Deletar" color="#FE5F55" id={selected.id} />
          <Button name="Editar" color="#279AF1" />
        </div>
      </div>
    </div>
  );
};

ModalView.propTypes = {
  selected: PropTypes.object,
};

export default ModalView;
