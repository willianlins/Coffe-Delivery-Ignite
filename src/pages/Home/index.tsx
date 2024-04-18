import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import coffeHuge from '../../assets/coffe_huge.svg'
import {
  ContainerInfoBanner,
  ContainerMain,
  ContentInfoBanner,
  ContentListCoffe,
  InfoBannerText,
  InfoQualityList,
} from './styles'
import { Coffe } from './Components/Coffe'
import { mockCoffes } from './dataMock'

export function Home() {
  return (
    <ContainerMain>
      <ContainerInfoBanner>
        <ContentInfoBanner>
          <InfoBannerText>
            <div>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <p>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </p>
            </div>
            <ul>
              <li>
                <InfoQualityList $statusColor="orange">
                  <ShoppingCart size={16} weight="fill" />
                </InfoQualityList>
                Compra simples e segura
              </li>
              <li>
                <InfoQualityList $statusColor="black">
                  <Package size={16} weight="fill" />
                </InfoQualityList>
                Embalagem mantém o café intacto
              </li>
              <li>
                <InfoQualityList $statusColor="yellow">
                  <Timer size={16} weight="fill" />
                </InfoQualityList>
                Entrega rápida e rastreada
              </li>
              <li>
                <InfoQualityList $statusColor="purple">
                  <Coffee size={16} weight="fill" />
                </InfoQualityList>
                O café chega fresquinho até você
              </li>
            </ul>
          </InfoBannerText>
          <img src={coffeHuge} alt="" />
        </ContentInfoBanner>
      </ContainerInfoBanner>
      <ContentListCoffe>
        <h2>Nosso Cafés</h2>
        <div>
          {mockCoffes.map((coffe) => {
            return (
              <Coffe
                key={coffe.title}
                title={coffe.title}
                description={coffe.description}
                imageSrc={coffe.imageSrc}
                typeCoffe={coffe.typeCoffe}
                price={coffe.price}
              />
            )
          })}
        </div>
      </ContentListCoffe>
    </ContainerMain>
  )
}
