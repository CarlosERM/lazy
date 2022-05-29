// import ModalView from './ModalView';
import ModalEdit from './ModalEdit';
import './style.css';

const Modal = () => {
  return (
    <>
      <div className="background-modal"></div>
      <div className="modal-container">
        <ModalEdit />
        {/* <ModalView /> */}
      </div>
    </>
  );
};

export default Modal;
