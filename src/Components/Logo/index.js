import Lazy from '../../Assets/logo-oficial.png';
import './style.css';

const Logo = () => {
  return (
    <div className="logo">
      <img src={Lazy} alt="Lazy" style={{ height: '122px', width: ' 150px' }} />
      <h1 className="logo-text">Lazy</h1>
    </div>
  );
};

export default Logo;
