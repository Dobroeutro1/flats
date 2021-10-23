import { Action, Middleware } from 'redux'

export const actionFn: Middleware =
  ({ dispatch, getState }) => (next) => (action: Action): Action => {
    if (action instanceof Function) {
      return action(dispatch, getState)
    }

    return next(action)
  }
