import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
  width: 74rem;
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2rem;
  nav {
    display: flex;
    gap: 0.75rem;
  }
`

export const HeaderButton = styled.button`
  padding: 0.5rem;
  border-radius: 6px;
  font-size: ${(props) => props.theme.FONT_SIZE['TEXT-S']}rem;
  border: 0;
  cursor: pointer;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const HeaderButtonCity = styled(HeaderButton)`
  ${({ theme }) => css`
    color: ${theme.COLORS['PURPLE-DARK']};
    background: ${theme.COLORS['PURPLE-LIGHT']};
    svg {
      color: ${theme.COLORS.PURPLE};
      margin-right: 0.25rem;
    }
  `}
`

export const HeaderButtonCart = styled(HeaderButton)`
  ${({ theme }) => css`
    color: ${theme.COLORS['YELLOW-DARK']};
    background: ${theme.COLORS['YELLOW-LIGHT']};

    span {
      color: ${theme.COLORS.WHITE};
      background: ${theme.COLORS['YELLOW-DARK']};
      font-size: ${theme.FONT_SIZE['TEXT-XS']}rem;
    }
  `}
  position:relative;

  transition:
    background-color,
    color 0.3s;

  span {
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    line-height: 1.25rem;
    position: absolute;

    top: -0.5rem;
    right: -0.5rem;
  }

  &:hover {
    ${({ theme }) => css`
      color: ${theme.COLORS['YELLOW-LIGHT']};
      background: ${theme.COLORS['YELLOW-DARK']};

      span {
        color: ${theme.COLORS['YELLOW-DARK']};
        background: ${theme.COLORS['YELLOW-LIGHT']};
      }
    `}
  }
`
