import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import { ThemeProvider as MaterialUIThemeProvider } from '@material-ui/core/styles'
import { StylesProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
// import Layout from './components/page/layout'
import theme from 'src/styles/MuiTheme'

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <StylesProvider injectFirst>
      <MaterialUIThemeProvider theme={theme}>
        <StyledComponentsThemeProvider theme={theme}>
          <CssBaseline />
          {/* <Layout> */}
          <Component {...pageProps} />
          {/* </Layout> */}
        </StyledComponentsThemeProvider>
      </MaterialUIThemeProvider>
    </StylesProvider>
  )
}

export default App
