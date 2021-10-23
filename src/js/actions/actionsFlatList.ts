import { IAction, IActionAsync } from '../interfaces'

export class Actions {
  readonly GET_CARD = 'GET_CARD'
  readonly GET_CARD_OK = 'GET_CARD_OK'
  readonly GET_CARD_ERROR = 'GET_CARD_ERROR'

  readonly CHANGE_FILTER_STATE = 'CHANGE_FILTER_STATE'

  changeFilterState = (filter: boolean): IAction => ({ type: this.CHANGE_FILTER_STATE, payload: filter })

  getCard = (id: number): IActionAsync => async (dispatch) => {}
}
