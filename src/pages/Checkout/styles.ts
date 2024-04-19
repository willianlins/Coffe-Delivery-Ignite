import styled, { css } from 'styled-components'

export const ContainerCheckout = styled.main`
  width: 74rem;
  margin: 0 auto;
  padding: 2rem;
  margin-top: 1rem;
  display: flex;
  justify-content: center;

  h2 {
    font-size: ${(props) => props.theme.FONT_SIZE['TITLE-XS']}rem;
  }
`

export const CheckoutFormRight = styled.div`
  width: 28rem;
  border-top-left-radius: 6px;
  border-top-right-radius: 44px;
  border-bottom-left-radius: 44px;
  border-bottom-right-radius: 6px;
  padding: 2.5rem;
  margin-top: 1rem;
  background: ${(props) => props.theme.COLORS['BASE-CARD']};
`

const COLOR_TYPE_ICON = {
  orange: 'YELLOW-DARK',
  purple: 'PURPLE',
}
interface colorIconProps {
  $statusColor: keyof typeof COLOR_TYPE_ICON
}

export const CheckoutFormLeftInfoHeader = styled.div<colorIconProps>`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    margin-bottom: 2rem;
    h2 {
      font-family: ${theme.FONT_FAMILY.TEXT};
      font-size: ${theme.FONT_SIZE['TEXT-M']}rem;
      color: ${theme.COLORS['BASE-SUBTITLE']};
      font-weight: 400;
    }
    p {
      font-size: ${theme.FONT_SIZE['TEXT-S']}rem;
      color: ${theme.COLORS['BASE-TEXT']};
    }
    svg {
      color: ${(props) =>
        props.theme.COLORS[COLOR_TYPE_ICON[props.$statusColor]]};
    }
  `}
`

export const CheckoutFormLeft = styled.div`
  margin-right: 2rem;
  margin-top: 1rem;
  padding: 2.5rem;
  background: ${(props) => props.theme.COLORS['BASE-CARD']};
  border-radius: 6px;
`

export const CheckoutFormLeftInfo = styled(CheckoutFormLeft)``

export const FormLeftInfoInput = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    input {
      background: ${theme.COLORS['BASE-INPUT']};
      border: 1px solid ${theme.COLORS['BASE-BUTTON']};
      border-radius: 4px;
      font-size: ${theme.FONT_SIZE['TEXT-S']}rem;
      color: ${theme.COLORS['BASE-TEXT']};
      padding: 0.75rem;

      &::-webkit-input-placeholder {
        color: ${theme.COLORS['BASE-LABEL']};
      }

      &:-moz-placeholder {
        /* Firefox 18- */
        color: ${theme.COLORS['BASE-LABEL']};
      }

      &::-moz-placeholder {
        /* Firefox 19+ */
        color: ${theme.COLORS['BASE-LABEL']};
      }

      &:-ms-input-placeholder {
        color: ${theme.COLORS['BASE-LABEL']};
      }

      &:focus {
        border-color: ${(props) => props.theme.COLORS['YELLOW-DARK']};
      }
    }
    [name='CEP'],
    [name='Numero'],
    [name='Bairro'] {
      width: 12.5rem;
    }
    [name='Rua'] {
      width: 35rem;
    }
    [name='Complemento'],
    [name='Cidade'] {
      flex: 1;
    }
    [name='UF'] {
      width: 3.75rem;
    }
    [name='Cidade'] {
      width: 3.75rem;
    }

    div {
      display: flex;
      align-items: center;
      background: ${theme.COLORS['BASE-INPUT']};
      border: 1px solid ${theme.COLORS['BASE-BUTTON']};
      border-radius: 4px;
      flex: 1;
      font-size: ${theme.FONT_SIZE['TEXT-XS']}rem;
      font-style: italic;
      padding-right: 0.75rem;
      input {
        flex: 1;
        border: 0;
      }
      input:focus {
        border: 1px solid ${(props) => props.theme.COLORS['YELLOW-DARK']};
      }
    }
  `}
`

export const CheckoutFormLeftPayment = styled(CheckoutFormLeft)``

export const FormLeftPayment = styled.div`
  display: flex;
  font-size: ${(props) => props.theme.FONT_SIZE['BUTTON-M']}rem;
  gap: 0.75rem;

  label {
    flex: 1;
    padding: 0.875rem;
    background: ${(props) => props.theme.COLORS['BASE-BUTTON']};
    border-radius: 6px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 1rem;
    transition:
      background-color 0.3s,
      color 0.3s;
    border: 1px solid transparent;

    &:hover {
      background: ${(props) => props.theme.COLORS['BASE-HOVER']};
      color: ${(props) => props.theme.COLORS['BASE-SUBTITLE']};
    }
  }

  input[type='radio']:checked + label {
    background: ${(props) => props.theme.COLORS['PURPLE-LIGHT']};
    border: 1px solid ${(props) => props.theme.COLORS.PURPLE};
  }

  svg {
    color: ${(props) => props.theme.COLORS.PURPLE};
  }
  input {
    display: none;
  }
`
