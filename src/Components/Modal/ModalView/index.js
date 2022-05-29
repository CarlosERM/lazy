import Button from '../../Button';
import './style.css';

const ModalView = () => {
  return (
    <div>
      <h2 className="title-modal">Lorem Ipsun </h2>
      <p className="paragraph-modal">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
        ultrices risus, vel fringilla massa. Nunc eget laoreet orci. Cras ut
        velit at urna vulputate efficitur nec vel enim. Nulla nec risus id risus
        pretium sollicitudin. Morbi in vestibulum lacus, ac egestas neque.
      </p>
      <div className="footer-modal">
        <p className="date-modal">30/05/2022</p>
        <div className="button-container">
          <Button name="Deletar" color="#FE5F55" />
          <Button name="Editar" color="#279AF1" />
        </div>
      </div>
    </div>
  );
};

export default ModalView;
