import { useEffect, useState, useRef } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineDelete } from 'react-icons/md';
import { useAuth } from '../../../hook/context';

import './style.css';

const Task = ({ title, description, finalData }) => {
  const { toggleModal, selectType } = useAuth();
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
  }, []);

  function handleViewClick() {
    toggleModal();
    selectType('view');
  }

  function handleEditClick(e) {
    e.stopPropagation();
    toggleModal();
    selectType('edit');
  }
  function handleDeleteClick(e) {
    e.stopPropagation();
    toggleModal();
    selectType('delete');
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
              onClick={handleDeleteClick}
            />
          </div>
        </div>
      </li>
    </>
  );
};

export default Task;
