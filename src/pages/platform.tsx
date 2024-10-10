//NEXT
import Head from 'next/head'
import { useRouter } from 'next/router'
import { GetStaticPropsContext } from 'next'
//REACT
import { useState, useEffect, useMemo, useRef } from 'react'
//TRANSLATION
import { useTranslations } from 'next-intl'
//FRONT
import { Flex, Text, Box } from '@chakra-ui/react'
import ScrollAnimation from "react-animate-on-scroll"
import "animate.css/animate.compat.css"
//COMPONENTS
import Footer from '@/Content/Components/footer'
import AnimatedText from '@/Content/Widgets/AnimatedText'
import FAQS from '@/Content/Components/faqs'

const FloatingCards = ({scrollY}:{scrollY:number}) => {

    const t = useTranslations('Platform')
    const floatingCards = [
        {title:t('Card_1'), description:'3f4ihevi3rf iug3rebgfi 3reiguv r3fr3,mvr,mrevb m,ebef23ef, ew3fn3erw gvijr3iuvr ',image:''},
        {title:t('Card_2'), description:'3f4ihevi3rf iug3rebgfi 3reiguv r3g 3fr3,mvr,mrevb m,ebef23ef, ew3fn3erw gvijr3iuvrvijr3iuvr ',image:''},
        {title:t('Card_3'), description:'3f4ihevi3rf iug3rebgfi 3reiguv r3g 3fr3,mvr,mrevb m,ebef23ef, ew3fn3erw gvijr3iuvrvijr3iuvr ', image:''}
    ] 

    const [selectedIndex, setSelectedIndex] = useState<number>(0)
    useEffect(() => {
        const interval = setInterval(() => {setSelectedIndex((prevIndex) => (prevIndex + 1) % 3)}, 4000)
        return () => clearInterval(interval)
      }, []);
    
    const areCardsFloating = scrollY < 150
    return (<>
        {floatingCards.map((card, index) => {
            let animationIndex = 0
            if (selectedIndex === 0) animationIndex = index
            else if (selectedIndex === 1) animationIndex = (index + 2) % 3
            else if (selectedIndex === 2) animationIndex = (index + 1) % 3
              
            return (
            <Flex flexDir={'column'} overflow={'hidden'} position={'absolute'} top={areCardsFloating?`${-550 + scrollY}px`:'100px'} left={areCardsFloating?'55vw':400 + index * 400} key={`card-${index}`} boxShadow={'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px'} zIndex={1000 - animationIndex} borderRadius={'.5rem'} height={'470px'} width={'360px'}  transition={'all .7s ease'}  transform={areCardsFloating?`rotate(${8 *animationIndex}deg)  translateY(${animationIndex * 30}px) translateX(${animationIndex * 90}px) scale(${1 - animationIndex * 0.07})`:''} >
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
    const mainSectionList = [['Tilda', ''],['HelpCenter',''], ['Productivity', '']]

    //SCROLL LOGIC
    const [scrollY, setScrollY] = useState(0)
    const [windowHeight, setWindowHeight] = useState(0)

    useEffect(() => {
        const handleScroll = () => {setScrollY(window.scrollY)}
        window.addEventListener('scroll', handleScroll)
        setWindowHeight(window.innerHeight)
        return () => {window.removeEventListener('scroll', handleScroll)}
    }, [])

    return(<>
        <Head>
            <title>MATIL</title>
            <meta name="description" content="Impulsa tu negocio con soluciones de IA. Mejora la atención al cliente, aumenta las ventas proactivas y envía correos masivos personalizados con nuestra tecnología innovadora. Descubre cómo la inteligencia artificial puede transformar tu empresa."/>
        </Head>
 
        <Flex ref={heroRef} flexDir='column' position={'sticky'} zIndex={1} top='0' bg='brand.black_button' opacity={0.99} width={'100vw'}alignItems={'center'}> 
          
                <Flex maxW={'1200px'} > 
                    <Box flex={'1'}  width="100%" position={'relative'} px='4vw' color='black'  py={'150px'}  maxW="1200px" >
                        <Flex  zIndex={2}  flexDir={'column'} > 
                            <Text color={'white'} fontSize={'5xl'}  fontWeight="500" overflowWrap="break-word" whiteSpace="pre-wrap" >
                                <AnimatedText text={t('Hero')}/>
                            </Text>
                            <ScrollAnimation animateIn="fadeInUp" animateOnce delay={t('Hero').split(' ').length * 70 + 300}> 
                                <Text mt='10px' maxW={'800px'} fontWeight={300} fontSize={'sm'}color="brand.gray_2"   overflowWrap="break-word" whiteSpace="pre-wrap">
                                    {t('Subhero')}
                                </Text>
                            </ScrollAnimation>
                        </Flex>
                     </Box>

                    <Box flex='1' >
                   
                    </Box>

                </Flex>
        </Flex>

        
        <Flex flexDir='column' zIndex={10} py='75px' position={'absolute'}  bg='white'  width={'100vw'} alignItems={'center'}> 
           
            <Flex flex='column' maxW={'1200px'} height={'550px'} w={'100%'} justifyContent={'space-between'}   gap='32px' zIndex={2} > 
                <FloatingCards scrollY={scrollY}/>
            </Flex>
            <Box w={'100%'} maxW={'1200px'} zIndex={3}  pb='75px'  transition={'all .7s ease'}  transform={`translateY(${scrollY < 150?'-550px':'0px'})`}>
                {mainSectionList.map((section, index) => (
                    <Flex key={`section-${index}`} gap='32px' mt='75px' flexDir={index % 2 === 0?'row':'row-reverse'}  >
                        <Box flex='1'> 
                            <Text fontSize={'lg'} color='brand.text_blue' fontWeight={'500'}>{t(section[0])}</Text>
                            <Text fontSize={'2xl'} fontWeight={'500'}>{t(`${section[0]}Title`)}</Text>
                            <Text fontSize={'sm'} color={'brand.text_gray'} fontWeight={'300'}>{t(`${section[0]}Des`)}</Text>

                        </Box>
                        <Box flex='1'>

                        </Box>
                    </Flex>
                ))}
            </Box>
            
         
            <FAQS faqsList={faqsList}/>
            <Footer/>
 
        </Flex>
 
        <Box height={`${windowHeight - (heroRef.current?.getBoundingClientRect().bottom || 0)}`}/>
  
    </>)
}

export default Platform

export async function getStaticProps({locale}:GetStaticPropsContext) {return {props: {messages: require(`../lang/${locale}.json`)}}}
