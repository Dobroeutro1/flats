import React from 'react'
import { FlatCardProps, FlatCardState } from '../interfaces'
import { Modal } from './Modal'

export class FlatCard extends React.PureComponent<FlatCardProps, FlatCardState> {
  constructor(props: FlatCardProps) {
    super(props)
    this.state = { showModal: false }
  }

  handleShowModal = (): void => {
    this.setState({ showModal: !this.state.showModal })
  }

  render(): React.ReactNode {
    return (
      <div>
        <Modal onClose={this.handleShowModal} show={this.state.showModal} {...this.props} />
        <div className="card" onClick={this.handleShowModal}>
          <img className="card__img" src={this.props.layoutImage} alt={this.props.layoutImage} />
          <div className="card__footer">
            <p className="card__text">Цена: {this.props.price}</p>
            <p className="card__text">Кол-во комнат: {this.props.rooms}</p>
            <p className="card__text">Этаж: {this.props.floor}</p>
          </div>
        </div>
      </div>
    )
  }
}
