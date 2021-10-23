import React from 'react'
import { FlatListProps, FlatListState } from './interfaces'
import { FlatCard } from './components/FlatCard'
import { Filter } from './components/Filter'
import { filter, pagination, setDefaultFilterParams, sort } from './utils'
import { SortedType, SortedValue } from './constants'

export class FlatList extends React.PureComponent<FlatListProps, FlatListState> {
  constructor(props: FlatListProps) {
    super(props)
    this.state = {
      flatList: [],
      showFlatList: [],
      filterParams: null,
      sortType: SortedType.up,
      sortValue: SortedValue.price,
      countShowFlats: 8,
      countEndShowFlats: 8,
      countStartShowFlats: 0
    }
  }

  componentDidMount(): void {
    if (this.props.flatList) {
      this.setState({ filterParams: setDefaultFilterParams(this.props.flatList) }, this.onChangeFlatList)
    }
  }

  componentDidUpdate(prevProps:Readonly<FlatListProps>, prevState:Readonly<FlatListState>): void {
    if (prevState.filterParams !== this.state.filterParams && prevState.filterParams) {
      this.onChangeFlatList()
    }
    if (prevState.sortType !== this.state.sortType || prevState.sortValue !== this.state.sortValue) {
      this.onChangeFlatList()
    }
    if (prevState.countStartShowFlats !== this.state.countStartShowFlats) {
      this.onChangeShowFlatList()
    }
  }

  onChangeFlatList(): void {
    this.setState({
      flatList: sort(filter(this.props.flatList, this.state.filterParams), this.state.sortValue, this.state.sortType),
      countEndShowFlats: 8,
      countStartShowFlats: 0
    }, this.onChangeShowFlatList)
  }

  onChangeShowFlatList(): void {
    this.setState({ showFlatList: pagination(this.state.flatList, this.state.countStartShowFlats, this.state.countEndShowFlats) })
  }

  onShowPrevFlats = (): void => {
    window.scrollTo(0, 0)
    this.setState({
      countStartShowFlats: this.state.countStartShowFlats - this.state.countShowFlats,
      countEndShowFlats: this.state.countEndShowFlats - this.state.countShowFlats
    })
  }

  onShowNextFlats = (): void => {
    window.scrollTo(0, 0)
    this.setState({
      countStartShowFlats: this.state.countStartShowFlats + this.state.countShowFlats,
      countEndShowFlats: this.state.countEndShowFlats + this.state.countShowFlats
    })
  }

  onSetFloor = (event: number[]): void => {
    this.setState({ filterParams: { ...this.state.filterParams, floor: { min: event[0], max: event[1] } } })
  }

  onSetPrice = (event: number[]): void => {
    this.setState({ filterParams: { ...this.state.filterParams, price: { min: event[0], max: event[1] } } })
  }

  onSetRooms = (event: number[]): void => {
    this.setState({ filterParams: { ...this.state.filterParams, rooms: { min: event[0], max: event[1] } } })
  }

  onSetAreaTotal = (event: number[]): void => {
    this.setState({ filterParams: { ...this.state.filterParams, areaTotal: { min: event[0].toString(), max: event[1].toString() } } })
  }

  onSetSortedType = (event: React.SyntheticEvent<HTMLSelectElement>): void => {
    this.setState({ sortType: event.currentTarget.value as SortedType })
  }

  onSetSortedValue = (event: React.SyntheticEvent<HTMLSelectElement>): void => {
    this.setState({ sortValue: event.currentTarget.value as SortedValue })
  }

  renderSort(): React.ReactNode {
    return (
      <div className="sort">
        <div className="sort__group">
          <p className="sort__text">Сортировать:</p>
          <select className="sort__select" onChange={this.onSetSortedValue}>
            <option selected={true} value={SortedValue.price}>Цена</option>
            <option value={SortedValue.areaTotal}>Площадь</option>
            <option value={SortedValue.floor}>Этаж</option>
            <option value={SortedValue.rooms}>Кол-во комнат</option>
          </select>
        </div>
        <div className="sort__group">
          <p className="sort__text">по:</p>
          <select className="sort__select" onChange={this.onSetSortedType}>
            <option selected={true} value={SortedType.up}>Возрастанию</option>
            <option value={SortedType.down}>Убыванию</option>
          </select>
        </div>
      </div>

    )
  }

  renderFilter(): React.ReactNode {
    return <Filter
      flatList={this.props.flatList}
      filterParams={this.state.filterParams}
      onSetFloor={this.onSetFloor}
      onSetPrice={this.onSetPrice}
      onSetRooms={this.onSetRooms}
      onSetAreaTotal={this.onSetAreaTotal}
    />
  }

  renderFlatList(): React.ReactNode {
    if (this.state.showFlatList.length < 1) {
      return <h4 className="flats__title">Ничего не найдено :(</h4>
    }

    return (
      <div className="flat-list">
        {this.state.showFlatList.map((flat) => <FlatCard key={flat.id} {...flat} />)}
      </div>
    )
  }

  renderPrevNextButtons(): React.ReactNode {
    if (this.state.showFlatList.length < 1 || this.state.showFlatList.length === this.state.flatList.length) {
      return null
    }

    return (
      <div className="flats__btn-group">
        <button
          className="flats__btn"
          onClick={this.onShowPrevFlats}
          disabled={this.state.countStartShowFlats === 0}
        >
          Назад
        </button>
        <p className="flats__count">
          {this.state.countEndShowFlats / this.state.countShowFlats} из {Math.ceil(this.state.flatList.length / this.state.countShowFlats)}
        </p>
        <button
          className="flats__btn"
          onClick={this.onShowNextFlats}
          disabled={
            this.state.countEndShowFlats === this.state.flatList.length ||
            this.state.showFlatList.length < this.state.countShowFlats
          }
        >
          Вперед
        </button>
      </div>
    )
  }

  render(): React.ReactNode {
    if (!this.props.flatList) {
      return null
    }

    return (
      <div className="flats">
        {this.renderFilter()}
        {this.renderSort()}
        {this.renderFlatList()}
        {this.renderPrevNextButtons()}
      </div>
    )
  }
}
