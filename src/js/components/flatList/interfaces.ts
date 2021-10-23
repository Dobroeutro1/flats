import { IProps } from '../../interfaces'
import { SortedType, SortedValue } from './constants'

export interface FlatListStorage {
  flatList: Flat[]
}

export interface FlatListProps extends IProps {
  flatList: Flat[]
}

export interface FlatListState {
  flatList: Flat[]
  showFlatList: Flat[]
  filterParams: FilterParams
  sortType: SortedType
  sortValue: SortedValue
  countShowFlats: number
  countEndShowFlats: number
  countStartShowFlats: number
}

export interface FlatCardProps {
  id: number
  floor: number
  posOnFloor: number
  price: number
  rooms: number
  areaTotal: string
  areaKitchen: string
  areaLive: string
  layoutImage: string
}

export interface FlatCardState {
  showModal: boolean
}

export interface ModalProps {
  show: boolean
  id: number
  floor: number
  posOnFloor: number
  price: number
  rooms: number
  areaTotal: string
  areaKitchen: string
  areaLive: string
  layoutImage: string
  onClose: () => void
}

export interface FilterProps {
  flatList: Flat[]
  filterParams: FilterParams
  onSetFloor: (event: number[]) => void
  onSetPrice: (event: number[]) => void
  onSetRooms: (event: number[]) => void
  onSetAreaTotal: (event: number[]) => void
}

export interface FilterState {
  defaultParams: FilterParams
  showAdditionalParams: boolean
}

export interface Flat {
  id: number
  floor: number
  posOnFloor: number
  price: number
  rooms: number
  areaTotal: string
  areaKitchen: string
  areaLive: string
  layoutImage: string
}

export interface FilterParams {
  floor: { min: number; max: number };
  price: { min: number; max: number };
  rooms: { min: number; max: number };
  areaTotal: { min: string; max: string };
}
