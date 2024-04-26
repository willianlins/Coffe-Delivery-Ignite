import { Coffebuy } from './reducer'

export enum ActionTypes {
  ADD_NEW_COFFE = 'ADD_NEW_COFFE',
  ADD_QUANTITY_COFFE = 'ADD_QUANTITY_COFFE',
  REMOVE_COFFE = 'REMOVE_COFFE',
  UPDATE_QUANTITY_COFFE = 'UPDATE_QUANTITY_COFFE',
}

export function addNewCoffe(newCoffe: Coffebuy) {
  return {
    type: ActionTypes.ADD_NEW_COFFE,
    payload: {
      newCoffe,
    },
  }
}

export function addQuatityCoffe(
  idCoffe: number,
  quantity: number,
  title: string,
  imgSRC: string,
  price: number,
) {
  return {
    type: ActionTypes.ADD_QUANTITY_COFFE,
    payload: {
      idCoffe,
      quantity,
      title,
      imgSRC,
      price,
    },
  }
}

export function updateQuatityCoffe(idCoffe: number, quantity: number) {
  return {
    type: ActionTypes.UPDATE_QUANTITY_COFFE,
    payload: {
      idCoffe,
      quantity,
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
