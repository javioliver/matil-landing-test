//APP COMPONENT

//NEXT
import { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import '../styles/globals.css'
import localFont from 'next/font/local'
import { NextIntlClientProvider } from 'next-intl'
import { useRouter } from 'next/router'
//REACT
import { useEffect, useState } from 'react'
//FRONT
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
//GOOGLE ANALYTICS
import ReactGA from 'react-ga4'
//COMPONENTS
import Header from '../Content/Components/header'
const CoockiesWarning = dynamic(() => import('../Content/Components/cookies'), {ssr: false})

const myFont = localFont({ src: [{
    path: '../../public/fonts/font_1.woff2',
    weight: '300',
    style: 'normal',
  },
  {
    path: '../../public/fonts/font_1.woff2',
    weight: '400',
    style: 'normal',
  },
  {
    path: '../../public/fonts/font_1.woff2',
    weight: '500',
    style: 'normal',
  },
  {
    path: '../../public/fonts/font_1.woff2',
    weight: '600',
    style: 'normal',
  },
  {
    path: '../../public/fonts/font_1.woff2',
    weight: '700',
    style: 'normal',
  },
]})
const theme = extendTheme({
  breakpoints: {
    sm: '450px',
    md: '700px',
    lg: '960px',
    xl: '1200px',
  },
  colors: {
    brand: {
      white_bg:'rgb(246, 249, 252)',
      clear_black: '#1A202C',
      blue: 'linear-gradient(to right, rgba(0, 123, 255), rgba(33, 180, 253))',
      text_blue:'rgb(5, 102, 255)',
      black_button:'rgb(0, 20, 51)',
      black_button_hover:'rgb(0, 20, 51, 0.8)',
      gray_1:"rgb(245, 247, 249)",
      gray_2:"rgb(211, 219, 229)",
      text_gray:'rgb(100, 116, 145)'
    },
  },
  fontSizes: {
    '3xs': 'clamp(9px, 1.3vw + 4px, 11px)',
    '2xs': 'clamp(12px, 1.6vw + 4px, 13px)', 
    xs: 'clamp(14px, 2vw + 4px, 16px)', 
    sm: 'clamp(16px, 2.5vw + 4px, 18px)',
    md: 'clamp(18px, 3vw + 4px, 20px)',
    lg: 'clamp(20px, 3.5vw + 4px, 24px)',
    xl: 'clamp(22px, 4vw + 4px, 28px)',
    '2xl': 'clamp(24px, 5vw + 4px, 32px)',
    '3xl': 'clamp(30px, 6vw + 4px, 40px)',
    '4xl': 'clamp(36px, 7vw + 4px, 48px)',
    '5xl': 'clamp(40px, 8vw + 4px, 56px)',
    '6xl': 'clamp(46px, 9vw + 4px, 72px)',
  },
  styles: {
    global: {
      body: {color: 'rgb(0, 20, 51)'}
    },
  },
})

function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter()

  //DECIDE IF THE USER IS USING A COMPUTER, FOR ADJUSTING THE HEADER
  const [isComputerWidth, setIsComputerWidth] = useState<boolean | null>(null)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      ReactGA.initialize('G-H00C9148KH')
      ReactGA.send({ hitType: "pageview", page: window.location.pathname })
      const handleResize = () => {setIsComputerWidth(window.innerWidth > 900)}
      handleResize();
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  

  return (<> 
    
    <NextIntlClientProvider locale={router.locale} timeZone="Europe/Paris" messages={pageProps.messages}>
      <ChakraProvider theme={theme}>
        <main className={myFont.className}>
          <Header isComputerWidth={isComputerWidth} />
          <Component {...pageProps} />
          <CoockiesWarning />
        </main>
       </ChakraProvider>
    </NextIntlClientProvider>

    </>)
}

export default MyApp
