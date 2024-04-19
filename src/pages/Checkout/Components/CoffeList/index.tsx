import { Trash } from 'phosphor-react'
import { QuantityInput } from '../../../../components/QuatityInput'
import { CoffeListDetails, ContainerCoffeList } from './styles'

import imgCoffe from '../../../../assets/coffes/americano.svg'
export function CoffeList() {
  return (
    <ContainerCoffeList>
      <img src={imgCoffe} alt="" />
      <CoffeListDetails>
        <p>Expresso Tradicional</p>
        <div>
          <QuantityInput sizetype={`small`} />
          <button>
            <Trash size={16} />
            REMOVER
          </button>
        </div>
      </CoffeListDetails>
      <span>
        <strong>R$ 9,90</strong>
      </span>
    </ContainerCoffeList>
  )
}
