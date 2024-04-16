import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:focus{
  outline: 0;
}

body{
  ${({ theme }) => css`
    background: ${theme.COLORS.BACKGROUND};
    color: ${theme.COLORS['BASE-TEXT']};
  `}
  -webkit-font-smoonthing: antialiased;
  line-height: 130%;
}

a{
  text-decoration: none;
}

body, input, text-area, button{
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.TEXT};
    font-size: ${theme.FONT_SIZE['TEXT-M']}rem;
  `}
  font-weight: 400;
}

`
