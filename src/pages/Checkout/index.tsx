import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from 'phosphor-react'
import {
  CheckoutFormLeft,
  CheckoutFormLeftInfo,
  CheckoutFormLeftInfoHeader,
  CheckoutFormLeftPayment,
  CheckoutFormRight,
  ContainerCheckout,
} from './styles'

export function Checkout() {
  return (
    <ContainerCheckout>
      <div>
        <h2>Complete seu pedido</h2>
        <CheckoutFormLeft>
          <CheckoutFormLeftInfo>
            <div>
              <MapPin size={22} />
              <CheckoutFormLeftInfoHeader>
                <h2>Endeço de Entrega</h2>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </CheckoutFormLeftInfoHeader>
            </div>
            <input type="text" placeholder="CEP" name="CEP" />
            <input type="text" placeholder="Rua" name="RUA" />
            <input type="text" placeholder="Número" />
            <input type="text" placeholder="Complemento" />
            <input type="text" placeholder="Bairro" />
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="UF" />
          </CheckoutFormLeftInfo>
          <CheckoutFormLeftPayment>
            <div>
              <CurrencyDollar size={22} />
              <CheckoutFormLeftInfoHeader>
                <h2>Endeço de Entrega</h2>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </CheckoutFormLeftInfoHeader>
            </div>
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
              <Money size={16} /> CARTÃO DE DÉBITO
            </label>
          </CheckoutFormLeftPayment>
        </CheckoutFormLeft>
      </div>
      <div>
        <h2>Cafés selecionados</h2>
        <CheckoutFormRight>
          <div>LISTA</div>

          <table>
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
                <td>Total</td>
                <td>
                  <strong>R$ 33,50</strong>
                </td>
              </tr>
            </tbody>
          </table>
          <button type="submit">CONFIRMAR PEDIDO</button>
        </CheckoutFormRight>
      </div>
    </ContainerCheckout>
  )
}
