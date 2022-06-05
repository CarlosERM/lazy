import { useEffect, useState, useRef } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineDelete } from 'react-icons/md';
import { convertDate } from '../../../../utils/convertDate';
import { useAuth } from '../../../hook/context';
import './style.css';

const Task = ({ id, title, description, finalDate }) => {
  const { toggleModal, selectType, selectValues } = useAuth();
  const [late, setLate] = useState();
  const taskRef = useRef();
  const today = new Date().getTime();
  const dueDate = Date.parse(finalDate);
  const date = convertDate(finalDate);

  useEffect(() => {
    if (today > dueDate) {
      setLate(true);
    } else {
      setLate(false);
    }
  }, [selectValues]);

  function handleViewClick() {
    toggleModal();
    selectType('view');
    selectValues({
      id: id,
      title: title,
      description: description,
      finalDate: date,
    });
  }

  function handleEditClick(e) {
    e.stopPropagation();
    toggleModal();
    selectType('edit');
    selectValues({
      id: id,
      title: title,
      description: description,
      finalDate: date,
    });
  }
  function handleDeleteClick(e) {
    e.stopPropagation();
    selectValues({
      id: id,
      title: title,
      description: description,
      finalDate: date,
    });
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
