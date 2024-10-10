//NEXT
import Head from 'next/head'
import { GetStaticPropsContext } from 'next'
//REACT
import { useState, useEffect, useMemo } from 'react'
import MeshGradient from 'mesh-gradient.js';
const COLORS =   ["#eb75b6",
"#ddf3ff",
"#6e3deb",
"#c92f3c"]
import MeshGradientBackground from '@/Content/Gradient/gradient';
//TRANSLATION
import { useTranslations } from 'next-intl'
//FRONT
import { Flex, Text, Box, Image, Icon, Grid, position } from '@chakra-ui/react'
import ScrollAnimation from "react-animate-on-scroll"
import "animate.css/animate.compat.css"
//COMPONENTS
import Footer from '@/Content/Components/footer'
import FAQS from '@/Content/Components/faqs'
import AnimatedText from '@/Content/Widgets/AnimatedText'
import Chatbot from '@/Content/Widgets/Chatbot'
import AnimatedPercentage from '@/Content/Widgets/AnimatedStat';
//ICONS
import {  FaFile, FaDatabase } from "react-icons/fa6"
import { IoCall, IoSettingsSharp, IoShieldCheckmarkSharp } from "react-icons/io5"
import { MdMarkChatUnread } from "react-icons/md"
import HighlightText from '@/Content/Functions/HighlightText';


const CompanysRiver = () => {

    //COMPANIES LOGOS LIST
    const companiesList:[string, string][] = [
        ['shopify_logo.svg', 'green.100'], ['wordpress_logo.svg', 'gray.200'], 
        ['hubspot_logo.svg', 'orange.200'],['square_logo.svg','purple.50'],
        ['slack_logo.png', 'gray.100'], ['zapier_logo.svg', 'orange.100'], 
        ['stripe_logo.webp', 'purple.100'], ['salesforce_logo.png', 'blue.100'],
        ['mailchimp_logo.svg', 'yellow.100'], ['airtable_logo.png', 'yellow.100'],
        ['zoho_logo.png', 'white'], 
        ['jira_logo.svg', 'white'], ['sage_logo.png', 'green.100'],
        ['google_calendar_logo.webp', 'white'], ['sendgrid_logo.svg', 'blue.100'],
        ['odoo_logo.png', 'purple.100 '], ['drive_logo.png', 'white'],
        ['magento_logo.png', 'orange.100 '], ['prestashop_logo.png', 'gray.100'],
        ['woo_logo.png', 'purple.100 '], ['wix_logo.png', 'gray.100'],
    ]
 
    const randomize = (min:number, max:number) => Math.random() * (max - min) + min
    const generateInitialPositions = (count: number, windowHeight: number) => {
        const positions: { x: number, y: number }[] = []
        const usedX: Set<number> = new Set()
        const usedY: Set<number> = new Set()
        for (let i = 0; i < count; i++) {
          let x, y
          do {x = randomize(0, 80)} while (usedX.has(x))
          usedX.add(x)
          do {y = randomize(0, windowHeight - 100)} while (usedY.has(y))
          usedY.add(y)
          positions.push({ x, y })
        }
        return positions
      }
    
      const [initialPositions, setInitialPositions] = useState<{ x: number, y: number }[]>([])
    
      useEffect(() => {
        const height = window.innerHeight
        const positions = generateInitialPositions(companiesList.length, height * 1.5)
        setInitialPositions(positions)
      }, [])
      
    return (
        <Box position="relative" overflow={'hidden'}  height="100%" width="100%">
            <Flex height={'150vh'}  animation="moveUp 30s linear infinite">
                {initialPositions.map((pos, index) => {
                    const randomScale = randomize(0.7, 0.8);
                    return (
                        <Flex key={index} position="absolute" boxShadow={'rgba(0, 0, 0, 0.1) 0px 15px 35px 0px, rgba(0, 0, 0, 0.07) 0px 3px 10px 0px'} borderRadius="50%" width="100px" height="100px" display="flex"justifyContent="center" alignItems="center"
                        top={`${pos.y}px`} transform={`scale(${randomScale})`} left={`${pos.x}%`} backgroundColor={companiesList[index][1]} >
                        <Image src={`/images/logos/${companiesList[index][0]}`} alt={`Logo ${index}`} width="60px" />
                        </Flex>
                    )
                })}
            </Flex>
        </Box>
        )
}


const Matilda =()=>{

    const gradient = new MeshGradient()
    const canvasId = "my-canvas"
    useEffect(() => {
        gradient.initGradient("#" + canvasId, COLORS);
        const interval = setInterval(() => {
          const randomValue = Math.floor(Math.random() * 1000)
          gradient.changePosition(randomValue)
        }, 6000)
    
        // Limpia el intervalo cuando el componente se desmonte
        return () => {
          clearInterval(interval);
        };
      }, [gradient])
    
    //TRANSLATION
    const t = useTranslations('Matilda')
    const t_chats = useTranslations('Chats')

    //FEATURES LIST
    const featuresList = [
        {max:90, title:t('Automation'), color:'#11efe3', image:'/images/customer-support.png'},
        {max:81, title:t('CSAT'), color:'#0073e6', image:'/images/client.png'},
        {max:93, title:t('ResponseTime'), color:'#00299c', image:'/images/support-team.png'},

    ]
    const improvesList = [
        {title:t('Productivity'), description:t('ProductivityDes'), icon:'/images/icons/arrows.svg'},
        {title:t('Analytics'), description:t('AnalyticsDes'), icon:'/images/icons/chart.png'},
        {title:t('MultiLanguage'), description:t('MultiLanguageDes'), icon:'/images/icons/world.svg'},
        {title:t('Atention'), description:t('AtentionDes'), icon:'/images/icons/clock.svg'},

    ]

    const integrationProcessList = [
        {title:t('Study'), description:t('StudyDes'), icon:'/images/icons/study.svg'},
        {title:t('Development'), description:t('DevelopmentDes'), icon:'/images/icons/code.svg'},
        {title:t('Test'), description:t('TestDes'), icon:'/images/icons/shield.svg'},
        {title:t('FollowUp'), description:t('FollowUpDes'), icon:'/images/icons/check.svg'}, 
    ]
    
    const MatildaChatsComponent =  () => {

        const [currentChat, setCurrentChat] = useState<number>(0)
        const [progress, setProgress] = useState<number[]>([0, 0, 0])
        
        const chats:[number, {text:string, botMessage:boolean}][][] = [
            [
                [1000, { text: t_chats('Chat_21'), botMessage: false }],
                [100, { text: t_chats('Chat_22'), botMessage: true }],
                [2500, { text: t_chats('Chat_23'), botMessage: false }],
                [100, { text: t_chats('Chat_24'), botMessage: true }],
                [2500, { text: t_chats('Chat_25'), botMessage: false }],
                [100, { text: t_chats('Chat_26'), botMessage: true }],
                [2500, { text: t_chats('Chat_27'), botMessage: false }],
                [100, { text: t_chats('Chat_28'), botMessage: true }],
                [2000, { text: t_chats('Chat_29'), botMessage: true }]
            ],
            [
                [1000, { text: t_chats('Chat_31'), botMessage: false }],
                [100, { text: t_chats('Chat_32'), botMessage: true }],
                [2500, { text: t_chats('Chat_33'), botMessage: false }],
                [100, { text: t_chats('Chat_34'), botMessage: true }],
                [2500, { text: t_chats('Chat_35'), botMessage: false }],
            ],
            [
                [1000, { text: t_chats('Chat_41'), botMessage: false }],
                [100, { text: t_chats('Chat_42'), botMessage: true }],
                [2500, { text: t_chats('Chat_43'), botMessage: false }],
                [100, { text: t_chats('Chat_44'), botMessage: true }],
                [2500, { text: t_chats('Chat_45'), botMessage: false }],
                [100, { text: t_chats('Chat_46'), botMessage: true }],
            ],

        ]

        useEffect(() => {
            const totalDuration = chats[currentChat].reduce((acc, [delay]) => acc + delay + 1200, 0) + 3000
            let startTime = Date.now()
            const interval = setInterval(() => {
                const elapsedTime = Date.now() - startTime
                let progressCopy = [...progress]
                progressCopy[currentChat] = Math.min((elapsedTime / totalDuration) * 100, 100)
                setProgress(progressCopy)
                if (elapsedTime >= totalDuration) {
                    clearInterval(interval)
                    if (currentChat < chats.length - 1) setCurrentChat(currentChat + 1)
                }
            }, 100)
            return () => clearInterval(interval)
        }, [currentChat])


        const chatContent = useMemo(() => (
            <Chatbot currentChat={chats[currentChat]} />
        ), [currentChat])

        return(
        <Flex flex={'1'} justifyContent={'center'}   mt={{ base: "6vh", md: "7vh", lg: "8vh", xl: "10vh" }} >
            <ScrollAnimation animateIn="fadeIn" animateOnce > 
                <Box bg='white' borderColor={'#eaebee'} borderWidth={'7px'} height={'590px'}  width={'310px'}   borderRadius={'2rem'}  overflow={'hidden'} boxShadow={'0 44px 89px -18px rgba(50,50,93,.35),0 26px 54px -26px rgba(0,0,0,.3),inset 0 -1px 3px 0 rgba(10,37,64,.35)'} >
                    {chatContent}
                </Box>
            </ScrollAnimation>
        </Flex>)
    }

  
    //FAQS LIST
    const faqsList = [[t('FAQ_1'), t('FAQ_ANSWER_1')], [t('FAQ_2'), t('FAQ_ANSWER_2')], [t('FAQ_3'), t('FAQ_ANSWER_3')], [t('FAQ_4'), t('FAQ_ANSWER_4')], [t('FAQ_5'), t('FAQ_ANSWER_5')], [t('FAQ_6'), t('FAQ_ANSWER_6')], [t('FAQ_7'), t('FAQ_ANSWER_7')]]

    return(<>
        <Head>
            <title>MATIL</title>
            <meta name="description" content="Impulsa tu negocio con soluciones de IA. Mejora la atención al cliente, aumenta las ventas proactivas y envía correos masivos personalizados con nuestra tecnología innovadora. Descubre cómo la inteligencia artificial puede transformar tu empresa."/>
        </Head>

        <Flex flexDir='column' width={'100vw'} alignItems={'center'} >
           
            {/*HERO AND EXAMPLES CHATS COMPONENT*/}
            <Flex flexDir='column' width={'100vw'} alignItems={'center'}> 
                <Flex maxW={'1200px'}> 
                    <Box flex={'1'}  width="100%" position={'relative'} px='4vw' color='black'  py={'150px'}  maxW="1200px" >
                        <Flex  zIndex={2}  flexDir={'column'} > 
                            <Text fontSize={'5xl'}  fontWeight="500" overflowWrap="break-word" whiteSpace="pre-wrap" >
                                <AnimatedText text={t('Hero')}/>
                            </Text>
                            <ScrollAnimation animateIn="fadeInUp" animateOnce delay={t('Hero').split(' ').length * 70 + 300}> 
                                <Text mt='10px' maxW={'800px'} fontWeight={300} fontSize={'sm'}color="brand.text_gray"   overflowWrap="break-word" whiteSpace="pre-wrap">
                                    {t('Subhero')}
                                </Text>
                            </ScrollAnimation>
                        </Flex>
                     </Box>
                     <MatildaChatsComponent/>  
                </Flex>
            </Flex>
            <Box width={'100vw'} zIndex={1} mt='-15vh' height={'60vh'} top={0} clipPath='polygon(0 0, 100% 60%, 100% 100%, 0 40%)'> 
                <MeshGradientBackground/>
            </Box>

            <Flex width="100%" py='75px' justifyContent={'center'} >
                 <Grid maxW="1200px"  width="100%" gap={'32px'} templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "repeat(4, 1fr)", xl: "repeat(4, 1fr)" }}>
                    {improvesList.map((improve, index)=> (
                        <ScrollAnimation delay={100 * index} key={`improve-${index}`} style={{flex:'1'}} animateIn="fadeIn" animateOnce >
                            <Image height={'40px'} src={improve.icon}/>
                            <Flex mt='20px' gap='10px'> 
                                <Box height={'25px'} width={'2px'} bg='brand.text_blue'/>
                                <Box flex='1'> 
                                    <Text zIndex={1} position="relative"  fontSize={'sm'}  fontWeight="medium" overflowWrap="break-word" whiteSpace="pre-wrap" >
                                    {improve.title}
                                    </Text>
                                    <Text mt='10px' zIndex={1} position="relative" fontSize={'sm'}  color='brand.text_gray' fontWeight={'300'}>
                                        <HighlightText text={improve.description} color1='rgb(100, 116, 145)' color2='rgb(5, 102, 255)'/>
                                    </Text>
                                </Box>
                            </Flex>
                        </ScrollAnimation>
                    ))}
                </Grid>
            </Flex> 


            <Flex width="100%" textAlign={'center'}  bg='brand.white_bg'  flexDirection={'column'} alignItems={'center'} justifyContent={'center'} py='15vh'   >   
                <Text maxW="1000px"  fontSize={'3xl'} mb='7vh'>{t('FeaturesTitle')}</Text>
                <Flex maxW="1200px"  width="100%" color='white'  gap={'32px'} flexDir={{ base: "column", md: "column", lg: "row", xl: "row" }}>
                    {featuresList.map((feature, index)=> (
                        <ScrollAnimation delay={100 * index} key={`feature-${index}`} style={{flex:'1'}} animateIn="fadeIn" animateOnce >
                            <Flex flexDir={'column'} justifyContent={'space-between'} position='relative' flex='1' textAlign={'center'} overflow={'hidden'} borderRadius={'.5rem'} bg={`url(${feature.image})`} bgSize="cover" bgPosition="center" bgRepeat="no-repeat"   py='60px' boxShadow={'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px'}>
                                <Box  position="absolute" top={0} left={0} right={0} bottom={0} bg={`linear-gradient(transparent 0%, ${feature.color})`} zIndex={0} />   
                                <Text zIndex={1} position="relative" fontSize={'5xl'}  fontWeight="600" overflowWrap="break-word" whiteSpace="pre-wrap" >
                                    {<AnimatedPercentage start={0} end={feature.max}/>} %
                                </Text>
                                <Text zIndex={1} position="relative" fontSize={'md'} fontWeight={'500'}>{feature.title}</Text>
                            </Flex>
                        </ScrollAnimation>
                    ))}
                </Flex>
            </Flex>
      
            {/*MATILDA FEATURES*/}
            <Box  bg='brand.white_bg'>
                <Flex  bg='brand.black_button'  clipPath='polygon(0 100px, 100% 0, 100% 100%, 0 100%)' width={'100vw'} justifyContent={'center'}  > 
                    <Flex px='4vw'   width="100vw"  flexDir={'column'}  alignItems={'center'}   py={{ base:"calc(5vh + 100px)", md: "calc(7vh + 100px)", lg: "calc(10vh + 100px)", xl: "calc(12vh + 100px)" }} > 
                            
                            {/*FIRST LINE*/}
                            <Flex maxW="1000px" width="100%"  gap={'32px'} flexDir={{ base: "column", md: "column", lg: "row-reverse", xl: "row-reverse" }}>
                                <ScrollAnimation style={{flex:'2'}} animateIn="fadeInUp" animateOnce >
                                    <Text textAlign={{ base: 'center',sm:'center', md: 'start', lg: 'start' }} color='white' flex='2' fontSize={{ base: '2em',sm:'2.1em', md: '2.3em', lg: '2.5em' }}><span style={{color:'rgb(5, 102, 255)'}}>Matilda</span> {t('Matilda_Feature')}</Text>
                                </ScrollAnimation >

                                <ScrollAnimation style={{flex:'1'}} animateIn="fadeIn" animateOnce >
                                    <Box bg='brand.text_blue'  borderRadius={'1rem'} p='20px'>
                                        <Flex gap='15px' alignItems={'center'} color='white'> 
                                            <Icon as={IoCall} color='' boxSize={'35px'}/>
                                            <Text fontSize={{base: '1em',sm:'1em', md: '1.1em', lg: '1.2em' }}>{t('Features_Calls')}</Text>
                                        </Flex>
                                        <Box width={'100%'} height={'1px'} bg='gray.300' mb='20px' mt='20px'/>
                                        <Text fontWeight={300} color='gray.200'  fontSize={{base: '.8em',sm:'.8em', md: '.85em', lg: '.9em' }}>{t('Features_Calls_Subtitle')}</Text>
                                    </Box>
                                </ScrollAnimation>
                            </Flex> 
                        
                            {/*SECOND LINE*/}
                            <Flex maxW="1000px" width="100%" gap={{ base: "30px", md: "30px", lg: "40px", xl: "50px" }} mt={{ base: "30px", md: "30px", lg: "40px", xl: "50px" }}  flexDir={{ base: "column", md: "column", lg: "row-reverse", xl: "row-reverse" }}>
                                <ScrollAnimation style={{flex:'1'}} animateIn="fadeIn" animateOnce >
                                    <Box bg='brand.text_blue' color='white' borderRadius={'1rem'} p='20px' height={'100%'}>
                                        <Flex gap='15px' alignItems={'center'}> 
                                            <Icon as={FaFile}  boxSize={'34px'}/>
                                            <Text fontSize={{base: '1em',sm:'1em', md: '1.1em', lg: '1.2em' }}>{t('Features_Files')}</Text>
                                        </Flex>
                                        <Box width={'100%'} height={'1px'} bg='gray.300' mb='20px' mt='20px'/>
                                        <Text fontWeight={300} color='gray.200'  fontSize={{base: '.8em',sm:'.8em', md: '.85em', lg: '.9em' }}>{t('Features_Files_Subtitle')}</Text>
                                    </Box>   
                                </ScrollAnimation>

                                <ScrollAnimation  style={{flex:'2'}}animateIn="fadeIn" animateOnce >
                                    <Box  bg='gray.100' borderRadius={'1rem'} p='20px'  height={'100%'}>
                                        <Flex gap='15px' color='black'  alignItems={'center'}> 
                                            <Icon as={MdMarkChatUnread}  boxSize={'35px'}/>
                                            <Text fontSize={{base: '1em',sm:'1em', md: '1.1em', lg: '1.2em' }}>{t('Features_Conversation')}</Text>
                                        </Flex>
                                        <Box width={'100%'} height={'1px'} bg='gray.300' mb='20px' mt='20px'/>
                                        <Text fontWeight={300} color='gray.600'  fontSize={{base: '.8em',sm:'.8em', md: '.85em', lg: '.9em' }}>{t('Features_Conversation_Subtitle')}</Text>
                                    </Box>
                                </ScrollAnimation>
                            </Flex> 

                            {/*THIRD LINE*/}
                            <Flex maxW="1000px" width="100%"  gap={{base: "30px", md: "30px", lg: "40px", xl: "50px" }}  mt={{ base: "30px", md: "30px", lg: "40px", xl: "50px" }}  flexDir={{ base: "column", md: "column", lg: "row", xl: "row" }}>
                                
                                <ScrollAnimation style={{flex:'1'}} animateIn="fadeIn" animateOnce >
                                    <Box bg='brand.text_blue' color='white' borderRadius={'1rem'} p='20px' height={'100%'}>
                                        <Flex gap='15px' alignItems={'center'}> 
                                            <Icon as={FaDatabase}  boxSize={'34px'}/>
                                            <Text fontSize={{base: '1em',sm:'1em', md: '1.1em', lg: '1.2em' }}>{t('Features_Work')}</Text>
                                        </Flex>
                                        <Box width={'100%'} height={'1px'} bg='gray.300' mb='20px' mt='20px'/>
                                        <Text fontWeight={300} color='gray.200'  fontSize={{base: '.8em',sm:'.8em', md: '.85em', lg: '.9em' }}>{t('Features_Work_Subtitle')}</Text>
                                    </Box>   
                                </ScrollAnimation>

                                <ScrollAnimation style={{flex:'1'}} animateIn="fadeIn" animateOnce >
                                    <Box bg='brand.text_blue'  borderRadius={'1rem'} p='20px'>
                                        <Flex gap='15px' alignItems={'center'} color='white'> 
                                            <Icon as={IoSettingsSharp}  boxSize={'35px'}/>
                                            <Text fontSize={{base: '1em',sm:'1em', md: '1.1em', lg: '1.2em' }}>{t('Features_Edit')}</Text>
                                        </Flex>
                                        <Box width={'100%'} height={'1px'} bg='gray.300' mb='20px' mt='20px'/>
                                        <Text fontWeight={300} color='gray.200'  fontSize={{base: '.8em',sm:'.8em', md: '.85em', lg: '.9em' }}>{t('Features_Edit_Subtitle')}</Text>
                                    </Box>
                                </ScrollAnimation>
                            </Flex>

                            {/*FOURTH LINE*/}
                            <Flex maxW="1000px" width="100%"  gap={{ base: "30px", md: "30px", lg: "40px", xl: "50px" }}  mt={{ base: "30px", md: "30px", lg: "40px", xl: "50px" }}  flexDir={{ base: "column", md: "column", lg: "row-reverse", xl: "row-reverse" }}>  
                                <ScrollAnimation style={{flex:'1'}} animateIn="fadeIn" animateOnce >
                                    <Box bg='brand.text_blue'  borderRadius={'1rem'} p='20px' height={'100%'}> 
                                        <Flex gap='15px' alignItems={'center'} color='white'> 
                                            <Icon as={IoShieldCheckmarkSharp}  boxSize={'35px'}/>
                                            <Text fontSize={{base: '1em',sm:'1em', md: '1.1em', lg: '1.2em' }}>{t('Features_Data')}</Text>
                                        </Flex>
                                        <Box width={'100%'} height={'1px'} bg='gray.300' mb='20px' mt='20px'/>
                                        <Text fontWeight={300} color='gray.200'  fontSize={{base: '.8em',sm:'.8em', md: '.85em', lg: '.9em' }}>{t('Features_Data_Subtitle')}</Text>
                                    </Box>
                                </ScrollAnimation>

                                <ScrollAnimation style={{flex:'2'}} animateIn="fadeInUp" animateOnce >
                                    <Text textAlign={{ base: 'center',sm:'center', md: 'start', lg: 'start' }}  color='white' fontSize={{ base: '2em',sm:'2.1em', md: '2.3em', lg: '2.5em' }}>{t('Matilda_Agents')}</Text>
                                </ScrollAnimation >
                            </Flex>
                        
                    </Flex>
                </Flex>
            </Box>

            <Flex width="100%" py='100px' px='4vw' bg='brand.white_bg' justifyContent={'center'} >
                <Box maxW={'1200px'} width={'100%'}> 
                    <Text fontSize={'2xl'}  fontWeight="500" overflowWrap="break-word" whiteSpace="pre-wrap" >{t('IntegrationTitle')}</Text>
                    <Text  fontSize={'sm'} mt='20px'  fontWeight="300" color='brand.text_gray' overflowWrap="break-word" whiteSpace="pre-wrap" >{t('IntegrationTitleDes')}</Text>
                    <Grid maxW="1200px" mt='50px'  width="100%" gap='32px' templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "repeat(2, 1fr)", xl: "repeat(2, 1fr)" }}>
                        {integrationProcessList.map((improve, index)=> (
                            <ScrollAnimation delay={100 * index} key={`improve-${index}`} style={{flex:'1'}} animateIn="fadeIn" animateOnce >
                                <Image height={'40px'} src={improve.icon}/>
                                <Flex mt='20px' gap='10px'> 
                                    <Box height={'25px'} width={'2px'} bg='brand.text_blue'/>
                                    <Box flex='1'> 
                                        <Text zIndex={1} position="relative"  fontSize={'sm'}  fontWeight="500" overflowWrap="break-word" whiteSpace="pre-wrap" >
                                        {improve.title}
                                        </Text>
                                        <Text mt='10px' zIndex={1} position="relative" fontSize={'sm'}   color='brand.text_gray' fontWeight={'300'}>
                                            <HighlightText text={improve.description} color1='rgb(100, 116, 145)' color2='rgb(5, 102, 255)'/>
                                        </Text>
                                    </Box>
                                </Flex>
                            </ScrollAnimation>
                        ))}
                    </Grid>
                </Box>
            </Flex> 
            
            <Flex width="100%"   justifyContent={'center'} px='4vw' overflow={'hidden'} >
                <Flex gap='32px' maxW={'1200px'} width={'100%'}> 
                    <Box py='75px' flex={'1'} > 
                        <Text fontSize={'xl'}  fontWeight="500" overflowWrap="break-word" whiteSpace="pre-wrap" >{t('OtherIntegrations')}</Text>
                        <Text  fontSize={'sm'} mt='20px'  fontWeight="300" color='brand.text_gray' overflowWrap="break-word" whiteSpace="pre-wrap" >{t('OtherIntegrationsDes')}</Text>
                    </Box>
                    <Box flex='1' height={'400px'}overflow={'hidden'}>
                        <CompanysRiver/>
                    </Box>
                </Flex>
            </Flex>

            <FAQS faqsList={faqsList}/>
        </Flex>

    <Footer/>
    </>)
}

export default Matilda

export async function getStaticProps({locale}:GetStaticPropsContext) {return {props: {messages: require(`../lang/${locale}.json`)}}}
