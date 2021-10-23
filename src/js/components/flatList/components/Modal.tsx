import React from 'react'
import { ModalProps } from '../interfaces'

export class Modal extends React.PureComponent<ModalProps, never> {
  render(): React.ReactNode {
    return (
      <div className={`modal ${this.props.show ? 'modal_open' : ''}`} onClick={this.props.onClose}>
        <div className="modal__content" onClick={(event) => event.stopPropagation()}>
          <div className="modal__header">
            <button className="modal__btn_close" onClick={this.props.onClose}/>
            <img className="modal__img" src={this.props.layoutImage} alt={this.props.layoutImage} />
          </div>
          <div className="modal__body">
            <div className="modal__group-text">
              <p className="modal__text">Цена: {this.props.price}</p>
              <p className="modal__text">Этаж: {this.props.floor}</p>
              <p className="modal__text">Кол-во комнат: {this.props.rooms}</p>
            </div>
            <div className="modal__group-text">
              <p className="modal__text">Общая площадь: {this.props.areaTotal}</p>
              <p className="modal__text">Площадь кухни: {this.props.areaKitchen}</p>
              <p className="modal__text">Жилая площадь: {this.props.areaLive}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
