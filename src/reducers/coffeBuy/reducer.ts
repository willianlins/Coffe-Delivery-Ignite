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

      const coffeMod = cofferArray.find(
        (coffe) => coffe.id === action.payload.idCoffe,
      )

      if (coffeMod) {
        coffeMod.quantity += action.payload.quantity
        // coffeMod.title = action.payload.title
        // coffeMod.imgSRC = action.payload.imgSRC
        // coffeMod.price = action.payload.price
      } else {
        cofferArray.push({
          id: action.payload.idCoffe,
          quantity: action.payload.quantity,
          title: action.payload.title,
          imgSRC: action.payload.imgSRC,
          price: action.payload.price,
        })
      }

      return {
        coffes: cofferArray,
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
