import { useAuth } from '../../../hook/context';
import { Loader } from '../../../Loader';
import Input from '../Input';
import Task from '../Task';
import './style.css';

const TaskContainer = () => {
  const { tasks, loader } = useAuth();
  return (
    <div className="task-container">
      <Input />
      <ul className="task-grid">
        {loader ? (
          <Loader />
        ) : tasks.length > 0 ? (
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
          })
        ) : (
          <p style={{ gridColumn: ' 1 / -1' }}>
            Nenhum resultado foi encontrado.
          </p>
        )}
      </ul>
    </div>
  );
};

export default TaskContainer;
