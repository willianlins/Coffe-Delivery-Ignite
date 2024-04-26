import { Trash } from 'phosphor-react'
import { QuantityInput } from '../../../../components/QuatityInput'
import { CoffeListDetails, ContainerCoffeList } from './styles'
import { Coffebuy } from '../../../../reducers/coffeBuy/reducer'
import { useCallback, useContext, useState } from 'react'
import { CoffeContext } from '../../../../contexts/CoffeContext'

interface CoffeListProps extends Omit<Coffebuy, 'price'> {
  price: string
}

export function CoffeList({
  id,
  title,
  imgSRC,
  price,
  quantity,
}: CoffeListProps) {
  const [amountCoffe, setAmountCoffe] = useState(quantity)
  const { updateQuatityCoffes } = useContext(CoffeContext)
  function lessQuatityCoffe() {
    console.log(quantity)
    if (amountCoffe > 1) {
      setAmountCoffe((state) => state - 1)
    }
  }

  function moreQuatityCoffe() {
    if (amountCoffe < 9) {
      setAmountCoffe((state) => state + 1)
    }
  }

  useCallback(() => {
    updateQuatityCoffes(id, amountCoffe)
  }, [amountCoffe, id, updateQuatityCoffes])

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
