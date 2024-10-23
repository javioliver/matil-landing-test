//NEXT
import { useRouter } from 'next/router'
import { GetStaticPropsContext } from 'next'
import Image from 'next/image'
//TRANSLATION
import { useTranslations } from 'next-intl'
//FRONT
import { Flex, Text, Box, Grid } from '@chakra-ui/react'
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

  const matildaChat:[number, {text:string, botMessage:boolean, id:string}][] = [
        [1000, {id:'1', text: t_chats('Chat_11'), botMessage: false }],
        [100, { id:'2',text: t_chats('Chat_12'), botMessage: true }],
        [3500, {id:'3', text: t_chats('Chat_13'), botMessage: false }],
        [100, { id:'4',text: t_chats('Chat_14'), botMessage: true }],
        [4500, {id:'5', text: t_chats('Chat_15'), botMessage: false }],
        [100, {id:'6', text: t_chats('Chat_16'), botMessage: true }]

    ]

    const platformIcons = ['/images/logos/whatsapp.png', '/images/logos/instagram.png', '/images/logos/mail.png', '/images/logos/messenger.png',  '/images/logos/google-business.svg', '/images/logos/call.png']
    const pricingIconsList = ['/images/icons/study-dark.svg','/images/icons/channels.svg', '/images/icons/save-money.svg']
    
    return (<>

        <Flex position={'relative'} flexDir='column' width={'100vw'} alignItems={'center'}>
            <MeshGradientBackground colors={["#58daf4", "#88c8f4", "#0566ff"]}/>
             
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
                    <ScrollAnimation  animateIn="fadeIn" animateOnce delay={(t('Hero').split(' ').length) * 100 + 300} style={{position:'relative', zIndex:10,marginTop:'50px',  width:'100%', maxWidth:'1200px'}} >
                        <Image   width={0} style={{width:'100%'}} height={0} alt={t('AltImage1')} src={`/images/main.svg`} />
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
            <Flex width="100%" maxW="1200px" gap='50px' justifyContent={{ md: 'space-between' }} py={{ base: "14vh", md: "14vh", lg: "15vh", xl: "17vh" }}  flexDirection={{ base: 'column', md: 'row' }}>
 
                <Box flex={'3'}  width={{ base: '100%', md: 'auto' }}>
                    <ScrollAnimation animateIn="fadeIn" animateOnce>
                        <Flex display={'inline-block'} justifyContent={'center'} bgGradient='linear(to-br, #58daf4, rgb(5, 102, 255))' alignItems={'center'} bg={''} color={'white'} px='15px' py='3px' borderRadius={'2rem'}>
                            <Text fontSize={'md'} fontWeight={500}>{t('Platform')}</Text>
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
      
                <Flex flex='5' height={'100%'}> 
                     <Box bg='rgb(0, 27, 71)' overflow={'hidden'} position={'relative'} borderRadius={'1.5rem'} >
                        <Flex height={'100px'} gap='20px' alignItems={'center'} ml='50px'>
                            {platformIcons.map((icon, index) => (
                                <ScrollAnimation key={`icons-${index}`}  animateIn="fadeIn" delay={index * 100}  animateOnce>
                                    <Flex bg='white' alignItems={'center'} justifyContent={'center'} key={`platform-icon-${index}`} borderRadius={'full'} height={'60px'} width={'60px'}>
                                        <Image width={35} height={35} src={icon} alt={t(`AltImage${index + 2}`)}/>
                                    </Flex>
                                </ScrollAnimation>
                            ))}
                        </Flex>       
                        <ScrollAnimation style={{flex:'1', marginLeft:'50px'}} animateIn="fadeIn" animateOnce>
                            <Image  width={0} height={0} style={{width:'100%'}} alt={t('AltImage7')} src='/images/tickets-table.svg'/>
                        </ScrollAnimation>
                    </Box>
                 </Flex>
            </Flex> 
        </Flex>

        <Flex width="100%"   justifyContent={'center'} px='4vw' overflow={'hidden'} >
            <Flex gap='32px'pt={{ base: '75px', md: '0' }}  maxW={'1200px'} width={'100%'}  flexDirection={{ base: 'column', md: 'row' }}> 
                
                <Flex flexDir={'column'}  justifyContent={'center'} flex={{ base: '', md: '1' }} > 
                    <ScrollAnimation animateIn="fadeIn" animateOnce>
                        <Text fontSize={'2xl'}  fontWeight="500" overflowWrap="break-word" whiteSpace="pre-wrap" >{t('Integrations_Title')}</Text>
                        <Text  fontSize={'sm'} mt='20px'  fontWeight="300" color='brand.text_gray' overflowWrap="break-word" whiteSpace="pre-wrap" >{t('Integrations_Subtitle')}</Text>
                    </ScrollAnimation>
                </Flex>
                <Box flex={{ base: '', md: '1' }} height={'400px'}overflow={'hidden'}>
                    <ScrollAnimation  animateIn="fadeIn" animateOnce>
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
                        <Image alt=''  height={50} width={50} src={icon}/>
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
