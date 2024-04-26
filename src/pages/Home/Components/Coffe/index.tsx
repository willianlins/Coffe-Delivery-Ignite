/* eslint-disable react-hooks/exhaustive-deps */
import { Check, ShoppingCart } from 'phosphor-react'

import { ContainerCoffeInfo, CoffeInfoShooping, CoffeInfo } from './styles'

// import { NavLink } from 'react-router-dom'
import { QuantityInput } from '../../../../components/QuatityInput'
import { useContext, useState } from 'react'
import { CoffeContext } from '../../../../contexts/CoffeContext'

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
  const { addAmountCoffe } = useContext(CoffeContext)
  const [isCheck, setIsCheck] = useState(false)
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

  function handleAddCoffeCart() {
    addAmountCoffe(id, quantityCoffe, title, imageSrc, price)

    setQuantityCoffe(1)
    setIsCheck(true)
    setTimeout(() => {
      setIsCheck(false)
    }, 1000)
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
      <CoffeInfoShooping $isactive={isCheck}>
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
        <button onClick={handleAddCoffeCart}>
          {!isCheck && <ShoppingCart size={20} weight="fill" />}
          {isCheck && <Check size={20} weight="fill" />}
        </button>
        {/* </NavLink> */}
      </CoffeInfoShooping>
    </ContainerCoffeInfo>
  )
}
