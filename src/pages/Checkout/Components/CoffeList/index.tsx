import { Trash } from 'phosphor-react'
import { QuantityInput } from '../../../../components/QuatityInput'
import { CoffeListDetails, ContainerCoffeList } from './styles'
import { Coffebuy } from '../../../../reducers/coffeBuy/reducer'
import { useState } from 'react'

interface CoffeListProps extends Omit<Coffebuy, 'id' | 'price'> {
  price: string
}

export function CoffeList({ title, imgSRC, price, quantity }: CoffeListProps) {
  const [amountCoffe, setAmountCoffe] = useState(quantity)

  function lessQuatityCoffe() {
    if (amountCoffe > 1) {
      setAmountCoffe((state) => state - 1)
    }
  }

  function moreQuatityCoffe() {
    if (amountCoffe < 9) {
      setAmountCoffe((state) => state + 1)
    }
  }

  return (
    <ContainerCoffeList>
      <img src={imgSRC} alt="" />
      <CoffeListDetails>
        <p>{title}</p>
        <div>
          <QuantityInput
            lessQuatityCoffe={lessQuatityCoffe}
            quantityCoffe={amountCoffe}
            moreQuatityCoffe={moreQuatityCoffe}
            sizetype={`small`}
          />
          <button>
            <Trash size={16} />
            REMOVER
          </button>
        </div>
      </CoffeListDetails>
      <span>
        <strong>R$ {price}</strong>
      </span>
    </ContainerCoffeList>
  )
}
