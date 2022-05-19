import { RiBook2Fill } from 'react-icons/ri';
import './style.css';

const Nav = () => {
  return (
    <ul className="nav">
      <li className="nav__link">
        <RiBook2Fill className="book-svg" />
        Minhas Tarefas
      </li>
    </ul>
  );
};

export default Nav;
