import { ReactNode, createContext, useReducer } from 'react'
import { Coffebuy, coffeBuyReducer } from '../reducers/coffeBuy/reducer'

interface CoffeContextType {
  coffes: Coffebuy[]
}

export const CoffeContext = createContext({} as CoffeContextType)

interface CoffeContextProviderProps {
  children: ReactNode
}

export function CoffeContextProvider({ children }: CoffeContextProviderProps) {
  const [CoffeState, dispatch] = useReducer(
    coffeBuyReducer,
    { coffes: [] },
    (initialState: CoffeContextType) => {
      return initialState
    },
  )

  const { coffes } = CoffeState

  return (
    <CoffeContext.Provider value={coffes}>{children}</CoffeContext.Provider>
  )
}
