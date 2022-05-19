import './style.css';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineDelete } from 'react-icons/md';
import PropTypes from 'prop-types';

const Task = ({ title, description, date }) => {
  return (
    <li className="task">
      <h2 className="task__title">{title}</h2>
      <p className="task__paragraph">{description}</p>
      <div className="task_bottom">
        <p className="task_date">{date}</p>
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
  date: PropTypes.string.isRequired,
};

export default Task;
