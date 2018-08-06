import Document, { Head, Main, NextScript } from 'next/document'
import { injectGlobal, ServerStyleSheet } from 'styled-components'

injectGlobal`
  body {
    background-color: #ceefe8;
  }
`

export default class SiteDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()

    const page = renderPage((Main) => (props) =>
      sheet.collectStyles(<Main {...props} />)
    )

    const styleTags = sheet.getStyleElement()

    return { ...page, styleTags }
  }

  render () {
    return (
      <html>
        <Head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
