import { ShoppingCart } from 'phosphor-react'

import { ContainerCoffeInfo, CoffeInfoShooping, CoffeInfo } from './styles'

import { NavLink } from 'react-router-dom'
import { QuantityInput } from '../../../../components/QuatityInput'
import { useRef, useState } from 'react'
import { Coffebuy } from '../../../../reducers/coffeBuy/reducer'

interface CoffeProps {
  id: number
  title: string
  description: string
  imageSrc: string
  typeCoffe: string[]
  price: number
}

export function Coffe({
  id,
  title,
  description,
  imageSrc,
  price,
  typeCoffe,
}: CoffeProps) {
  const [coffeCart, setCoffe] = useState<Coffebuy[]>([])
  const [quantityCoffe, setQuantityCoffe] = useState<number>(1)

  function lessQuatityCoffe() {
    if (quantityCoffe > 1) {
      setQuantityCoffe((state) => state - 1)
    }
  }

  function moreQuatityCoffe() {
    if (quantityCoffe < 9) {
      setQuantityCoffe((state) => state + 1)
    }
  }

  function teste() {
    console.log(`id ${id} total ${quantityCoffe}`)
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
            {price.toLocaleString('pt-br', {
              minimumFractionDigits: 2,
            })}
          </strong>
        </span>
        <QuantityInput
          lessQuatityCoffe={lessQuatityCoffe}
          moreQuatityCoffe={moreQuatityCoffe}
          quantityCoffe={quantityCoffe}
        />
        {/* <NavLink to="/Checkout" title="Checkout"> */}
        <button onClick={teste}>
          <ShoppingCart size={20} weight="fill" />
        </button>
        {/* </NavLink> */}
      </CoffeInfoShooping>
    </ContainerCoffeInfo>
  )
}
