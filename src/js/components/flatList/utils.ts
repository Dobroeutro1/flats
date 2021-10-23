import { FilterParams, Flat } from './interfaces'
import { SortedType, SortedValue } from './constants'

export function setDefaultFilterParams(flatList: Flat[]): FilterParams {
  const params: FilterParams = {
    floor: { min: flatList[0].floor, max: flatList[0].floor },
    price: { min: flatList[0].price, max: flatList[0].price },
    rooms: { min: flatList[0].rooms, max: flatList[0].rooms },
    areaTotal: { min: flatList[0].areaTotal, max: flatList[0].areaTotal }
  }

  flatList.forEach((flat) => {
    if (flat.floor < params.floor.min) {
      params.floor.min = flat.floor
    }
    if (flat.floor > params.floor.max) {
      params.floor.max = flat.floor
    }
    if (flat.price < params.price.min) {
      params.price.min = flat.price
    }
    if (flat.price > params.price.max) {
      params.price.max = flat.price
    }
    if (flat.rooms < params.rooms.min) {
      params.rooms.min = flat.rooms
    }
    if (flat.rooms > params.rooms.max) {
      params.rooms.max = flat.rooms
    }
    if (parseInt(flat.areaTotal, 10) < parseInt(params.areaTotal.min, 10)) {
      params.areaTotal.min = flat.areaTotal
    }
    if (parseInt(flat.areaTotal, 10) > parseInt(params.areaTotal.max, 10)) {
      params.areaTotal.max = flat.areaTotal
    }
  })

  return params
}

export function filter(flatList: Flat[], params: FilterParams): Flat[] {
  return flatList.filter((flat) => {
    if (
      flat.floor >= params.floor.min &&
      flat.floor <= params.floor.max &&
      flat.price >= params.price.min &&
      flat.price <= params.price.max &&
      flat.rooms >= params.rooms.min &&
      flat.rooms <= params.rooms.max &&
      parseInt(flat.areaTotal, 10) >= parseInt(params.areaTotal.min, 10) &&
      parseInt(flat.areaTotal, 10) <= parseInt(params.areaTotal.max, 10)
    ) {
      return flat
    }

    return null
  })
}

export function sort(flatList: Flat[], value: SortedValue, type: SortedType): Flat[] {
  return flatList.sort((first, second) => {
    if (type === SortedType.up) {
      return parseInt(first[value] as string, 10) - parseInt(second[value] as string, 10)
    }

    return parseInt(second[value] as string, 10) - parseInt(first[value] as string, 10)
  })
}

export function pagination(flatList: Flat[], start: number, end: number): Flat[] {
  return flatList.slice(start, end)
}
