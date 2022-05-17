import './style.css';
import SideMenu from '../SideMenu/index';
import Main from '../Main/index';

const Template = () => {
  return (
    <div className="grid">
      <SideMenu />
      <Main />
    </div>
  );
};

export default Template;
