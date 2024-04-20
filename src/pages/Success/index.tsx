import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import illustrationSuccess from '../../assets/Illustration.svg'
import { ListsInfos } from '../../components/ListsInfos'
import {
  ContainerSuccess,
  SuccessLeft,
  SuccessLeftTopics,
  SuccessRight,
} from './styles'

export function Success() {
  return (
    <ContainerSuccess>
      <SuccessLeft>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>

        <SuccessLeftTopics>
          <ListsInfos
            $statuscolor={'purple'}
            icon={<MapPin size={16} weight="fill" />}
          >
            Entrega em <strong>Rua João Daniel Martinelli, 102</strong>Farrapos
            - Porto Alegre, RS
          </ListsInfos>
          <ListsInfos
            $statuscolor={'yellow'}
            icon={<Timer size={16} weight="fill" />}
          >
            Previsão de entrega
            <strong>20 min - 30 min</strong>
          </ListsInfos>
          <ListsInfos
            $statuscolor={'orange'}
            icon={<CurrencyDollar size={16} weight="fill" />}
          >
            Pagamento na entrega <strong>Cartão de Crédito</strong>
          </ListsInfos>
        </SuccessLeftTopics>
      </SuccessLeft>
      <SuccessRight>
        <img src={illustrationSuccess} alt="" />
      </SuccessRight>
    </ContainerSuccess>
  )
}
