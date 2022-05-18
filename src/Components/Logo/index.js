import Lazy from '../../Assets/logo.svg';
import './style.css';

const Logo = () => {
  return (
    <div className="logo">
      <img
        src={Lazy}
        alt="Lazy"
        style={{ height: '5.8125rem', width: ' 6.3069rem ' }}
      />
      <h1 className="logo-text">Lazy</h1>
    </div>
  );
};

export default Logo;
