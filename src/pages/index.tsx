//NEXT
import Head from 'next/head'
import { useRouter } from 'next/router'
import { GetStaticPropsContext } from 'next'
//TRANSLATION
import { useTranslations } from 'next-intl'
//FRONT
import { Flex, Text, Box, Image, Icon } from '@chakra-ui/react'
import ScrollAnimation from "react-animate-on-scroll"
import "animate.css/animate.compat.css"
//COMPONENTS
import Footer from '../Content/Components/footer'
import Contact from '../Content/Components/contact'
import Chatbot from '../Content/Widgets/Chatbot'
import ArrowButton from '@/Content/Widgets/ArrowButton'
import AnimatedText from '@/Content/Widgets/AnimatedText'
//ICONS
import { IoCheckbox } from "react-icons/io5"
import { BsFillLightningFill } from "react-icons/bs"

 
//MAIN FUNCTION
const Main = () => {

  //TRANSLATION
  const t = useTranslations('Main')
  const t_chats = useTranslations('Chats')

 
  //NEXT ROUTING
  const router = useRouter()

  //INTEGRATIONS LOGOS LIST
  const images = [['shopify_logo.svg', 'green.100'], ['wordpress_logo.svg', 'gray.200'], ['hubspot_logo.svg', 'orange.200'], ['logo-2.png', 'blue.100'], ['slack_logo.png', 'gray.100'], ['zapier_logo.svg', 'orange.100'], ['stripe_logo.webp', 'purple.100'] ]

  const matildaChat:[number, {text:string, botMessage:boolean}][] = [
        [1000, { text: t_chats('Chat_11'), botMessage: false }],
        [100, { text: t_chats('Chat_12'), botMessage: true }],
        [3500, { text: t_chats('Chat_13'), botMessage: false }],
        [100, { text: t_chats('Chat_14'), botMessage: true }],
        [4500, { text: t_chats('Chat_15'), botMessage: true }]
    ]
  return (<>
 
      <Head>
        <title>MATIL</title>
        <meta name="description" content="Impulsa tu negocio con soluciones de IA. Mejora la atención al cliente, aumenta las ventas proactivas y envía correos masivos personalizados con nuestra tecnología innovadora. Descubre cómo la inteligencia artificial puede transformar tu empresa."/>
      </Head>

      <Flex flexDir='column' width={'100vw'} alignItems={'center'} bg='white'>

        <Flex px='4vw' width={'100vw'} overflow={'hidden'} justifyContent={'center'} bgGradient="linear(to-r, #89f7fe, #66a6ff)" >

            <Box width="100%" position={'relative'}  color='black'  textAlign={'center'}  py={{ base: "10vh", md: "12vh", lg: "15vh", xl: "17vh" }}  maxW="1200px" >
                <Flex alignItems={'center'}  flexDir={'column'} > 
                  
                        <Text fontSize={{ base: '3.5em',sm:'3.7em', md: '4em', lg: '4.5em' }} fontWeight="medium" overflowWrap="break-word" whiteSpace="pre-wrap" >
                            <AnimatedText text={t('Hero_1')}/>
                        </Text>
                    
                        <Text fontSize={{ base: '3.5em',sm:'3.7em', md: '4em', lg: '4.5em' }} fontWeight="medium" overflowWrap="break-word" whiteSpace="pre-wrap" >
                            <AnimatedText text={t('Hero_2')} startDelay={t('Hero_1').split(' ').length * 40}/>
                        </Text>
              
                        <Text fontSize={{ base: '3.5em',sm:'3.7em', md: '4em', lg: '4.5em' }} fontWeight="medium" overflowWrap="break-word" whiteSpace="pre-wrap" >
                            <AnimatedText text={t('Hero_3')} startDelay={(t('Hero_1').split(' ').length + t('Hero_2').split(' ').length) * 40} />
                        </Text>

                    <ScrollAnimation animateIn="fadeInUp" animateOnce delay={(t('Hero_1').split(' ').length + t('Hero_2').split(' ').length + t('Hero_3').split(' ').length) * 40}>
                        <Text mt='30px' maxW={'800px'} fontWeight={300} fontSize={{base: '.8em',sm:'.8em', md: '.9em', lg: '1em' }} color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
                        {t('Subhero')}
                        </Text>
                    </ScrollAnimation>
                </Flex>
            </Box>

          </Flex>

          <Flex width="100%" maxW="1200px" gap='50px' justifyContent={{ md: 'space-between' }} py={{ base: "10vh", md: "12vh", lg: "15vh", xl: "17vh" }}  px='4vw' flexDirection={{ base: 'column', md: 'row' }}>
              <Box  width={{ base: '100%', md: 'auto' }}>
               
                    <ScrollAnimation animateIn="fadeInUp" animateOnce>
                
                        <Text background='brand.blue' backgroundClip={'text'} fontWeight={'medium'} fontSize={{base: '1.2em',sm:'1.3em', md: '1.4em', lg: '1.5em' }} >
                            Matilda
                        </Text>
                        <Text mt='10px' fontSize={{ base: '2em',sm:'2.1em', md: '2.3em', lg: '2.5em' }} >
                        {t('Matilda_Title')}
                        </Text>

                        <Text mt='10px' mb='30px' fontWeight={300}  fontSize={{base: '.9em',sm:'.9em', md: '.95em', lg: '1em' }} color="brand.gray" overflowWrap="break-word" whiteSpace="pre-wrap">
                        {t('Matilda_Subtitle')}
                        </Text>
                        <ArrowButton text={t('More_Matilda')} onClick={() => router.push('/matilda')}/>
                        <Flex borderRadius={'.7rem'} bg='gray.50' borderWidth={'1px'} borderColor={'gray.200'} py='2.5vw' mt='50px' display={'inline-flex'} boxShadow={'0px 0px 5px 0px rgba(0, 0, 0, 0.15)'}>
                            <Flex maxWidth={'250px'}  borderRightColor={'gray.300'} borderRightWidth={'1px'} px='2.5vw'>
                                <Box>
                                    <Text fontSize={{ base: '1.8em',sm:'2em', md: '2.2em', lg: '2.5em' }} >80%</Text>
                                    <Text fontWeight={300} color='gray.600'  fontSize={{base: '.8em',sm:'.8em', md: '.85em', lg: '.9em' }} >{t('Solved_Consults')}</Text>
                                </Box>
                                <Icon boxSize={'20px'} as={IoCheckbox} color='brand.text_blue'  />
                            </Flex>
                            <Flex  px='2.5vw' maxWidth={'250px'} >
                                <Box>
                                    <Text fontSize={{ base: '1.8em',sm:'2em', md: '2.2em', lg: '2.5em' }} >x2.5</Text>
                                    <Text fontWeight={300} color='gray.600'  fontSize={{base: '.8em',sm:'.8em', md: '.85em', lg: '.9em' }} >{t('Agents_Productivity')}</Text>
                                </Box>
                                <Icon boxSize={'20px'} as={BsFillLightningFill} color='brand.text_blue'/>
                            </Flex>
                        </Flex>
                    </ScrollAnimation>
                </Box>
 
                <ScrollAnimation animateIn="fadeInRight" animateOnce>
                    <Flex justifyContent={'center'} alignItems={{base:'center',sm:'center',md:'start',lg:'start',xl:'start'}} mt={{lg:'0px',xl:'-70px' }}  flexDir={{base:'column-reverse',sm:'column-reverse',md:'row',lg:'row',xl:'row'}}  height="auto" >
                        <Box  overflow={'hidden'} zIndex={1}  position={'relative'}  height={'660px'}  borderRadius={'1.5rem'}  bg='white' width={'350px'}  boxShadow={'2px 2px 10px 8px rgba(135, 206, 250, 0.35)'} >
                            <Chatbot currentChat={matildaChat}/>
                        </Box>
                    </Flex>
                </ScrollAnimation>

          </Flex> 
   

        <Flex bgGradient='linear(to-br, blue.900, blue.800, blue.700)' clipPath='polygon(0 10%, 100% 0, 100% 100%, 0 100%)' width={'100vw'} justifyContent={'center'} px='4vw' > 
          <Flex width="100%" maxW="1200px" gap='50px' justifyContent={{ md: 'space-between' }} py={{ base: "10vh", md: "12vh", lg: "15vh", xl: "17vh" }}  flexDirection={{ base: 'column', md: 'row' }}>
            <ScrollAnimation style={{flex:'3'}} animateIn="fadeInUp" animateOnce>

              <Box width={{ base: '100%', md: 'auto' }}>
                <Text background='brand.blue' backgroundClip={'text'} fontWeight={'medium'} fontSize={{base: '1.2em',sm:'1.3em', md: '1.4em', lg: '1.5em' }} >
                    SuperService
                </Text>
                    <Text color='white' mt='10px' fontSize={{ base: '2em',sm:'2.1em', md: '2.3em', lg: '2.5em' }} >
                    {t('SS_Title')}
                    </Text>

                    <Text mt='10px' fontWeight={300} mb='30px'  fontSize={{base: '.9em',sm:'.9em', md: '.95em', lg: '1em' }} color='gray.200' overflowWrap="break-word" whiteSpace="pre-wrap">
                    {t('SS_Subtitle')}
                    </Text>
                    <ArrowButton text={t('More_SS')} onClick={() => router.push('/super-service')} isBlackBackground={true}/>

                </Box>
            </ScrollAnimation>

            <ScrollAnimation style={{flex:'4'}} animateIn="fadeInRight" animateOnce>
                <Box  overflow={'hidden'} position={'relative'} borderRadius={'.5rem'} >
                    <Image src='/images/estadisticas.png'/>
                </Box>
            </ScrollAnimation>
   
          </Flex> 
        </Flex>

        <Box bg='white' textAlign={'center'} py={{ base: "5vh", md: "5vh", lg: "7vh", xl: "10vh"  }}> 
             
            <ScrollAnimation animateIn="fadeInUp" animateOnce>
                <Flex justifyContent={'center'} width='100%'  px={{ base: '20px', sm: '30px', md: '5vw',lg: "10vw", xl: "15vw"  }} >
                    <Flex  flexDir={'column'} alignItems={'center'}> 
                        <Text overflowWrap="break-word" whiteSpace="pre-wrap" fontSize={{ base: '1.5em', sm: '2em', md: '2em', lg: '2.8em' }} fontWeight="medium" color='brand.clear_black'>
                            {t('Integrations_Title')}
                        </Text>
                        <Text mt='10px' mb='30px' fontWeight={300}  fontSize={{base: '.9em',sm:'.9em', md: '.95em', lg: '1em' }} color="gray.600" overflowWrap="break-word" whiteSpace="pre-wrap">
                            {t('Integrations_Subtitle')}
                        </Text>
                        <ArrowButton text={t('More_Integrations')} onClick={() => router.push('/integrations')}/>
                    </Flex>
                </Flex>
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeIn" animateOnce>
                <Flex justifyContent={'center'} width='100%'  px={{ base: '20px', sm: '30px', md: '5vw',lg: "10vw", xl: "15vw"  }} >
                    <Flex gap='10px' mt='50px'>
                        {images.map((image, index) => (
                            <Flex key={`integration-${index}`} overflow="hidden" alignItems={'center'} justifyContent={'center'} height={'100px'} width={'100px'} borderRadius={'full'} bg={image[1]}>
                                <Image width={'50px'}  src={'/images/logos/' + image[0]} objectFit="cover" />
                            </Flex>
                        ))}
                    </Flex>
                </Flex>
                <Text mt='20px' fontSize={{base: '.9em',sm:'.9em', md: '.95em', lg: '1em' }} color="gray.600"  fontWeight={300}>{t('Integrations_End')}</Text>
            </ScrollAnimation>
         </Box>

        <Contact/>
        <Footer/>
      </Flex>

 
      </>)
}

export default Main

export async function getStaticProps({locale}:GetStaticPropsContext) {return {props: {messages: require(`../lang/${locale}.json`)}}}
