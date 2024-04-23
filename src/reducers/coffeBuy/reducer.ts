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
    case ActionTypes.ADD_NEW_COFFE: {
      return {
        coffes: [...state.coffes, action.payload.newCoffe],
      }
    }
    case ActionTypes.ADD_QUANTITY_COFFE: {
      const coffeMod = state.coffes.find((coffe) => {
        if (coffe.id === action.payload.idCoffe) {
          return { ...coffe, quantity: action.payload.quantity }
        }
        return [coffe]
      })
      return {
        coffes: [coffeMod],
      }
    }
    case ActionTypes.REMOVE_COFFE: {
      return {
        ...state,
        coffes: state.coffes
          .map((coffe) => {
            if (coffe.id === action.payload.idCoffe) {
              if (coffe.quantity > 1) {
                return { ...coffe, quantity: coffe.quantity - 1 }
              }
              return null
            } else {
              return coffe
            }
          })
          .filter(Boolean),
      }
    }
    default:
      return state
  }
}
