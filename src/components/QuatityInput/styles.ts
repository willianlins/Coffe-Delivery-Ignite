import { styled } from 'styled-components'

interface CoffeInfoAmountProps {
  sizetype: string
}

export const CoffeInfoAmount = styled.div<CoffeInfoAmountProps>`
  width: 4.5rem;
  height: ${(props) => (props.sizetype === 'small' ? '2rem' : '2.375rem')};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background: ${(props) => props.theme.COLORS['BASE-BUTTON']};

  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  input {
    width: 1.5rem;
    -moz-appearance: textfield;
    appearance: textfield;
    text-align: center;

    border: 0;
    background: transparent;
  }

  svg {
    color: ${(props) => props.theme.COLORS.PURPLE};
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
      color: ${(props) => props.theme.COLORS['PURPLE-DARK']};
    }
  }
`
