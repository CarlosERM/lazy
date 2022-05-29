import { useEffect, useState, useRef } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineDelete } from 'react-icons/md';
import PropTypes from 'prop-types';
import './style.css';
import { Modal, useModal } from '../../../Modal';

const Task = ({ title, description, finalData }) => {
  const [
    itemModalOpen,
    setItemModalOpen,
    toggleModal,
    selected,
    setSelected,
    type,
    setType,
  ] = useModal();
  const [late, setLate] = useState();
  const taskRef = useRef();

  const today = new Date().getTime();
  const dueDate = Date.parse(finalData);

  const date = `${finalData.slice(8, 10)}/${finalData.slice(
    5,
    7
  )}/${finalData.slice(0, 4)}`;

  useEffect(() => {
    if (today >= dueDate) {
      setLate(true);
    } else {
      setLate(false);
    }
    setSelected({ title, description, finalData });
  }, []);

  function handleViewClick() {
    setType(true);
    toggleModal();
  }
  function handleEditClick(event) {
    event.stopPropagation();
    setType(false);
    toggleModal();
  }
  return (
    <>
      <li
        className={`${late ? 'task task--late' : 'task'}`}
        ref={taskRef}
        onClick={handleViewClick}
      >
        <h2
          className={`${
            late ? 'task__title task__title--late' : 'task__title'
          }`}
        >
          {title}
        </h2>
        <p className="task__paragraph">{description}</p>
        <div className="task_bottom">
          <p className={`${late ? 'task_date--late' : 'task_date'}`}>{date}</p>
          <div className="task-edit-delete">
            <AiOutlineEdit className="edit-svg" onClick={handleEditClick} />
            <MdOutlineDelete
              className="delete-svg"
              onClick={() => console.log('delete')}
            />
          </div>
        </div>
      </li>
      {itemModalOpen && (
        <Modal
          handleClose={() => setItemModalOpen(false)}
          selected={selected}
          type={type}
        />
      )}
    </>
  );
};

Task.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  finalData: PropTypes.string.isRequired,
};
export default Task;
