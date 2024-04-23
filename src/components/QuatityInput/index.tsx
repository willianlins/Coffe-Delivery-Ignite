import { Minus, Plus } from 'phosphor-react'
import { CoffeInfoAmount } from './styles'

interface QuantityInputProps {
  sizetype?: string
  quantityCoffe: number
  lessQuatityCoffe: () => void
  moreQuatityCoffe: () => void
}

export function QuantityInput({
  sizetype = 'huge',
  quantityCoffe,
  lessQuatityCoffe,
  moreQuatityCoffe,
}: QuantityInputProps) {
  return (
    <CoffeInfoAmount sizetype={sizetype}>
      <Minus size={16} weight="fill" onClick={lessQuatityCoffe} />
      <input
        type="number"
        step={1}
        max={9}
        min={1}
        value={quantityCoffe}
        onChange={() => quantityCoffe}
      />
      <Plus size={16} weight="fill" onClick={moreQuatityCoffe} />
    </CoffeInfoAmount>
  )
}
