import { produce } from 'immer'
import { ActionTypes } from './actions'

export interface Coffebuy {
  id: number
  quantity: number
  title: string
  imgSRC: string
  price: number
}

interface CoffeBuyState {
  coffes: Coffebuy[]
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function coffeBuyReducer(state: CoffeBuyState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_COFFE: {
      return {
        coffes: [action.payload.newCoffe],
      }
    }
    case ActionTypes.ADD_QUANTITY_COFFE: {
      const cofferArray = [...state.coffes]

      const coffeMod = cofferArray.findIndex((coffe) => {
        return coffe.id === action.payload.idCoffe
      })

      if (coffeMod < 0) {
        cofferArray.push({
          id: action.payload.idCoffe,
          quantity: action.payload.quantity,
          title: action.payload.title,
          imgSRC: action.payload.imgSRC,
          price: action.payload.price,
        })
        return {
          coffes: cofferArray,
        }
      }

      return produce(state, (draft) => {
        draft.coffes[coffeMod].quantity += action.payload.quantity
      })
    }
    case ActionTypes.UPDATE_QUANTITY_COFFE: {
      const coffeMod = state.coffes.findIndex((coffe) => {
        return coffe.id === action.payload.idCoffe
      })

      return produce(state, (draft) => {
        draft.coffes[coffeMod].quantity = action.payload.quantity
      })
    }
    case ActionTypes.REMOVE_COFFE: {
      const cofferArray = [...state.coffes]

      return {
        coffes: cofferArray.filter(
          (coffe) => coffe.id !== action.payload.idCoffe,
        ),
      }
    }
    case ActionTypes.REMOVE_ALL_COFFE: {
      return {
        coffes: [],
      }
    }
    default:
      return state
  }
}
