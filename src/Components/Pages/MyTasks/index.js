import Container from '../../Container';
import TaskContainer from './TaskContainer';
import Title from '../../Title';
import { useAuth } from '../../hook/context';
import { Modal } from '../../Modal';

const MyTasks = () => {
  const { view, toggleModal, type } = useAuth();
  return (
    <>
      <Title title="Minhas tarefas" />
      <Container>
        <TaskContainer />
      </Container>
      {view ? <Modal toggleModal={toggleModal} type={type} /> : <></>}
    </>
  );
};

export default MyTasks;
