import { Component } from 'react';
import style from './Modal.module.css';

export default class Modal extends Component {
  // монтирование компонента
  componentDidMount() {
    console.log('Modal componentDidMount');
  }

  // размонтирование и удаление компонента
  componentWillUnmount() {
    console.log('Modal componentWillUnmount');
  }

  render() {
    return (
      <div className={style.Modal__backdrop}>
        <div className={style.Modal__content}>{this.props.children}</div>
      </div>
    );
  }
}
