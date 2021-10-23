import React from 'react'
import { FilterProps, FilterState } from '../interfaces'
import { setDefaultFilterParams } from '../utils'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

const Range = Slider.createSliderWithTooltip(Slider.Range)

export class Filter extends React.PureComponent<FilterProps, FilterState> {
  constructor(props: FilterProps) {
    super(props)
    this.state = {
      defaultParams: null,
      showAdditionalParams: false
    }
  }

  componentDidMount(): void {
    if (this.props.flatList) {
      this.setState({ defaultParams: setDefaultFilterParams(this.props.flatList) })
    }
  }

  handleShowAdditionalParams(): void {
    this.setState({ showAdditionalParams: !this.state.showAdditionalParams })
  }

  renderAdditionalParams(): React.ReactNode {
    if (!this.state.showAdditionalParams) {
      return null
    }

    return (
      <>
        <div className="filter__group">
          <p className="filter__text">
            Кол-во комнат с {this.props.filterParams.rooms.min} по {this.props.filterParams.rooms.max}
          </p>
          <Range
            className="filter__range"
            min={this.state.defaultParams.rooms.min}
            max={this.state.defaultParams.rooms.max}
            defaultValue={[this.state.defaultParams.rooms.min, this.state.defaultParams.rooms.max]}
            draggableTrack
            step={1}
            onChange={(event) => this.props.onSetRooms(event)}
          />
        </div>
        <div className="filter__group">
          <p className="filter__text">
            Площадь с {this.props.filterParams.areaTotal.min} м² по {this.props.filterParams.areaTotal.max} м²
          </p>
          <Range
            className="filter__range"
            min={parseInt(this.state.defaultParams.areaTotal.min, 10)}
            max={parseInt(this.state.defaultParams.areaTotal.max, 10)}
            defaultValue={[parseInt(this.state.defaultParams.areaTotal.min, 10), parseInt(this.state.defaultParams.areaTotal.max, 10)]}
            draggableTrack
            step={1}
            onChange={(event) => this.props.onSetAreaTotal(event)}
          />
        </div>
      </>
    )
  }

  render(): React.ReactNode {
    if (!this.state.defaultParams) {
      return null
    }

    return (
      <div className="filter">
        <div className="filter__header">
          <h4 className="filter__title">Фильтр</h4>
          <button className="filter__btn" onClick={() => this.handleShowAdditionalParams()}>
            {this.state.showAdditionalParams ? 'Скрыть' : 'Показать'} доп. поля
          </button>
        </div>
        <div className="filter__group">
          <p className="filter__text">Этаж с {this.props.filterParams.floor.min} по {this.props.filterParams.floor.max}</p>
          <Range
            className="filter__range"
            min={this.state.defaultParams.floor.min}
            max={this.state.defaultParams.floor.max}
            defaultValue={[this.state.defaultParams.floor.min, this.state.defaultParams.floor.max]}
            draggableTrack
            step={1}
            onChange={(event) => this.props.onSetFloor(event)}
          />
        </div>
        <div className="filter__group">
          <p className="filter__text">Цена с {this.props.filterParams.price.min} ₽ по {this.props.filterParams.price.max} ₽</p>
          <Range
            className="filter__range"
            min={this.state.defaultParams.price.min}
            max={this.state.defaultParams.price.max}
            defaultValue={[this.state.defaultParams.price.min, this.state.defaultParams.price.max]}
            draggableTrack
            step={10000}
            onChange={(event) => this.props.onSetPrice(event)}
          />
        </div>
        {this.renderAdditionalParams()}
      </div>
    )
  }
}
