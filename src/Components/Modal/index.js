import PropTypes from 'prop-types';

import ModalView from './ModalView';
import ModalEdit from './ModalEdit';
import './style.css';
import { useState } from 'react';

export const useModal = (initialMode = false) => {
  const [modalOpen, setModalOpen] = useState(initialMode);
  const toggle = () => setModalOpen(!modalOpen);
  const [selected, setSelected] = useState();
  const [type, setType] = useState();
  return [
    modalOpen,
    setModalOpen,
    toggle,
    selected,
    setSelected,
    type,
    setType,
  ];
};

export const Modal = ({ handleClose, selected, type }) => {
  console.log(type);
  console.log(selected);

  return (
    <>
      <div className="background-modal" onClick={handleClose}></div>
      <div className="modal-container">
        {type ? <ModalView /> : <ModalEdit />}
      </div>
    </>
  );
};
Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  selected: PropTypes.object.isRequired,
  type: PropTypes.bool.isRequired,
};
