import Lazy from '../../Assets/logo-oficial.png';
import './style.css';

const Logo = () => {
  return (
    <div className="logo">
      <img
        src={Lazy}
        alt="Lazy"
        style={{ height: '7.625rem', width: ' 9.375rem' }}
      />
      <h1 className="logo-text">Lazy</h1>
    </div>
  );
};

export default Logo;
