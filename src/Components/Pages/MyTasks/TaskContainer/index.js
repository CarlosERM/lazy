import { useAuth } from '../../../hook/context';
import Input from '../Input';
import Task from '../Task';
import './style.css';

const TaskContainer = () => {
  const { tasks } = useAuth();
  return (
    <div className="task-container">
      <Input />
      <ul className="task-grid">
        {tasks &&
          tasks.map(({ id, title, description, finalDate }) => {
            return (
              <Task
                id={id}
                title={title}
                description={description}
                finalDate={finalDate}
                key={title}
              />
            );
          })}
      </ul>
    </div>
  );
};

export default TaskContainer;
