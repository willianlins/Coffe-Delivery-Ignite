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

interface CoffeInfoShoopingProps {
  $isactive?: boolean
}

export const CoffeInfoShooping = styled.div<CoffeInfoShoopingProps>`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
    padding: 0 1rem;
    text-align: center;
    flex-wrap: wrap;

    span {
      font-size: ${theme.FONT_SIZE['TEXT-S']}rem;

      strong {
        font-size: ${theme.FONT_SIZE['TITLE-M']}rem;
        font-family: ${theme.FONT_FAMILY.TITLE}, 'sans-serif';
        font-weight: 800;
        margin-left: 0.313rem;
      }
    }

    button {
      border: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 6px;
      padding: 0.563rem;
      color: ${theme.COLORS['BASE-CARD']};
      cursor: pointer;
      transition: background-color 0.3s;
    }
  `}
  button {
    background: ${(props) =>
      !props?.$isactive
        ? props.theme.COLORS['PURPLE-DARK']
        : props.theme.COLORS['YELLOW-DARK']};

    &:hover {
      background: ${(props) =>
        !props?.$isactive
          ? props.theme.COLORS.PURPLE
          : props.theme.COLORS['YELLOW-DARK']};
    }
  }
`
