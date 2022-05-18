import Container from '../../Container';
import TaskContainer from './TaskContainer';
import Title from '../../Title';

const MyTasks = () => {
  return (
    <>
      <Title title="Minhas Tarefas" />
      <Container>
        <TaskContainer />
      </Container>
    </>
  );
};

export default MyTasks;
