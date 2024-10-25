// pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
            <link rel="icon" href="/images/matil-simple-gradient.svg" />
            <link rel="apple-touch-icon" sizes="180x180" href="/images/matil-simple-gradient.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/images/matil-simple-gradient.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/images/matil-simple-gradient.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
