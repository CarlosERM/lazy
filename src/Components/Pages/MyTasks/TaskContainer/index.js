import Input from '../Input';
import Task from '../Task';
import './style.css';

const TaskContainer = () => {
  const tasks = [
    {
      title: 'Fazer Tarefa',
      description: 'Fazer lista de quimica quantica',
      finalData: '2022-05-30',
      _links: {
        self: { href: 'http://localhost:8080/tarefas/1' },
        tarefas: { href: 'http://localhost:8080/tarefas' },
      },
    },
    {
      title: 'Matar alguém',
      description: 'Comprar uma faca',
      finalData: '2022-05-21',
      _links: {
        self: { href: 'http://localhost:8080/tarefas/1' },
        tarefas: { href: 'http://localhost:8080/tarefas' },
      },
    },
    {
      title: 'Beijar minha namorada',
      description: 'Arranjar uma namorada',
      finalData: '2022-05-22',
      _links: {
        self: { href: 'http://localhost:8080/tarefas/1' },
        tarefas: { href: 'http://localhost:8080/tarefas' },
      },
    },
    {
      title: 'Arranjar problema',
      description: 'Comer um carangueijo',
      finalData: '2022-05-19',
      _links: {
        self: { href: 'http://localhost:8080/tarefas/1' },
        tarefas: { href: 'http://localhost:8080/tarefas' },
      },
    },
  ];

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
