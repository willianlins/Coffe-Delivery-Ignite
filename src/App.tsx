import { ThemeProvider } from 'styled-components'
import defaultTheme from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { CoffeContextProvider } from './contexts/CoffeContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeContextProvider>
          <Router />
        </CoffeContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
