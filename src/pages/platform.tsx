//NEXT
import Head from 'next/head'
import { useRouter } from 'next/router'
import { GetStaticPropsContext } from 'next'
//REACT
import { useState, useEffect, useRef } from 'react'
//TRANSLATION
import { useTranslations } from 'next-intl'
//FRONT
import { Flex, Text, Box, Grid, Image } from '@chakra-ui/react'
import ScrollAnimation from "react-animate-on-scroll"
import HighlightText from '@/Content/Functions/HighlightText'
import "animate.css/animate.compat.css"
//COMPONENTS
import Footer from '@/Content/Components/footer'
import AnimatedText from '@/Content/Widgets/AnimatedText'
import FAQS from '@/Content/Components/faqs'

const FloatingCards = ({scrollY, isComputerWidth}:{scrollY:number, isComputerWidth:boolean}) => {

    const t = useTranslations('Platform')
    const floatingCards = [
        {title:t('Card_1'), description:'3f4ihevi3rf iug3rebgfi 3reiguv r3fr3,mvr,mrevb m,ebef23ef, ew3fn3erw gvijr3iuvr ',image:''},
        {title:t('Card_2'), description:'3f4ihevi3rf iug3rebgfi 3reiguv r3g 3fr3,mvr,mrevb m,ebef23ef, ew3fn3erw gvijr3iuvrvijr3iuvr ',image:''},
        {title:t('Card_3'), description:'3f4ihevi3rf iug3rebgfi 3reiguv r3g 3fr3,mvr,mrevb m,ebef23ef, ew3fn3erw gvijr3iuvrvijr3iuvr ', image:''}
    ] 

    const [selectedIndex, setSelectedIndex] = useState<number>(0)
    useEffect(() => {
        const interval = setInterval(() => {setSelectedIndex((prevIndex) => (prevIndex + 1) % 3)}, 4000)
         return () => {clearInterval(interval)}
      }, [])
     

    const areCardsFloating = (scrollY < 150 && isComputerWidth)
    return (<>
        {floatingCards.map((card, index) => {
            let animationIndex = 0
            if (selectedIndex === 0) animationIndex = index
            else if (selectedIndex === 1) animationIndex = (index + 2) % 3
            else if (selectedIndex === 2) animationIndex = (index + 1) % 3
              
            return (
                
            <Flex flexDir={'column'} overflow={'hidden'} position={isComputerWidth?'absolute':'relative'} mt={isComputerWidth?'':'32px'} top={isComputerWidth ? areCardsFloating?`${-550 + scrollY}px`:'100px':``} left={isComputerWidth?areCardsFloating?'55vw':400 + index * 400:''} key={`card-${index}`} boxShadow={'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px'} zIndex={1000 - animationIndex} borderRadius={'.5rem'} height={'470px'} width={'360px'}  transition={'all .7s ease'}  transform={areCardsFloating?`rotate(${8 *animationIndex}deg)  translateY(${animationIndex * 30}px) translateX(${animationIndex * 90}px) scale(${1 - animationIndex * 0.07})`:''} >
                <Box bg='rgba(256,256,256,0.5)' height='70%'>
                </Box>
                <Box p='20px' height='30%' bg='white' > 
                    <Text fontWeight={500} fontSize={'lg'}>{card.title}</Text>
                    <Text fontWeight={300} color='brand.text_gray' fontSize={'xs'}>{card.description}</Text>
                </Box>
            </Flex>
            )
        })}
    </>
        
    )
}
const Platform =()=>{

    //TRANSLATION
    const t = useTranslations('Platform')

    const heroRef = useRef<HTMLDivElement>(null)

    //FAQS LIST
    const faqsList = [[t('FAQ_1'), t('FAQ_ANSWER_1')], [t('FAQ_2'), t('FAQ_ANSWER_2')], [t('FAQ_3'), t('FAQ_ANSWER_3')], [t('FAQ_4'), t('FAQ_ANSWER_4')], [t('FAQ_5'), t('FAQ_ANSWER_5')], [t('FAQ_6'), t('FAQ_ANSWER_6')], [t('FAQ_7'), t('FAQ_ANSWER_7')]]

    
    //MAIN SECTIONS LIST
    const mainSectionList = [
        {title:'Tilda', color:'#11efe3'},
        {title:'HelpCenter', color:'#0073e6'},
        {title:'Productivity', color:'#00299c'},
    ]

    //CHANNELS LIST
    const channelsList:any[] = [
        {title:'WebChat', icon:'/images/icons/chat.svg'},
        {title:'Mail', icon:'/images/icons/mail.svg'},
        {title:'Call',  icon:'/images/icons/call.svg'},
        {title:'SocialMedia',  icon:'/images/icons/social-network.svg'},
    ]

    //SCROLL LOGIC
    const [scrollY, setScrollY] = useState(0)
    const [windowHeight, setWindowHeight] = useState(0)
    const [isComputerWidth, setIsComputerWidth] = useState(true)

    useEffect(() => {
        const handleScroll = () => {setScrollY(window.scrollY)}
        window.addEventListener('scroll', handleScroll)
        setWindowHeight(window.innerHeight)
        const handleResize = () => {setIsComputerWidth(window.innerWidth > 900)}
        handleResize()
        return () => {window.removeEventListener('scroll', handleScroll)}
    }, [])

    return(<>
        <Head>
            <title>MATIL</title>
            <meta name="description" content="Impulsa tu negocio con soluciones de IA. Mejora la atención al cliente, aumenta las ventas proactivas y envía correos masivos personalizados con nuestra tecnología innovadora. Descubre cómo la inteligencia artificial puede transformar tu empresa."/>
        </Head>
 
        <Flex ref={heroRef} flexDir='column' position={'sticky'} zIndex={1} top='0'bgGradient='linear(to-br,#00299c,rgb(0, 20, 51) )' width={'100vw'}alignItems={'center'}> 
          
                <Flex maxW={'1200px'} > 
                    <Box flex={'1'}  width="100%" position={'relative'} px='4vw' color='black'  py={'150px'}  maxW="1200px" >
                        <Flex  zIndex={2}  flexDir={'column'} > 
                            <Text color={'white'} fontSize={'5xl'}  fontWeight="500" overflowWrap="break-word" whiteSpace="pre-wrap" >
                                <AnimatedText text={t('Hero')}/>
                            </Text>
                            <ScrollAnimation animateIn="fadeInUp" animateOnce delay={t('Hero').split(' ').length * 100}> 
                                <Text mt='10px' maxW={'800px'} fontWeight={300} fontSize={'sm'}color="brand.gray_2"   overflowWrap="break-word" whiteSpace="pre-wrap">
                                    {t('Subhero')}
                                </Text>
                            </ScrollAnimation>
                        </Flex>
                     </Box>

                    <Box flex='1'   display={{ base: 'none', md: 'block' }}  ></Box>
                </Flex>
        </Flex>

        
        <Flex flexDir='column' px='4vw' zIndex={10} py='75px' position={{ base: "relative", md: 'absolute'}}  bg='white'  width={'100vw'} alignItems={'center'}> 
           
            {isComputerWidth ?
                <ScrollAnimation animateIn="fadeIn" animateOnce delay={t('Hero').split(' ').length * 100 + 300} style={{maxWidth:'1200px', display:'flex', height:'550px', width:'100%', justifyCintent:'space-between', gap:'32px', zIndex:2 }}> 
                    <FloatingCards scrollY={scrollY} isComputerWidth={isComputerWidth}/>
                </ScrollAnimation>
            :
            <ScrollAnimation animateIn="fadeIn" animateOnce> 
                <FloatingCards scrollY={scrollY} isComputerWidth={isComputerWidth}/>
            </ScrollAnimation>}

            <Box w={'100%'}  maxW={'1200px'} zIndex={3}  pb={isComputerWidth?'75px':''}  pt={isComputerWidth?'':'75px'} transition={'all .7s ease'}  transform={isComputerWidth?`translateY(${scrollY < 150?'-550px':'0px'})`:''}>
                {mainSectionList.map((section, index) => (
                    <Flex key={`section-${index}`} gap='32px' mt={isComputerWidth?'75px':'30px' } flexDir={isComputerWidth?index % 2 === 0?'row':'row-reverse':'column'}  >
                        <Box flex='1'> 
                            <ScrollAnimation animateIn="fadeIn" animateOnce> 
                                <Flex display={'inline-block'} justifyContent={'center'} bgGradient='linear(to-br, #00299c, rgb(0, 20, 51))' alignItems={'center'}  color={'white'} px='15px' py='3px' borderRadius={'2rem'}>
                                    <Text fontSize={'md'} fontWeight={500}> {t(section.title)}</Text>
                                </Flex>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeIn" animateOnce> 
                                <Text fontSize={'2xl'} mt='10px' fontWeight={'500'}>{t(`${section.title}Title`)}</Text>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeIn" animateOnce> 
                                <Text fontSize={'xs'} color={'brand.text_gray'} fontWeight={'300'}>{t(`${section.title}Des`)}</Text>
                            </ScrollAnimation>

                            {Array.from({length:3}).map((_, index2) => (<> 
                                <ScrollAnimation animateIn="fadeIn" animateOnce> 
                                    <Flex  gap='10px' mt='20px' > 
                                        <Box height={'30px'} width={'3px'} bg={'#00299c'}/>
                                        <Box flex='1'> 
                                            <Text fontWeight={500} fontSize={'md'}>{t(`${section.title}Feature_${index2 + 1}`)}</Text>
                                            <Text mt='10px' zIndex={1} position="relative" fontSize={'xs'}  color='brand.text_gray' fontWeight={'300'}>
                                                <HighlightText text={t(`${section.title}FeatureDes_${index2 + 1}`)} color1='rgb(100, 116, 145)' color2='rgb(5, 102, 255)'/>
                                            </Text>
                                        </Box>
                                    </Flex>
                                </ScrollAnimation>

                                </>
                            ))}
                        </Box>
                        <ScrollAnimation animateIn="fadeIn" style={{flex:'1'}} animateOnce> 

                        </ScrollAnimation>
                    </Flex>
                ))}
            </Box>

            <Flex alignItems='center' flexDir={'column'} py='75px'  maxW={'1200px'}  w={'100%'} justifyContent={'space-between'}   gap='32px' zIndex={2} > 
                <ScrollAnimation animateIn="fadeIn" animateOnce> 
                    <Text fontSize={'4xl'} fontWeight={'500'}>{t(`ChannelsTitle`)}</Text>
                </ScrollAnimation>
                <Grid maxW="1000px" mt='50px'  width="100%" gap='32px' templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "repeat(2, 1fr)", xl: "repeat(2, 1fr)" }}>
                    {channelsList.map((cha, index)=> (
                        <ScrollAnimation delay={100 * index} key={`feature-${index}`} style={{flex:'1'}} animateIn="fadeIn" animateOnce >
                            <Flex flexDir={'column'}  bg='rgb(0, 20, 51)' color={'white'} justifyContent={'space-between'} position='relative' flex='1' overflow={'hidden'} borderRadius={'1rem'}  p='30px' boxShadow={'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px'}>
                                <Box  position="absolute" top={0} left={0} right={0} bottom={0}  zIndex={0} />
                                <Flex gap='20px' alignItems={'center'}>
                                    <Image height='40px' src={cha.icon}/>
                                    <Text fontWeight={500} fontSize={'xl'}>{t(cha.title)}</Text>
                                </Flex>
                                <Box mt='20px' mb='20px' width={'100%'} height={'1px'} bg='brand.gray_2'/>
                                <Text zIndex={1} position="relative" color='brand.gray_2' fontSize={'sm'} fontWeight={'300'}>{t(`${cha.title}Des`)}</Text>
                            </Flex>
                        </ScrollAnimation>
                    ))}
                </Grid>
            </Flex>

            <FAQS faqsList={faqsList}/>
            <Footer/>
 
        </Flex>
 
        <Box height={`${windowHeight - (heroRef.current?.getBoundingClientRect().bottom || 0)}`}/>
  
    </>)
}

export default Platform

export async function getStaticProps({locale}:GetStaticPropsContext) {return {props: {messages: require(`../lang/${locale}.json`)}}}
