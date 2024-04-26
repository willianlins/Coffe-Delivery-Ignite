import { Trash } from 'phosphor-react'
import { QuantityInput } from '../../../../components/QuatityInput'
import { CoffeListDetails, ContainerCoffeList } from './styles'
import { Coffebuy } from '../../../../reducers/coffeBuy/reducer'

interface CoffeListProps extends Omit<Coffebuy, 'id' | 'price'> {
  price: string
  lessQuatityCoffe: () => void
  moreQuatityCoffe: () => void
}

export function CoffeList({
  title,
  imgSRC,
  price,
  quantity,
  lessQuatityCoffe,
  moreQuatityCoffe,
}: CoffeListProps) {
  return (
    <ContainerCoffeList>
      <img src={imgSRC} alt="" />
      <CoffeListDetails>
        <p>{title}</p>
        <div>
          <QuantityInput
            lessQuatityCoffe={lessQuatityCoffe}
            quantityCoffe={quantity}
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
