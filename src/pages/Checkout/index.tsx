import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from 'phosphor-react'
import {
  CheckoutFormLeftInfo,
  CheckoutFormLeftInfoHeader,
  CheckoutFormLeftPayment,
  CheckoutFormRight,
  ContainerCheckout,
  FormLeftInfoInput,
  FormLeftPayment,
  FormRightListCoffe,
  FormRightPriceList,
} from './styles'
import { CoffeList } from './Components/CoffeList'
import { NavLink } from 'react-router-dom'

export function Checkout() {
  return (
    <ContainerCheckout>
      <div>
        <h2>Complete seu pedido</h2>
        <div>
          <CheckoutFormLeftInfo>
            <CheckoutFormLeftInfoHeader $statusColor="orange">
              <MapPin size={22} />
              <div>
                <h2>Endeço de Entrega</h2>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </CheckoutFormLeftInfoHeader>
            <FormLeftInfoInput>
              <input type="text" placeholder="CEP" name="CEP" />
              <input type="text" placeholder="Rua" name="Rua" />
              <input type="text" placeholder="Número" name="Numero" />
              <div tabIndex={0}>
                <input
                  type="text"
                  placeholder="Complemento"
                  name="Complemento"
                />
                Opcional
              </div>
              <input type="text" placeholder="Bairro" name="Bairro" />
              <input type="text" placeholder="Cidade" name="Cidade" />
              <input type="text" placeholder="UF" name="UF" />
            </FormLeftInfoInput>
          </CheckoutFormLeftInfo>
          <CheckoutFormLeftPayment>
            <CheckoutFormLeftInfoHeader $statusColor="purple">
              <CurrencyDollar size={22} />
              <div>
                <h2>Pagamento</h2>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </CheckoutFormLeftInfoHeader>
            <FormLeftPayment>
              <input
                type="radio"
                id="creditCard"
                value="creditCard"
                name="payment"
              />
              <label htmlFor="creditCard">
                <CreditCard size={16} /> CARTÃO DE CRÉDITO
              </label>

              <input
                type="radio"
                id="debitCard"
                value="debitCard"
                name="payment"
              />
              <label htmlFor="debitCard">
                <Bank size={16} /> CARTÃO DE DÉBITO
              </label>

              <input type="radio" id="money" value="money" name="payment" />
              <label htmlFor="money">
                <Money size={16} /> Dinheiro
              </label>
            </FormLeftPayment>
          </CheckoutFormLeftPayment>
        </div>
      </div>
      <div>
        <h2>Cafés selecionados</h2>
        <CheckoutFormRight>
          <FormRightListCoffe>
            <CoffeList />
          </FormRightListCoffe>
          <FormRightListCoffe>
            <CoffeList />
          </FormRightListCoffe>

          <FormRightPriceList>
            <tbody>
              <tr>
                <td>Total de itens</td>
                <td>R$ 29,70</td>
              </tr>
              <tr>
                <td>Entrega</td>
                <td>R$ 3,50</td>
              </tr>
              <tr>
                <td>
                  <strong>Total</strong>
                </td>
                <td>
                  <strong>R$ 33,50</strong>
                </td>
              </tr>
            </tbody>
          </FormRightPriceList>
          <NavLink to={'/Success'}>
            <button type="submit">CONFIRMAR PEDIDO</button>
          </NavLink>
        </CheckoutFormRight>
      </div>
    </ContainerCheckout>
  )
}
