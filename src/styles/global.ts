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
  -webkit-font-smoothing: antialiased;
 
}

a{
  text-decoration: none;
}

h1, h2, h3{
  line-height: 130%;
  font-family: ${(props) => props.theme.FONT_FAMILY.TITLE}, 'sans-serif';
}


body, input, text-area, button{
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.TEXT}, sans-serif;
    font-size: ${theme.FONT_SIZE['TEXT-M']}rem;
  `}
  font-weight: 400;
}
`
