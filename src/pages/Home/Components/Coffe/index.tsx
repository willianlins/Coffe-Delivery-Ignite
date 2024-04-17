import { ShoppingCart } from 'phosphor-react'

import { ContainerCoffeInfo, CoffeInfoShooping, CoffeInfo } from './styles'

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
        <div>
          <input type="number" />
        </div>
        <button>
          <ShoppingCart />
        </button>
      </CoffeInfoShooping>
    </ContainerCoffeInfo>
  )
}
