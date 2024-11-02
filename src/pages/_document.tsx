// pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
        <link rel="icon" type="image/png" href="/images/favicon/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/images/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/images/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="MyWebSite" />
        <link rel="manifest" href="/images/favicon/site.webmanifest" />
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
