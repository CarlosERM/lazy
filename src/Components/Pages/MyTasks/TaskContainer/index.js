import Input from '../Input';
import Task from '../Task';
import './style.css';
import { useMyContext } from '../../../../context/index';

const TaskContainer = () => {
  const { tasks } = useMyContext();

  return (
    <div className="task-container">
      <Input />
      <ul className="task-grid">
        {tasks &&
          tasks.map(({ title, description, finalData }) => {
            return (
              <Task
                title={title}
                description={description}
                finalData={finalData}
                key={title}
              />
            );
          })}
      </ul>
    </div>
  );
};

export default TaskContainer;
