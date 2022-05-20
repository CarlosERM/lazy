import Input from '../Input';
import Task from '../Task';
import './style.css';

const TaskContainer = () => {
  const task = {
    title: 'Fazer Tarefa',
    description: 'Fazer lista de quimica quantica',
    finalData: '2022-05-19',
    _links: {
      self: { href: 'http://localhost:8080/tarefas/1' },
      tarefas: { href: 'http://localhost:8080/tarefas' },
    },
  };

  return (
    <div className="task-container">
      <Input />
      <ul className="task-grid">
        <Task
          title={task.title}
          description={task.description}
          finalData={task.finalData}
        />
      </ul>
    </div>
  );
};

export default TaskContainer;
