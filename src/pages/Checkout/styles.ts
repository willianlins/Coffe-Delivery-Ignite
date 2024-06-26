import styled, { css } from 'styled-components'

export const ContainerCheckout = styled.form`
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

  display: flex;
  flex-direction: column;

  button {
    width: 100%;
    padding: 0.75rem;
    color: ${(props) => props.theme.COLORS.WHITE};
    font-size: ${(props) => props.theme.FONT_SIZE['BUTTON-G']}rem;
    background: ${(props) => props.theme.COLORS.YELLOW};
    line-height: 160%;
    border-radius: 6px;
    border: 0;
    font-weight: 700;
    cursor: pointer;
    transition: background-color 0.3s;
    &:hover {
      background: ${(props) => props.theme.COLORS['YELLOW-DARK']};
    }
  }
`

export const FormRightPriceList = styled.table`
  margin-bottom: 1.5rem;

  tr {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  strong {
    font-size: ${(props) => props.theme.FONT_SIZE['TEXT-L']}rem;
    color: ${(props) => props.theme.COLORS['BASE-SUBTITLE']};
  }
`

export const FormRightListCoffe = styled.div`
  padding-bottom: 24px;
  margin-bottom: 24px;
  border-bottom: 1px solid ${(props) => props.theme.COLORS['BASE-BUTTON']};
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
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 1rem;

    span {
      display: flex;
      flex-direction: column;
      color: ${theme.COLORS.RED};
      font-size: ${theme.FONT_SIZE['TEXT-XS']}rem;
      gap: 0.61rem;
    }

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
    [name='cep'],
    [name='numero'],
    [name='bairro'] {
      width: 12.5rem;
    }
    [name='rua'] {
      width: 35rem;
    }
    [name='Complemento'],
    [name='cidade'] {
      flex: 1;
    }
    [name='uf'] {
      width: 3.75rem;
    }
    [name='Cidade'] {
      width: 3.75rem;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
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
