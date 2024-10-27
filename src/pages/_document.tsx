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
          <script defer src="https://chat-widget-matlil.s3.eu-west-3.amazonaws.com/insert.js?organization_id=5&chatbot_id=3284263b-e62c-46c1-8045-69ec4ae6f215" id="matil-chat-widget"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument
