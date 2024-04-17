import { Minus, Plus, ShoppingCart } from 'phosphor-react'

import {
  ContainerCoffeInfo,
  CoffeInfoShooping,
  CoffeInfo,
  CoffeInfoAmount,
} from './styles'

import CoffeImg from '../../../../assets/coffes/americano.svg'

export function Coffe() {
  return (
    <ContainerCoffeInfo>
      <CoffeInfo>
        <img src={CoffeImg} alt="" />
        <div>
          <span>Tradicional</span>
          <span>Tradicional</span>
        </div>
        <h3>Expresso Tradicional</h3>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </CoffeInfo>
      <CoffeInfoShooping>
        <span>
          R$<strong>9,90</strong>
        </span>
        <CoffeInfoAmount>
          <Minus size={14} weight="fill" />
          <input type="number" value={1} />
          <Plus size={14} weight="fill" />
        </CoffeInfoAmount>
        <button>
          <ShoppingCart />
        </button>
      </CoffeInfoShooping>
    </ContainerCoffeInfo>
  )
}
