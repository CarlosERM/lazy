import { useState } from 'react';
import ReactDOM from 'react-dom';
import ModalView from './ModalView';
import ModalEdit from './ModalEdit';
import './style.css';

export const useModal = () => {
  const [view, setView] = useState(false);
  const [type, setType] = useState('');

  function selectType(selectedType) {
    setType(selectedType);
  }
  function toggleModal() {
    setView(!view);
  }

  return [view, toggleModal, type, selectType];
};

export const Modal = ({ toggleModal, type }) => {
  const modal = (
    <>
      <div className="background-modal" onClick={toggleModal}></div>
      <div className="modal-container">
        {type === 'view' ? (
          <ModalView />
        ) : type === 'edit' ? (
          <ModalEdit />
        ) : (
          <>QUER DELETAR MESMO?</>
        )}
      </div>
    </>
  );
  return ReactDOM.createPortal(modal, document.body);
};
