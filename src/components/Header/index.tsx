import { MapPin, ShoppingCart } from 'phosphor-react'
import LogoCoffe from '../../assets/Logo.svg'
import { NavLink } from 'react-router-dom'
import { HeaderButtonCart, HeaderButtonCity, HeaderContainer } from './styles'
import { useContext } from 'react'
import { CoffeContext } from '../../contexts/CoffeContext'

export function Header() {
  const { coffes } = useContext(CoffeContext)
  const totalCart = coffes.length

  return (
    <HeaderContainer>
      <NavLink to={'/'}>
        <img src={LogoCoffe} alt="" />
      </NavLink>
      <nav>
        <NavLink to="/" title="Checkout">
          <HeaderButtonCity>
            <MapPin size={22} weight="fill" />
            Jundiaí, SP
          </HeaderButtonCity>
        </NavLink>
        <NavLink to="/Checkout" title="Checkout">
          <HeaderButtonCart>
            <ShoppingCart size={22} weight="fill" />
            {totalCart > 0 && <span>{totalCart}</span>}
          </HeaderButtonCart>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
