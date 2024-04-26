import { ReactNode, createContext, useReducer } from 'react'
import { Coffebuy, coffeBuyReducer } from '../reducers/coffeBuy/reducer'
import { addNewCoffe, addQuatityCoffe } from '../reducers/coffeBuy/actions'

interface CoffeContextType {
  coffes: Coffebuy[]
  addCoffeCart: (coffe: Coffebuy) => void
  addAmountCoffe: (
    idCoffe: number,
    quantity: number,
    title: string,
    imgSRC: string,
    price: number,
  ) => void
  removeCoffe: (idCoffe: number) => void
}

export const CoffeContext = createContext({} as CoffeContextType)

interface CoffeContextProviderProps {
  children: ReactNode
}

export function CoffeContextProvider({ children }: CoffeContextProviderProps) {
  const [coffe, dispatch] = useReducer(
    coffeBuyReducer,
    { coffes: [] },
    (initialTasks) => {
      return initialTasks
    },
  )
  const { coffes } = coffe

  function addCoffeCart(coffe: Coffebuy) {
    const newCoffe: Coffebuy = {
      id: coffe.id,
      quantity: coffe.quantity,
      title: coffe.title,
      imgSRC: coffe.imgSRC,
      price: coffe.price,
    }
    dispatch(addNewCoffe(newCoffe))
  }

  function addAmountCoffe(
    idCoffe: number,
    quantity: number,
    title: string,
    imgSRC: string,
    price: number,
  ) {
    dispatch(addQuatityCoffe(idCoffe, quantity, title, imgSRC, price))
  }

  function removeCoffe(idCoffe: number) {
    dispatch(removeCoffe(idCoffe))
  }

  return (
    <CoffeContext.Provider
      value={{ coffes, addCoffeCart, addAmountCoffe, removeCoffe }}
    >
      {children}
    </CoffeContext.Provider>
  )
}
