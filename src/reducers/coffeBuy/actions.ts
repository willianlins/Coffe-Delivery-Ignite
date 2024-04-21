import { Coffebuy } from './reducer'

export enum ActionTypes {
  ADD_NEW_COFFE = 'ADD_NEW_COFFE',
  ADD_QUANTITY_COFFE = 'ADD_QUANTITY_COFFE',
  REMOVE_COFFE = 'REMOVE_COFFE',
}

export function addNewCoffe(newCoffe: Coffebuy) {
  return {
    type: ActionTypes.ADD_NEW_COFFE,
    payload: {
      newCoffe,
    },
  }
}

export function addQuatityCoffe(idCoffe: number) {
  return {
    type: ActionTypes.ADD_QUANTITY_COFFE,
    payload: {
      idCoffe,
    },
  }
}

export function removeCoffe(idCoffe: number) {
  return {
    type: ActionTypes.REMOVE_COFFE,
    payload: {
      idCoffe,
    },
  }
}
