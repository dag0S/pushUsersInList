import styled from './Modal.module.css';

const Modal = ({ desc, onCloseModal }) => {
  return (
    <div className={styled.overhidden} onClick={onCloseModal}>
      <div className={styled.modal}>
        <h3 className={styled['modal__title']}>Некорректный ввод</h3>
        <p className={styled['modal__desc']}>{desc}</p>
        <button className={styled['modal__btn-close']} onClick={onCloseModal}>Закрыть</button>
      </div>
    </div>
  );
};

export default Modal;
