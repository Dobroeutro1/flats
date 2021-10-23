import { FlatListStorage } from '../components/flatList'
import { IAction } from '../interfaces'
import { FlatListResponse } from '../constants'

const initialState: FlatListStorage = {
  flatList: FlatListResponse
}

export function reducer(state = initialState, action: IAction): FlatListStorage {
  switch (action.type) {
    default:
      return { ...state }
  }
}
