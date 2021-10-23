import { connect } from 'react-redux'
import { Storage } from './interfaces'
import { FlatList, FlatListProps } from './components/flatList'

export const FlatListContainer = connect(flats)(FlatList)

function flats(state: Storage): FlatListProps {
  return { ...state.flatList }
}
