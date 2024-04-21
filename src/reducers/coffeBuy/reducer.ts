import { ActionTypes } from './actions'

export interface Coffebuy {
  id: number
  quantity: number
}

interface CoffeBuyState {
  coffes: Coffebuy[]
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function coffeBuyReducer(state: CoffeBuyState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_QUANTITY_COFFE: {
      return {
        ...state,
        coffes: [...state.coffes, action.payload.newCoffe],
      }
    }
    case ActionTypes.ADD_NEW_COFFE: {
      return {
        ...state,
        coffes: state.coffes.find((coffe) => {
          if (coffe.id === action.payload.idCoffe) {
            return [coffe.id, coffe.quantity++]
          }
          return [coffe]
        }),
      }
    }
    case ActionTypes.REMOVE_COFFE: {
      return {
        ...state,
        coffes: state.coffes.map((coffe) => {
          if (coffe.id === action.payload.idCoffe) {
            if (coffe.quantity > 1) {
              return [coffe.id, coffe.quantity--]
            }
            return false
          } else {
            return coffe
          }
        }),
      }
    }
  }
}
