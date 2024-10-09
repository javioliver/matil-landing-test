//NEXT
import Head from 'next/head'
import { useRouter } from 'next/router'
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
    const t = useTranslations('SuperService')

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
                            <Text color='brand.text_blue' fontWeight={'medium'} fontSize={{base: '1.2em',sm:'1.3em', md: '1.4em', lg: '1.5em' }} >SuperService</Text> 
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
                </Box>
            </Flex>

            <Flex bg='white' px='4vw' width="100vw"  flexDir={'column'}  alignItems={'center'}  py={{ base: "5vh", md: "7vh", lg: "10vh", xl: "12vh" }}> 
        
            {/*FIRST LINE*/}
            <Flex maxW="1000px" width="100%" alignItems={'center'} flexDir={'column'}>
                    
                <ScrollAnimation style={{flex:'2'}} animateIn="fadeInUp" animateOnce >
                    <Text textAlign='center' flex='2' fontSize={{ base: '2em',sm:'2.1em', md: '2.3em', lg: '2.5em' }}>{t('Sections_Title')}</Text>
                </ScrollAnimation >


            </Flex> 
        </Flex> 


            <FAQS faqsList={faqsList}/>
        </Flex>

    <Footer/>
    </>)
}

export default Matilda

export async function getStaticProps({locale}:GetStaticPropsContext) {return {props: {messages: require(`../lang/${locale}.json`)}}}
