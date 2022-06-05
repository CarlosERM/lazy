import ReactDOM from 'react-dom';
import ModalView from './ModalView';
import ModalEdit from './ModalEdit';
import { useState } from 'react';
import { ModalDelete } from './ModalDelete';
import './style.css';

export const useModal = () => {
  const [view, setView] = useState(false);
  const [type, setType] = useState('');
  const [selected, setSelected] = useState();

  function selectType(selectedType) {
    setType(selectedType);
  }

  function selectValues(selectedValue) {
    setSelected(selectedValue);
  }

  function toggleModal() {
    setView(!view);
  }

  return [view, toggleModal, type, selectType, selected, selectValues];
};

export const Modal = ({ toggleModal, type }) => {
  const modal = (
    <>
      <div className="background-modal" onClick={toggleModal}></div>
      <div className="modal-container">
        {type === 'view' ? (
          <ModalView />
        ) : type === 'edit' ? (
          <ModalEdit type="edit" />
        ) : type === 'create' ? (
          <ModalEdit type="create" />
        ) : (
          <ModalDelete />
        )}
      </div>
    </>
  );
  return ReactDOM.createPortal(modal, document.body);
};
