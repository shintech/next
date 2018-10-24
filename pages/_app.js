/*  /pages/_app.js
*/
import App, { Container } from 'next/app'
import { Provider } from 'react-redux'
import { reduxPage } from '../redux/init'

class MyApp extends App {
  render () {
    const { Component, pageProps, store } = this.props

    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

export default reduxPage(MyApp)
