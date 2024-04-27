import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from 'phosphor-react'
import { CoffeList } from './Components/CoffeList'
import { useContext } from 'react'
import { CoffeContext } from '../../contexts/CoffeContext'
import * as zod from 'zod'
import { useNavigate } from 'react-router-dom'

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
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const coffeBuyValidationSchema = zod.object({
  cep: zod.string().min(8, 'Informe o cep').max(8, 'Informe o cep'),
  rua: zod.string().min(5, 'Informe o endereço'),
  numero: zod.string().min(1, 'Informe o número'),
  bairro: zod.string().min(5, 'Informe o bairro'),
  cidade: zod.string().min(1, 'Informe a cidade'),
  uf: zod.string().min(1, 'Informe a UF'),
  payment: zod.string(),
})

type newCoffeBuy = zod.infer<typeof coffeBuyValidationSchema>

export function Checkout() {
  const { coffes, removeAllCoffeCart } = useContext(CoffeContext)
  const { handleSubmit, register, reset, formState } = useForm<newCoffeBuy>({
    resolver: zodResolver(coffeBuyValidationSchema),
    defaultValues: {
      cep: '',
      rua: '',
      numero: '',
      bairro: '',
      cidade: '',
      uf: '',
    },
  })
  const navigate = useNavigate()

  function handleCoffeBuy() {
    reset()
    removeAllCoffeCart()
    navigate(`/success`)
  }

  const VALUEDELIVERY = 3.5
  const VALUECART = coffes.reduce((ac, current) => {
    return ac + current.price * current.quantity
  }, 0)

  return (
    <ContainerCheckout onSubmit={handleSubmit(handleCoffeBuy)} action="">
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
              <span>
                <input type="text" placeholder="CEP" {...register('cep')} />
                {formState?.errors?.cep?.message}
              </span>
              <span>
                <input type="text" placeholder="Rua" {...register('rua')} />
                {formState?.errors?.rua?.message}
              </span>
              <span>
                <input
                  type="text"
                  placeholder="Número"
                  {...register('numero')}
                />
                {formState?.errors?.numero?.message}
              </span>
              <div tabIndex={0}>
                <input
                  type="text"
                  placeholder="Complemento"
                  name="Complemento"
                />
                Opcional
              </div>
              <span>
                <input
                  type="text"
                  placeholder="Bairro"
                  {...register('bairro')}
                />
                {formState?.errors?.bairro?.message}
              </span>
              <span>
                <input
                  type="text"
                  placeholder="Cidade"
                  {...register('cidade')}
                />
                {formState?.errors?.cidade?.message}
              </span>
              <span>
                <input type="text" placeholder="UF" {...register('uf')} />
                {formState?.errors?.uf?.message}
              </span>
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
                {...register('payment')}
              />
              <label htmlFor="creditCard">
                <CreditCard size={16} /> CARTÃO DE CRÉDITO
              </label>

              <input
                type="radio"
                id="debitCard"
                value="debitCard"
                {...register('payment')}
              />
              <label htmlFor="debitCard">
                <Bank size={16} /> CARTÃO DE DÉBITO
              </label>

              <input
                type="radio"
                id="money"
                value="money"
                {...register('payment')}
                defaultChecked
              />
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
          {coffes.length > 0 ? (
            coffes.map((coffe) => {
              return (
                <FormRightListCoffe key={coffe.id}>
                  <CoffeList
                    id={coffe.id}
                    title={coffe.title}
                    imgSRC={coffe.imgSRC}
                    price={(coffe.price * coffe.quantity).toLocaleString(
                      'pt-br',
                      {
                        minimumFractionDigits: 2,
                      },
                    )}
                    quantity={coffe.quantity}
                  />
                </FormRightListCoffe>
              )
            })
          ) : (
            <div></div>
          )}

          <FormRightPriceList>
            <tbody>
              <tr>
                <td>Total de itens</td>
                <td>
                  R${' '}
                  {VALUECART.toLocaleString('pt-br', {
                    minimumFractionDigits: 2,
                  })}
                </td>
              </tr>
              <tr>
                <td>Entrega</td>
                <td>
                  R${' '}
                  {VALUEDELIVERY.toLocaleString('pt-br', {
                    minimumFractionDigits: 2,
                  })}
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Total</strong>
                </td>
                <td>
                  <strong>
                    R${' '}
                    {(VALUECART + VALUEDELIVERY).toLocaleString('pt-br', {
                      minimumFractionDigits: 2,
                    })}
                  </strong>
                </td>
              </tr>
            </tbody>
          </FormRightPriceList>
          {/* <NavLink to={'/Success'}> */}
          <button type="submit">CONFIRMAR PEDIDO</button>
          {/* </NavLink> */}
        </CheckoutFormRight>
      </div>
    </ContainerCheckout>
  )
}
