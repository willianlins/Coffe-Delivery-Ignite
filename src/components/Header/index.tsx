import { MapPin, ShoppingCart } from 'phosphor-react'
import LogoCoffe from '../../assets/Logo.svg'
import { NavLink } from 'react-router-dom'
import { HeaderButtonCart, HeaderButtonCity, HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={LogoCoffe} alt="" />
      <nav>
        <HeaderButtonCity>
          <MapPin size={22} weight="fill" />
          Jundiaí, SP
        </HeaderButtonCity>
        <NavLink to="/Checkout" title="Checkout">
          <HeaderButtonCart>
            <ShoppingCart size={22} weight="fill" />
            {true && <span>2</span>}
          </HeaderButtonCart>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
