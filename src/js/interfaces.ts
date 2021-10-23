import { Action, Dispatch } from 'redux'
import { FlatListStorage } from './components/flatList'

export interface Storage {
  flatList: FlatListStorage
}

export interface IAction {
  type: string
  payload?: unknown
}

export interface IActionAsync {
  (dispatch: Dispatch<IAction>): void
}

export interface DispatchWithFn extends Dispatch<IAction> {
  <A extends Action>(action: IAction | IActionAsync): A
}

export interface IProps {
  dispatch?: DispatchWithFn
}
