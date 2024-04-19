import { Minus, Plus } from 'phosphor-react'
import { CoffeInfoAmount } from './styles'
import { useState } from 'react'

interface QuantityInputProps {
  sizetype?: string
}

export function QuantityInput({ sizetype = 'huge' }: QuantityInputProps) {
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
    <CoffeInfoAmount sizetype={sizetype}>
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
  )
}
