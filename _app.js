/*  /pages/_app.js
*/
import App, { Container } from 'next/app'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import storeFactory from '../redux/store'
import state from '../redux/store/state'


const makeStore = (initialState, c) => {
  const { isServer } = c
  return storeFactory(isServer, state)
}

class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    return {pageProps};    
  }
  
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

export default withRedux(makeStore)(MyApp)
