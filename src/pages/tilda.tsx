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
import { Flex, Text, Box, Image, Icon } from '@chakra-ui/react'
import ScrollAnimation from "react-animate-on-scroll"
import "animate.css/animate.compat.css"
//COMPONENTS
import Footer from '@/Content/Components/footer'
import FAQS from '@/Content/Components/faqs'
import AnimatedText from '@/Content/Widgets/AnimatedText'
import Chatbot from '@/Content/Widgets/Chatbot'

//ICONS
import { GiVelociraptor } from "react-icons/gi"
import { FaChartPie, FaClipboardCheck, FaLanguage, FaFile, FaDatabase } from "react-icons/fa6"
import { IoPeople, IoCall, IoSettingsSharp, IoShieldCheckmarkSharp } from "react-icons/io5"
import { MdMarkChatUnread } from "react-icons/md"

const Matilda =()=>{


    const gradient = new MeshGradient();
    const canvasId = "my-canvas"
  
    useEffect(() => {
        // Inicializa el gradiente
        gradient.initGradient("#" + canvasId, COLORS);
    
        // Inicia un intervalo para mover el mesh cada 100ms
        const interval = setInterval(() => {
          const randomValue = Math.floor(Math.random() * 1000); // Genera un valor aleatorio para el mesh
          gradient.changePosition(randomValue); // Cambia la posición del mesh
        }, 6000); // Cambia el valor de tiempo para controlar la velocidad de la animación
    
        // Limpia el intervalo cuando el componente se desmonte
        return () => {
          clearInterval(interval);
        };
      }, [gradient]);
    
    //TRANSLATION
    const t = useTranslations('Matilda')
    const t_chats = useTranslations('Chats')

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

        <Flex flexDir='column' width={'100vw'} alignItems={'center'} bg='brand.white_bg'>
           
            {/*HERO AND EXAMPLES CHATS COMPONENT*/}
            <Flex flexDir='column' width={'100vw'} alignItems={'center'}> 
                <Flex maxW={'1200px'}> 
                    <Box flex={'1'}  width="100%" position={'relative'} px='4vw' color='black'  py={{ base: "10vh", md: "12vh", lg: "15vh", xl: "17vh" }}  maxW="1200px" >
                        <Flex  zIndex={2}  flexDir={'column'} > 
                            <Text fontSize={{ base: '2.5em',sm:'2.8em', md: '3.1em', lg: '3.5em' }}  fontWeight="medium" overflowWrap="break-word" whiteSpace="pre-wrap" >
                                <AnimatedText text={t('Hero')}/>
                            </Text>
                            <ScrollAnimation animateIn="fadeInUp" animateOnce delay={t('Hero').split(' ').length * 70 + 300}> 
                                <Text mt='10px' maxW={'800px'} fontWeight={300} fontSize={{base: '.8em',sm:'.8em', md: '.9em', lg: '1em' }}color="brand.text_gray"   overflowWrap="break-word" whiteSpace="pre-wrap">
                                    {t('Subhero')}
                                </Text>
                            </ScrollAnimation>
                        </Flex>
                     </Box>
                     <MatildaChatsComponent/>  
                </Flex>
            </Flex>
            <MeshGradientBackground/>
              
 

            {/*MATILDA ADVANTAGES*/}
        
                {/*FIRST LINE*/}
                <Flex maxW="1000px" width="100%"  gap={{ base: "30px", md: "30px", lg: "40px", xl: "50px" }} flexDir={{ base: "column", md: "column", lg: "row", xl: "row" }}>
                    <ScrollAnimation style={{flex:'2'}} animateIn="fadeInUp" animateOnce >
                        <Text textAlign={{ base: 'center',sm:'center', md: 'start', lg: 'start' }} flex='2' fontSize={{ base: '2em',sm:'2.1em', md: '2.3em', lg: '2.5em' }}><span style={{color:'rgb(5, 102, 255)'}}>Matilda</span> - {t('Matilda_Title')}</Text>
                    </ScrollAnimation >

                    <ScrollAnimation style={{flex:'1'}} animateIn="fadeIn" animateOnce >
                        <Box   bg='gray.100' borderRadius={'1rem'} p='20px'>
                            <Flex gap='15px' alignItems={'center'}> 
                                <Icon as={GiVelociraptor} color='brand.text_blue' boxSize={'40px'}/>
                                <Text fontSize={{base: '1em',sm:'1em', md: '1.1em', lg: '1.2em' }}>{t('Matilda_Time')}</Text>
                            </Flex>
                            <Box width={'100%'} height={'1px'} bg='gray.300' mb='20px' mt='20px'/>
                            <Text fontWeight={300} color='gray.600'  fontSize={{base: '.8em',sm:'.8em', md: '.85em', lg: '.9em' }}>{t('Matilda_Time_Subtitle')}</Text>
                        </Box>
                    </ScrollAnimation>
                </Flex> 
              
                {/*SECOND LINE*/}
                <Flex maxW="1000px" width="100%" gap={{ base: "30px", md: "30px", lg: "40px", xl: "50px" }} mt={{ base: "30px", md: "30px", lg: "40px", xl: "50px" }}  flexDir={{ base: "column", md: "column", lg: "row", xl: "row" }}>
                    <ScrollAnimation style={{flex:'1'}} animateIn="fadeIn" animateOnce >
                        <Box bg='gray.100' borderRadius={'1rem'} p='20px' height={'100%'}>
                            <Flex gap='15px' alignItems={'center'}> 
                                <Icon as={FaChartPie} color='brand.text_blue' boxSize={'34px'}/>
                                <Text fontSize={{base: '1em',sm:'1em', md: '1.1em', lg: '1.2em' }}>{t('Matilda_Stats')}</Text>
                            </Flex>
                            <Box width={'100%'} height={'1px'} bg='gray.300' mb='20px' mt='20px'/>
                            <Text fontWeight={300} color='gray.600'  fontSize={{base: '.8em',sm:'.8em', md: '.85em', lg: '.9em' }}>{t('Matilda_Stats_Subtitle')}</Text>
                        </Box>   
                    </ScrollAnimation>

                    <ScrollAnimation  style={{flex:'2'}}animateIn="fadeIn" animateOnce >
                        <Box  bg='brand.text_blue' borderRadius={'1rem'} p='20px'  height={'100%'}>
                            <Flex gap='15px' alignItems={'center'}> 
                                <Icon as={IoPeople} color='white' boxSize={'35px'}/>
                                <Text fontSize={{base: '1em',sm:'1em', md: '1.1em', lg: '1.2em' }} color='white'>{t('Matilda_Work')}</Text>
                            </Flex>
                            <Box width={'100%'} height={'1px'} bg='gray.300' mb='20px' mt='20px'/>
                            <Text fontWeight={300} color='gray.200'  fontSize={{base: '.8em',sm:'.8em', md: '.85em', lg: '.9em' }}>{t('Matilda_Work_Subtitle')}</Text>
                        </Box>
                    </ScrollAnimation>
                </Flex> 

                {/*THIRD LINE*/}
                <Flex maxW="1000px" width="100%"  gap={{base: "30px", md: "30px", lg: "40px", xl: "50px" }}  mt={{ base: "30px", md: "30px", lg: "40px", xl: "50px" }}  flexDir={{ base: "column", md: "column", lg: "row-reverse", xl: "row-reverse" }}>
                    
                    <Flex display={{ base: "none", lg: "flex" }} flex='1' alignItems='center' justifyContent='center' >  
                        <ScrollAnimation animateIn="fadeIn" animateOnce >
                                <Image height={'120px'} src='/images/matilda.svg'/>
                        </ScrollAnimation >
                    </Flex>

                    <ScrollAnimation style={{flex:'3'}} animateIn="fadeIn" animateOnce >
                        <Box   bg='gray.100' borderRadius={'1rem'} p='20px'>
                            <Flex gap='15px' alignItems={'center'}> 
                                <Icon as={FaClipboardCheck} color='brand.text_blue' boxSize={'35px'}/>
                                <Text fontSize={{base: '1em',sm:'1em', md: '1.1em', lg: '1.2em' }}>{t('Matilda_Tasks')}</Text>
                            </Flex>
                            <Box width={'100%'} height={'1px'} bg='gray.300' mb='20px' mt='20px'/>
                            <Text fontWeight={300} color='gray.600'  fontSize={{base: '.8em',sm:'.8em', md: '.85em', lg: '.9em' }}>{t('Matilda_Tasks_Subtitle')}</Text>
                        </Box>
                    </ScrollAnimation>
                </Flex>

                {/*FOURTH LINE*/}
                <Flex maxW="1000px" width="100%"  gap={{ base: "30px", md: "30px", lg: "40px", xl: "50px" }}  mt={{ base: "30px", md: "30px", lg: "40px", xl: "50px" }}  flexDir={{ base: "column", md: "column", lg: "row", xl: "row" }}>  
                    <ScrollAnimation style={{flex:'1'}} animateIn="fadeIn" animateOnce >
                        <Box   bg='gray.100' borderRadius={'1rem'} p='20px'  height={'100%'}>
                            <Flex gap='15px' alignItems={'center'}> 
                                <Icon as={FaLanguage} color='brand.text_blue' boxSize={'35px'}/>
                                <Text fontSize={{base: '1em',sm:'1em', md: '1.1em', lg: '1.2em' }}>{t('Matilda_Language')}</Text>
                            </Flex>
                            <Box width={'100%'} height={'1px'} bg='gray.300' mb='20px' mt='20px'/>
                            <Text fontWeight={300} color='gray.600'  fontSize={{base: '.8em',sm:'.8em', md: '.85em', lg: '.9em' }}>{t('Matilda_Language_Subtitle')}</Text>
                        </Box>
                    </ScrollAnimation>

                    <ScrollAnimation style={{flex:'2'}} animateIn="fadeInUp" animateOnce >
                        <Text color='black' textAlign={{ base: 'center',sm:'center', md: 'start', lg: 'start' }} fontSize={{ base: '2em',sm:'2.1em', md: '2.3em', lg: '2.5em' }}><span style={{color:'rgb(5, 102, 255)'}}>Matilda</span> {t('Matilda_Doubt')}</Text>
                    </ScrollAnimation >
                </Flex>
              
 

            {/*MATILDA FEATURES*/}
            <Flex  bg='rgb(0, 20, 51)' clipPath='polygon(0 100px, 100% 0, 100% 100%, 0 100%)' width={'100vw'} justifyContent={'center'} px='4vw' > 
                <Flex px='4vw' width="100vw"  flexDir={'column'}  alignItems={'center'}   py={{ base:"calc(5vh + 100px)", md: "calc(7vh + 100px)", lg: "calc(10vh + 100px)", xl: "calc(12vh + 100px)" }} > 
                        
                        {/*FIRST LINE*/}
                        <Flex maxW="1000px" width="100%"  gap={{ base: "30px", md: "30px", lg: "40px", xl: "50px" }} flexDir={{ base: "column", md: "column", lg: "row-reverse", xl: "row-reverse" }}>
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

            <FAQS faqsList={faqsList}/>
        </Flex>

    <Footer/>
    </>)
}

export default Matilda

export async function getStaticProps({locale}:GetStaticPropsContext) {return {props: {messages: require(`../lang/${locale}.json`)}}}
