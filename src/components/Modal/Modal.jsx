import { Component } from 'react';
import { createPortal } from 'react-dom';
import style from './Modal.module.css';

// Вставляем модальное окно в отдельный div (Портал)
const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  // монтирование компонента
  componentDidMount() {
    // console.log('Modal componentDidMount');
    window.addEventListener('keydown', this.handleKeyDown);
  }

  // размонтирование и удаление компонента
  componentWillUnmount() {
    // console.log('Modal componentWillUnmount');
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  // закрываем модальное окно по нажатию ESC
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      // console.log('Нажали ESC, нужно закрыть модалку');

      this.props.onClose();
    }
  };
  // закрываем модальное окно по клику на div.Modal__backdrop
  handleBackdropClick = e => {
    // console.log('Клик!!!');
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={style.Modal__backdrop} onClick={this.handleBackdropClick}>
        <div className={style.Modal__content}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}
