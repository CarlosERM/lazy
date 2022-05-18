import { ReactComponent as Task } from '../../Assets/task.svg';
import './style.css';

const Nav = () => {
  return (
    <ul className="nav">
      <li className="nav__link">
        <Task style={{ fill: 'red' }} />
        Minhas Tarefas
      </li>
    </ul>
  );
};

export default Nav;
