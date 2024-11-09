import React from 'react'
import {Flex, Text, Box } from '@chakra-ui/react'
import Footer from '../Content/Components/footer'
import { GetStaticPropsContext } from 'next'
import { useTranslations } from 'next-intl'

const Cookies = () => {

    const t = useTranslations('Header')
    return (
    <Box position={'absolute'} >
        <Flex bg='gray.100'  py={{ base: "3vh", md: "4vh", lg: "5vh", xl: "7vh" }} justifyContent={'center'} width='100%'  px={{ base: '20px', sm: '30px', md: '5vw',lg: "10vw", xl: "15vw"  }} >
            <Box> 
            <Text mt={{ base: "3vh", md: "4vh", lg: "5vh", xl: "7vh" }} textAlign="center" overflowWrap="break-word" whiteSpace="pre-wrap" fontSize={{ base: '1.5em', sm: '2em', md: '2em', lg: '2.8em' }} fontWeight="medium"  background='linear-gradient(to right, rgb(5, 102, 255), rgba(0, 0, 255, 0.6))' backgroundClip={'text'} >
                {t('Cookies_Title').toLocaleUpperCase()}
            </Text>
            
            </Box>
        </Flex>           


        {/*CONSUMIDORES*/} 
        <Flex py={{ base: "5vh", md: "5vh", lg: "7vh", xl: "10vh" }} width="100vw" color="black" justifyContent="center" >
          <Flex  width="100%" maxW="1200px" fontWeight={300}  justifyContent={{ md: 'space-between' }} px={{ base: '20px', sm: '30px', md: '50px' }} flexDirection='column'>
           
            <Text   fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
            {t('Cookies_Intro')}
            </Text>

            <Text mt='50px' background='linear-gradient(to right, rgb(5, 102, 255), rgba(0, 0, 255, 0.6))' backgroundClip={'text'} fontWeight={'medium'} fontSize={{base: '1.2em',sm:'1.3em', md: '1.4em', lg: '1.5em' }} >
            {t('Cookies_Info_Title_1')} 
            </Text>

            <Text mt='50px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
            {t('Cookies_Info_Text_1')} 
            </Text>

            <Text mt='50px' background='linear-gradient(to right, rgb(5, 102, 255), rgba(0, 0, 255, 0.6))' backgroundClip={'text'} fontWeight={'medium'} fontSize={{base: '1.2em',sm:'1.3em', md: '1.4em', lg: '1.5em' }} >
            {t('Cookies_Info_Title_2')} 
            </Text>

            <Text mt='50px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
            {t('Cookies_Info_Text_2')} 
            </Text>


            <Text mt='50px' background='linear-gradient(to right, rgb(5, 102, 255), rgba(0, 0, 255, 0.6))' backgroundClip={'text'} fontWeight={'medium'} fontSize={{base: '1.2em',sm:'1.3em', md: '1.4em', lg: '1.5em' }} >
            {t('Cookies_Info_Title_3')} 
            </Text>

            <Text mt='50px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
            {t('Cookies_Info_Text_3')} 
            </Text>

            <Text mt='50px' background='linear-gradient(to right, rgb(5, 102, 255), rgba(0, 0, 255, 0.6))' backgroundClip={'text'} fontWeight={'medium'} fontSize={{base: '1.2em',sm:'1.3em', md: '1.4em', lg: '1.5em' }} >
            {t('Cookies_Types_Title_1')} 
            </Text>

            <Text mt='50px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
            {t('Cookies_Types_Text_1')} 
            </Text>
          
            <Text mt='50px' background='linear-gradient(to right, rgb(5, 102, 255), rgba(0, 0, 255, 0.6))' backgroundClip={'text'} fontWeight={'medium'} fontSize={{base: '1.2em',sm:'1.3em', md: '1.4em', lg: '1.5em' }} >
            {t('Cookies_Types_Title_2')} 
            </Text>

            <Text mt='50px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
            {t('Cookies_Types_Text_2')} 
            </Text>
          
            <Text mt='50px' background='linear-gradient(to right, rgb(5, 102, 255), rgba(0, 0, 255, 0.6))' backgroundClip={'text'} fontWeight={'medium'} fontSize={{base: '1.2em',sm:'1.3em', md: '1.4em', lg: '1.5em' }} >
            {t('Cookies_Types_Title_3')} 
            </Text>

            <Text mt='50px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
            {t('Cookies_Types_Text_3')} 
            </Text>
          
            <Text mt='50px' background='linear-gradient(to right, rgb(5, 102, 255), rgba(0, 0, 255, 0.6))' backgroundClip={'text'} fontWeight={'medium'} fontSize={{base: '1.2em',sm:'1.3em', md: '1.4em', lg: '1.5em' }} >
                {t('Cookies_Disable_Title')}
            </Text>

            <Text mt='50px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
                {t('Cookies_Disable_Text')}
            </Text>
 
          </Flex>
    </Flex>
    <Box bg='white'> 
        <Footer/>
    </Box>
    </Box>
        
    )
}

export default Cookies
 
export async function getStaticProps({locale}:GetStaticPropsContext) {return {props: {messages: require(`../lang/${locale}.json`)}}}

 
 
 
 