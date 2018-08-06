import App, {Container} from 'next/app'
import withReduxStore from '../lib/withReduxStore'
import { Provider } from 'react-redux'

class MyApp extends App {
  render () {
    const {Component, pageProps, store} = this.props
    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

export default withReduxStore(MyApp)
