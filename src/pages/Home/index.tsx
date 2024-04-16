import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import coffeHuge from '../../assets/coffe_huge.svg'
import {
  ContainerInfoBanner,
  ContentInfoBanner,
  InfoBannerText,
} from './styles'

export function Home() {
  return (
    <ContainerInfoBanner>
      <ContentInfoBanner>
        <InfoBannerText>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <ul>
            <li>
              <span>
                <ShoppingCart size={16} weight="fill" />
              </span>
              Compra simples e segura
            </li>
            <li>
              <span>
                <Package size={16} weight="fill" />
              </span>
              Embalagem mantém o café intacto
            </li>
            <li>
              <span>
                <Timer size={16} weight="fill" />
              </span>
              Entrega rápida e rastreada
            </li>
            <li>
              <span>
                <Coffee size={16} weight="fill" />
              </span>
              O café chega fresquinho até você
            </li>
          </ul>
        </InfoBannerText>
        <img src={coffeHuge} alt="" />
      </ContentInfoBanner>
    </ContainerInfoBanner>
  )
}
