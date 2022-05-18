import './style.css';
import Logo from '../Logo/index';
import Nav from '../Nav/index';

const SideMenu = () => {
  return (
    <aside className="side-menu">
      <Logo />
      <Nav />
    </aside>
  );
};

export default SideMenu;
