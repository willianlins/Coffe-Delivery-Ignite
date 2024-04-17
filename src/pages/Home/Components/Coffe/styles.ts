import { css, styled } from 'styled-components'

export const ContainerCoffeInfo = styled.div`
  width: 16rem;
  height: 19.375rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  background: ${(props) => props.theme.COLORS['BASE-CARD']};

  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;
`
export const CoffeInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    padding: 0 1rem;
    text-align: center;

    img {
      margin-top: -2rem;
    }

    span {
      font-size: ${theme.FONT_SIZE.TAG}rem;
      color: ${theme.COLORS['YELLOW-DARK']};
      font-weight: 700;
      text-transform: uppercase;
      background: ${theme.COLORS['YELLOW-LIGHT']};
      padding: 0.313rem 0.438rem;
      border-radius: 9999px;
    }

    span + span {
      margin-left: 0.313rem;
    }

    p {
      font-size: ${theme.FONT_SIZE['TEXT-S']}rem;
      color: ${theme.COLORS['BASE-LABEL']};
    }
  `}
`

export const CoffeInfoShooping = styled.div``
