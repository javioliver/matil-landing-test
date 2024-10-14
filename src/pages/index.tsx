//NEXT
import Head from 'next/head'
import { useRouter } from 'next/router'
import { GetStaticPropsContext } from 'next'
import { useEffect, useState } from 'react'
//TRANSLATION
import { useTranslations } from 'next-intl'
//FRONT
import { Flex, Text, Box, Image, Grid } from '@chakra-ui/react'
import ScrollAnimation from "react-animate-on-scroll"
import "animate.css/animate.compat.css"
import MeshGradientBackground from '@/Content/Gradient/gradient'
import HighlightText from '@/Content/Functions/HighlightText'
import CompaniesRiver from '@/Content/Widgets/CompaniesRiver'
//COMPONENTS
import Footer from '../Content/Components/footer'
import Contact from '../Content/Components/contact'
import Chatbot from '../Content/Widgets/Chatbot'
import ArrowButton from '@/Content/Widgets/ArrowButton'
import AnimatedText from '@/Content/Widgets/AnimatedText'
 
 
//MAIN FUNCTION
const Main = () => {

  //TRANSLATION
  const t = useTranslations('Main')
  const t_chats = useTranslations('Chats')

 
  //NEXT ROUTING
  const router = useRouter()

  const matildaChat:[number, {text:string, botMessage:boolean}][] = [
        [1000, { text: t_chats('Chat_11'), botMessage: false }],
        [100, { text: t_chats('Chat_12'), botMessage: true }],
        [3500, { text: t_chats('Chat_13'), botMessage: false }],
        [100, { text: t_chats('Chat_14'), botMessage: true }],
        [4500, { text: t_chats('Chat_15'), botMessage: true }]
    ]

    const pricingIconsList = ['/images/icons/study-dark.svg','/images/icons/channels.svg', '/images/icons/save-money.svg']
  return (<>
 
      <Head>
        <title>MATIL</title>
        <meta name="description" content="Impulsa tu negocio con soluciones de IA. Mejora la atención al cliente, aumenta las ventas proactivas y envía correos masivos personalizados con nuestra tecnología innovadora. Descubre cómo la inteligencia artificial puede transformar tu empresa."/>
      </Head>

        <Flex position={'relative'} flexDir='column' width={'100vw'} alignItems={'center'}>
            <MeshGradientBackground colors={["#58daf4", "#a8aae4", "#0566ff"]}/>
             
            <Flex position='relative' px='4vw' width={'100vw'}  overflow={'hidden'} justifyContent={'center'} >
 
                <Flex flexDir={'column'} alignItems={'center'} width="100%" position={'relative'}  color='black'  textAlign={'center'} pt={'120px'} pb='75px'  maxW="1200px" >
                    <Flex flex='1' color={'white'} alignItems={'center'}  flexDir={'column'} > 
                        <Text maxW={'800px'}  fontSize={'6xl'} fontWeight={500} overflowWrap="break-word" whiteSpace="pre-wrap" >
                            <AnimatedText text={t('Hero')}/>
                        </Text>
                        <ScrollAnimation animateIn="fadeInUp" animateOnce delay={(t('Hero').split(' ').length) * 100}>
                            <Text mt='30px' maxW={'800px'} fontWeight={300} fontSize={'sm'} color="white"  overflowWrap="break-word" whiteSpace="pre-wrap">
                            {t('Subhero')}
                            </Text>
                        </ScrollAnimation>
                    </Flex>
                    <ScrollAnimation animateIn="fadeIn" animateOnce delay={(t('Hero').split(' ').length) * 100 + 300} style={{position:'relative', zIndex:10, maxWidth:'1000px'}} >
                        <Image mt='50px' src={`/images/screen.png`} width={'100%'} boxShadow={'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px'} borderRadius={'.5rem'}/>
                    </ScrollAnimation>

                </Flex>
            </Flex>
            <Box position="absolute" height={'100%'}  width={'100%'} right={0} top={0} bg={`linear-gradient(transparent 30%, white)`} zIndex={1} />

        </Flex>  


        <Flex flexDir='column' width={'100vw'} alignItems={'center'} bg='transparent' px='4vw'>

            <Flex width="100%" maxW="1200px" gap='32px' justifyContent={{ md: 'space-between' }} py={{ base: '0', md: '100px' }}   flexDirection={{ base: 'column', md: 'row' }}>
                <Box> 
                    <ScrollAnimation animateIn="fadeIn" animateOnce>
                        <Flex display={'inline-block'} justifyContent={'center'} bgGradient='linear(to-br, #58daf4, rgb(5, 102, 255))' alignItems={'center'} bg={''} color={'white'} px='15px' py='3px' borderRadius={'2rem'}>
                            <Text fontSize={'md'} fontWeight={500}>Tilda</Text>
                        </Flex>
                    </ScrollAnimation>

                    <ScrollAnimation animateIn="fadeIn" animateOnce>
                        <Text mt='10px' fontSize={'3xl'}fontWeight={500} >
                            {t('Matilda_Title')}
                        </Text>
                    </ScrollAnimation>

                    <ScrollAnimation animateIn="fadeIn" animateOnce>
                        <Text mt='10px' mb='30px' fontWeight={300}  fontSize={'sm'} color="brand.text_gray" overflowWrap="break-word" whiteSpace="pre-wrap">
                            {t('Matilda_Subtitle')}
                        </Text>
                    </ScrollAnimation>

                             
                    <Flex mb='30px' gap='32px'>
                        <ScrollAnimation animateIn="fadeIn" animateOnce>
                            <Box flex='1'> 
                                <Flex alignItems='center' gap='10px'> 
                                    <Box height={'30px'} width={'3px'} bg={'brand.text_blue'}/>
                                    <Text fontWeight={500} fontSize={'3xl'} color='brand.text_blue'>80%</Text>
                                </Flex>
                                <Text mt='10px' ml='13px' zIndex={1} position="relative" fontSize={'md'}fontWeight={'400'}>{t('Solved_Consults')}</Text>
                            </Box>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeIn" animateOnce>
                            <Box flex='1'> 
                                <Flex alignItems='center' gap='10px'> 
                                    <Box height={'30px'} width={'3px'} bg={'brand.text_blue'}/>
                                    <Text fontWeight={500} fontSize={'3xl'} color='brand.text_blue'>x3.5</Text>
                                </Flex>
                                <Text mt='10px' ml='13px' zIndex={1} position="relative" fontSize={'md'}fontWeight={'400'}>{t('Agents_Productivity')}</Text>
 
                            </Box>
                        </ScrollAnimation>
                    </Flex>
                    <ArrowButton text={t('More_Matilda')} onClick={() => router.push('/tilda')} bgGradient='linear(to-br, #58daf4, rgb(5, 102, 255))' color='white' hover={{color:'brand.gray_1', bg:'linear(to-br, #58daf4, rgb(5, 12, 255))'}} fontSize={'sm'}/>
                 </Box>

                <ScrollAnimation animateIn="fadeInRight" animateOnce>
                    <Flex justifyContent={'center'} alignItems={{base:'center',sm:'center',md:'start',lg:'start',xl:'start'}} mt={{lg:'0px',xl:'-70px' }}  flexDir={{base:'column-reverse',sm:'column-reverse',md:'row',lg:'row',xl:'row'}}  height="auto" >
                        <Box bg='white' borderColor={'#eaebee'} borderWidth={'7px'} height={'650px'}  width={'342px'}   borderRadius={'2rem'}  overflow={'hidden'} boxShadow={'0 44px 89px -18px rgba(50,50,93,.35),0 26px 54px -26px rgba(0,0,0,.3),inset 0 -1px 3px 0 rgba(10,37,64,.35)'} >
                            <Chatbot currentChat={matildaChat}/>
                        </Box>
                    </Flex>
                </ScrollAnimation>

            </Flex> 
   
        </Flex>  

        <Flex bgGradient='linear(to-br,#00299c, rgb(0, 20, 51))'  clipPath='polygon(0 10%, 100% 0, 100% 100%, 0 100%)' width={'100vw'} justifyContent={'center'} px='4vw' > 
            <Flex width="100%" maxW="1200px" gap='50px' justifyContent={{ md: 'space-between' }} py={{ base: "10vh", md: "12vh", lg: "15vh", xl: "17vh" }}  flexDirection={{ base: 'column', md: 'row' }}>
 
                <Box flex={'3'} width={{ base: '100%', md: 'auto' }}>
                    <ScrollAnimation animateIn="fadeIn" animateOnce>
                        <Flex display={'inline-block'} justifyContent={'center'} bgGradient='linear(to-br, #58daf4, rgb(5, 102, 255))' alignItems={'center'} bg={''} color={'white'} px='15px' py='3px' borderRadius={'2rem'}>
                            <Text fontSize={'md'} fontWeight={500}>Tilda</Text>
                        </Flex>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeIn" animateOnce>
                        <Text color='white' mt='10px' fontSize={'3xl'} fontWeight={500}>{t('SS_Title')}</Text>
                    </ScrollAnimation>

                    <ScrollAnimation animateIn="fadeIn" animateOnce>
                        <Text mt='10px' fontWeight={300} mb='30px'  fontSize={'sm'} color='brand.gray_2' overflowWrap="break-word" whiteSpace="pre-wrap">
                        {t('SS_Subtitle')}
                        </Text>
                    </ScrollAnimation>

                    <ArrowButton text={t('More_SS')} onClick={() => router.push('/platform')} bg='transparent' border='1px solid white' color='white' hover={{color:'brand.gray_1', bg:'rgb(0, 20, 101)'}} fontSize={'sm'}/>
                    </Box>
      

                <ScrollAnimation style={{flex:'4'}} animateIn="fadeInRight" animateOnce>
                    <Box  overflow={'hidden'} position={'relative'} borderRadius={'.5rem'} >
                        <Image src='/images/screen.png'/>
                    </Box>
                </ScrollAnimation>
    
            </Flex> 
        </Flex>

        <Flex width="100%"   justifyContent={'center'} px='4vw' overflow={'hidden'} >
            <Flex gap='32px'pt={{ base: '75px', md: '0' }}  maxW={'1200px'} width={'100%'}  flexDirection={{ base: 'column', md: 'row' }}> 
                
                <Flex flexDir={'column'}  justifyContent={'center'} flex={{ base: '', md: '1' }} > 
                    <ScrollAnimation animateIn="fadeIn" animateOnce>
                        <Text fontSize={'xl'}  fontWeight="500" overflowWrap="break-word" whiteSpace="pre-wrap" >{t('Integrations_Title')}</Text>
                        <Text  fontSize={'sm'} mt='20px'  fontWeight="300" color='brand.text_gray' overflowWrap="break-word" whiteSpace="pre-wrap" >{t('Integrations_Subtitle')}</Text>
                    </ScrollAnimation>
                </Flex>
                <Box flex={{ base: '', md: '1' }} height={'400px'}overflow={'hidden'}>
                    <ScrollAnimation animateIn="fadeIn" animateOnce>
                        <CompaniesRiver/>
                    </ScrollAnimation>
                </Box>
            </Flex>
        </Flex>

        <Flex width="100%" py='75px' bg='brand.gray_1'  px='4vw' flexDirection={'column'} alignItems={'center'}  >
                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <Text maxW="1000px" textAlign={'center'} fontWeight={500}fontSize={'3xl'}>{t('PricingTitle')}</Text>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <Text maxW="1000px" textAlign={'center'} fontWeight={300} color='brand.text_gray' fontSize={'sm'}>{t('PricingDes')}</Text>
                </ScrollAnimation>

                <Grid maxW="1200px" mt='75px'  width="100%" gap={'32px'} templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "repeat(3, 1fr)", xl: "repeat(3, 1fr)" }}>
                {pricingIconsList.map((icon, index)=> (
                    <ScrollAnimation delay={100 * index} key={`improve-${index}`} style={{flex:'1'}} animateIn="fadeIn" animateOnce >
                        <Image height={'40px'} src={icon}/>
                        <Flex mt='20px' gap='10px'> 
                            <Box height={'25px'} width={'2px'} bg='brand.text_blue'/>
                            <Box flex='1'> 
                                <Text zIndex={1} position="relative"  fontSize={'sm'}  fontWeight="medium" overflowWrap="break-word" whiteSpace="pre-wrap" >
                                {t(`PricingFeature${index + 1}`)}
                                </Text>
                                <Text mt='10px' zIndex={1} position="relative" fontSize={'sm'}  color='brand.text_gray' fontWeight={'300'}>
                                    <HighlightText text={t(`PricingFeature${index + 1}Des`)} color1='rgb(100, 116, 145)' color2='rgb(5, 102, 255)'/>
                                </Text>
                            </Box>
                        </Flex>
                    </ScrollAnimation>
                ))}
            </Grid>
        </Flex> 
            
        <Contact/>
        <Footer/>
 

 
      </>)
}

export default Main

export async function getStaticProps({locale}:GetStaticPropsContext) {return {props: {messages: require(`../lang/${locale}.json`)}}}
