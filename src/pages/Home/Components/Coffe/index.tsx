import { Minus, Plus, ShoppingCart } from 'phosphor-react'

import {
  ContainerCoffeInfo,
  CoffeInfoShooping,
  CoffeInfo,
  CoffeInfoAmount,
} from './styles'

// import CoffeImg from '../../../../assets/coffes/americano.svg'
import { useState } from 'react'

interface CoffeProps {
  title: string
  description: string
  imageSrc: string
  typeCoffe: string[]
  price: number
}

export function Coffe({
  title,
  description,
  imageSrc,
  price,
  typeCoffe,
}: CoffeProps) {
  const [quantityCoffe, setQuantityCoffe] = useState<number>(1)

  function handleLessQuatityCoffe() {
    if (quantityCoffe > 1) {
      setQuantityCoffe((state) => state - 1)
    }
  }

  function handleMoreQuatityCoffe() {
    if (quantityCoffe < 9) {
      setQuantityCoffe((state) => state + 1)
    }
  }

  return (
    <ContainerCoffeInfo>
      <CoffeInfo>
        <img src={imageSrc} alt="" />
        <div>
          {typeCoffe?.map((type) => {
            return <span key={type}>{<span>{type}</span>}</span>
          })}
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
      </CoffeInfo>
      <CoffeInfoShooping>
        <span>
          R$
          <strong>
            {(price * quantityCoffe).toLocaleString('pt-br', {
              minimumFractionDigits: 2,
            })}
          </strong>
        </span>
        <CoffeInfoAmount>
          <Minus size={16} weight="fill" onClick={handleLessQuatityCoffe} />
          <input
            type="number"
            step={1}
            max={9}
            min={1}
            value={quantityCoffe}
            onChange={() => quantityCoffe}
          />
          <Plus size={16} weight="fill" onClick={handleMoreQuatityCoffe} />
        </CoffeInfoAmount>
        <button>
          <ShoppingCart size={20} weight="fill" />
        </button>
      </CoffeInfoShooping>
    </ContainerCoffeInfo>
  )
}
