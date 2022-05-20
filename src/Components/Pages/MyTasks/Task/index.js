import './style.css';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineDelete } from 'react-icons/md';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const Task = ({ title, description, finalData }) => {
  const [late, setLate] = useState();
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

  return (
    <li className={`${late ? 'task task--late' : 'task'}`}>
      <h2
        className={`${late ? 'task__title task__title--late' : 'task__title'}`}
      >
        {title}
      </h2>
      <p className="task__paragraph">{description}</p>
      <div className="task_bottom">
        <p className={`${late ? 'task_date--late' : 'task_date'}`}>{date}</p>
        <div className="task-edit-delete">
          <AiOutlineEdit className="edit-svg" />
          <MdOutlineDelete className="delete-svg" />
        </div>
      </div>
    </li>
  );
};

Task.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  finalData: PropTypes.string.isRequired,
};
export default Task;
