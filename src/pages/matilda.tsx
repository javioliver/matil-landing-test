//NEXT
import Head from 'next/head'
import { GetStaticPropsContext } from 'next'
//REACT
import { useState, useEffect, useMemo } from 'react'
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
                [1000, { text: t_chats('Chat_21'), botMessage: false }],
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

        const imagesList = ['clothes_store.jpg', 'computer_store.jpg', 'bank.jpg']

        const chatContent = useMemo(() => (
            <Chatbot currentChat={chats[currentChat]} />
        ), [currentChat]);

        return(
        <Box mt={{ base: "10vh", md: "12vh", lg: "15vh", xl: "18vh" }} textAlign={'start'}>
            <Flex position={'relative'} justifyContent={'center'}> 
                <Image zIndex={1} width="96vw"  height={'400px'} borderRadius="1rem" maxW="1200px" src={`/images/${imagesList[currentChat]}`} objectFit="cover" />
                <Box position={'absolute'} zIndex={100}  height={{base: '330px',sm:'350px', md: '450px', lg: '480px'}} width={{base: '280px',sm:'280px', md: '330px', lg: '330px' }}  bottom={0} borderRadius={'1rem 1rem 0 0'}  overflow={'hidden'} bg='white' >
                    {chatContent}
                </Box>
            
            </Flex>  
            
            <Flex mt='50px' justifyContent="center" gap='20px'>
                {progress.map((value, index) => (
                    <Box cursor={'pointer'} onClick={() => setCurrentChat(index)} key={`progress_bar-${index}`} bg='gray.300' borderRadius={'1rem'}  height={'5px'}  width={'70px'} overflow="hidden" position="relative">
                        <Box bg='brand.text_blue'  height='100%' width={`${value}%`} transition="width 0.3s ease"/>
                    </Box>
                ))}
            </Flex>
        </Box>)
    }

    //FAQS LIST
    const faqsList = [[t('FAQ_1'), t('FAQ_ANSWER_1')], [t('FAQ_2'), t('FAQ_ANSWER_2')], [t('FAQ_3'), t('FAQ_ANSWER_3')], [t('FAQ_4'), t('FAQ_ANSWER_4')], [t('FAQ_5'), t('FAQ_ANSWER_5')], [t('FAQ_6'), t('FAQ_ANSWER_6')], [t('FAQ_7'), t('FAQ_ANSWER_7')]]

    return(<>
        <Head>
            <title>MATIL</title>
            <meta name="description" content="Impulsa tu negocio con soluciones de IA. Mejora la atención al cliente, aumenta las ventas proactivas y envía correos masivos personalizados con nuestra tecnología innovadora. Descubre cómo la inteligencia artificial puede transformar tu empresa."/>
        </Head>

        <Flex flexDir='column' width={'100vw'} alignItems={'center'}>
           
            {/*HERO AND EXAMPLES CHATS COMPONENT*/}
            <Flex flexDir='column' width={'100vw'} alignItems={'center'} bgGradient={'linear-gradient(to bottom, #ffffff, #EDF2F7)'}> 
                <Box   width="100%" position={'relative'} px='4vw' color='black' textAlign={'center'} py={{ base: "10vh", md: "12vh", lg: "15vh", xl: "17vh" }}  maxW="1200px" >
                    <Flex alignItems={'center'}  flexDir={'column'} > 

                        <ScrollAnimation animateIn="fadeIn" animateOnce >
                            <Text color='brand.text_blue' fontWeight={'medium'} fontSize={{base: '1.2em',sm:'1.3em', md: '1.4em', lg: '1.5em' }} >Matilda</Text> 
                        </ScrollAnimation>

                        <Text fontSize={{ base: '3em',sm:'3.3em', md: '4em', lg: '4.5em' }} fontWeight="medium" overflowWrap="break-word" whiteSpace="pre-wrap" >
                            <AnimatedText text={t('Hero')}/>
                        </Text>
                        
                        <ScrollAnimation animateIn="fadeInUp" animateOnce delay={t('Hero').split(' ').length * 40}> 
                            <Text mt='30px' maxW={'800px'} fontWeight={300} fontSize={{base: '.8em',sm:'.8em', md: '.9em', lg: '1em' }} color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
                                {t('Subhero')}
                            </Text>
                        </ScrollAnimation>
                    </Flex>
                    <MatildaChatsComponent/>  
                </Box>
            </Flex>

 
            {/*MATILDA ADVANTAGES*/}
            <Flex bg='white' px='4vw' width="100vw"  flexDir={'column'}  alignItems={'center'}  py={{ base: "5vh", md: "7vh", lg: "10vh", xl: "12vh" }}> 
        
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
