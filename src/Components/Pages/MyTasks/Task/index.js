/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import { useEffect, useState, useRef } from 'react';
// import { gsap } from 'gsap';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineDelete } from 'react-icons/md';
import PropTypes from 'prop-types';
import './style.css';

const Task = ({ title, description, finalData }) => {
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

  return (
    <li className={`${late ? 'task task--late' : 'task'}`} ref={taskRef}>
      <h2
        className={`${late ? 'task__title task__title--late' : 'task__title'}`}
      >
        {title}
      </h2>
      <p className="task__paragraph">{description}</p>
      <div className="task_bottom">
        <p className={`${late ? 'task_date--late' : 'task_date'}`}>{date}</p>
        <div className="task-edit-delete">
          <AiOutlineEdit
            className="edit-svg"
            onClick={() => console.log('cliquei')}
          />
          <MdOutlineDelete
            className="delete-svg"
            onClick={() => console.log('cliquei')}
          />
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
