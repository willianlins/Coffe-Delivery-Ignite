import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import illustrationSuccess from '../../assets/Illustration.svg'
import { ListsInfos } from '../../components/ListsInfos'
import {
  ContainerSuccess,
  SuccessLeft,
  SuccessLeftTopics,
  SuccessRight,
} from './styles'
import { useContext } from 'react'
import { CoffeContext } from '../../contexts/CoffeContext'

export function Success() {
  const { coffes } = useContext(CoffeContext)

  console.log(coffes)

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
            <p>
              {' '}
              Entrega em{' '}
              <strong>
                Rua João Daniel Martinelli, 102<br></br>
              </strong>
              Farrapos - Porto Alegre, RS
            </p>
          </ListsInfos>
          <ListsInfos
            $statuscolor={'yellow'}
            icon={<Timer size={16} weight="fill" />}
          >
            <p>
              Previsão de entrega <br></br>
              <strong>20 min - 30 min</strong>
            </p>
          </ListsInfos>
          <ListsInfos
            $statuscolor={'orange'}
            icon={<CurrencyDollar size={16} weight="fill" />}
          >
            <p>
              Pagamento na entrega <br></br>
              <strong>Cartão de Crédito</strong>
            </p>
          </ListsInfos>
        </SuccessLeftTopics>
      </SuccessLeft>
      <SuccessRight>
        <img src={illustrationSuccess} alt="" />
      </SuccessRight>
    </ContainerSuccess>
  )
}
