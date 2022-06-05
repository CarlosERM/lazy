import './style.css';

const Button = ({ name, color, type, onClick }) => {
  return (
    <button
      className="buttonn"
      style={{ background: color, boxShadow: `0rem 0rem .3125rem ${color}` }}
      type={'button' | type}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
