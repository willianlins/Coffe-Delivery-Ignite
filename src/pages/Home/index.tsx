import coffeHuge from '../../assets/coffe_huge.svg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import {
  BannerTextLists,
  ContainerInfoBanner,
  ContainerMain,
  ContentInfoBanner,
  ContentListCoffe,
  InfoBannerText,
} from './styles'
import { Coffe } from './Components/Coffe'
import { mockCoffes } from './dataMock'
import { ListsInfos } from '../../components/ListsInfos'

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
            <BannerTextLists>
              <ListsInfos
                $statuscolor="orange"
                icon={<ShoppingCart size={16} weight="fill" />}
              >
                Compra simples e segura{' '}
              </ListsInfos>
              <ListsInfos
                $statuscolor="black"
                icon={<Package size={16} weight="fill" />}
              >
                Embalagem mantém o café intacto
              </ListsInfos>

              <ListsInfos
                $statuscolor="yellow"
                icon={<Timer size={16} weight="fill" />}
              >
                Entrega rápida e rastreada
              </ListsInfos>
              <ListsInfos
                $statuscolor="purple"
                icon={<Coffee size={16} weight="fill" />}
              >
                O café chega fresquinho até você
              </ListsInfos>
            </BannerTextLists>
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
