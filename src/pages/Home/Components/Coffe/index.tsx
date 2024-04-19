import { ShoppingCart } from 'phosphor-react'

import { ContainerCoffeInfo, CoffeInfoShooping, CoffeInfo } from './styles'

// import CoffeImg from '../../../../assets/coffes/americano.svg'

import { NavLink } from 'react-router-dom'
import { QuantityInput } from '../../../../components/QuatityInput'

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
        <QuantityInput />
        <NavLink to="/Checkout" title="Checkout">
          <button>
            <ShoppingCart size={20} weight="fill" />
          </button>
        </NavLink>
      </CoffeInfoShooping>
    </ContainerCoffeInfo>
  )
}
