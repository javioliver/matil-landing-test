import React from 'react'

import {Flex, Text, Box } from '@chakra-ui/react'
import Footer from '../Content/Components/footer'
import { GetStaticPropsContext } from 'next'

import { useTranslations } from 'next-intl'

const Use = () => {

    const t = useTranslations('Header')
    return (
    <Box position={'absolute'} >
        <Flex bg='gray.100'  py={{ base: "3vh", md: "4vh", lg: "5vh", xl: "7vh" }} justifyContent={'center'} width='100%'  px={{ base: '20px', sm: '30px', md: '5vw',lg: "10vw", xl: "15vw"  }} >
            <Box> 
            <Text mt={{ base: "3vh", md: "4vh", lg: "5vh", xl: "7vh" }} textAlign="center" overflowWrap="break-word" whiteSpace="pre-wrap" fontSize={{ base: '1.5em', sm: '2em', md: '2em', lg: '2.8em' }} fontWeight="medium"  background='linear-gradient(to right, rgb(5, 102, 255), rgba(0, 0, 255, 0.6))' backgroundClip={'text'} >
                {t('TermsConditions').toLocaleUpperCase()}
            </Text>
            
            </Box>
        </Flex>           


        {/*CONSUMIDORES*/} 
        <Flex py={{ base: "5vh", md: "5vh", lg: "7vh", xl: "10vh" }} width="100vw" color="black" justifyContent="center" >
          <Flex fontWeight={300}  width="100%" maxW="1200px"  justifyContent={{ md: 'space-between' }} px={{ base: '20px', sm: '30px', md: '50px' }} flexDirection='column'>
           
            <Text mt='50px' background='linear-gradient(to right, rgb(5, 102, 255), rgba(0, 0, 255, 0.6))' backgroundClip={'text'} fontWeight={'medium'} fontSize={{base: '1.2em',sm:'1.3em', md: '1.4em', lg: '1.5em' }} >
            {t('Acceptance_Title')}
            </Text>

            <Text mt='50px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
            {t('Acceptance_Text')}
            </Text>

            <Text mt='50px' background='linear-gradient(to right, rgb(5, 102, 255), rgba(0, 0, 255, 0.6))' backgroundClip={'text'} fontWeight={'medium'} fontSize={{base: '1.2em',sm:'1.3em', md: '1.4em', lg: '1.5em' }} >
            {t('Service_Description_Title')}
            </Text>

            <Text mt='50px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
            {t('Service_Description_Text')}
            </Text>

            <Text mt='50px' background='linear-gradient(to right, rgb(5, 102, 255), rgba(0, 0, 255, 0.6))' backgroundClip={'text'} fontWeight={'medium'} fontSize={{base: '1.2em',sm:'1.3em', md: '1.4em', lg: '1.5em' }} >
            {t('Data_Collection_Title')}
            </Text>

            <Text mt='50px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
            {t('Data_Collection_Text')}
            </Text>

            <Text mt='50px' background='linear-gradient(to right, rgb(5, 102, 255), rgba(0, 0, 255, 0.6))' backgroundClip={'text'} fontWeight={'medium'} fontSize={{base: '1.2em',sm:'1.3em', md: '1.4em', lg: '1.5em' }} >
            {t('Privacy_Policy_Title')}
            </Text>

            <Text mt='50px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
            {t('Privacy_Policy_Text')}
            </Text>

            <Text mt='50px' background='linear-gradient(to right, rgb(5, 102, 255), rgba(0, 0, 255, 0.6))' backgroundClip={'text'} fontWeight={'medium'} fontSize={{base: '1.2em',sm:'1.3em', md: '1.4em', lg: '1.5em' }} >
            {t('Access_Conditions_Title')}
            </Text>

            <Text mt='50px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
            {t('Access_Conditions_Text')}
            </Text>

            <Text mt='50px' background='linear-gradient(to right, rgb(5, 102, 255), rgba(0, 0, 255, 0.6))' backgroundClip={'text'} fontWeight={'medium'} fontSize={{base: '1.2em',sm:'1.3em', md: '1.4em', lg: '1.5em' }} >
            {t('Prohibited_Use_Title')}
            </Text>

            <Text mt='50px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
            {t('Prohibited_Use_Text')}
            </Text>

            <Text mt='50px' background='linear-gradient(to right, rgb(5, 102, 255), rgba(0, 0, 255, 0.6))' backgroundClip={'text'} fontWeight={'medium'} fontSize={{base: '1.2em',sm:'1.3em', md: '1.4em', lg: '1.5em' }} >
            {t('Service_Modifications_Title')}
            </Text>

            <Text mt='50px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
            {t('Service_Modifications_Text')}
            </Text>


            <Text mt='50px' background='linear-gradient(to right, rgb(5, 102, 255), rgba(0, 0, 255, 0.6))' backgroundClip={'text'} fontWeight={'medium'} fontSize={{base: '1.2em',sm:'1.3em', md: '1.4em', lg: '1.5em' }} >
            {t('Liability_Limitations_Title')}
            </Text>

            <Text mt='50px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
            {t('Liability_Limitations_Text')}
            </Text>

            <Text mt='50px' background='linear-gradient(to right, rgb(5, 102, 255), rgba(0, 0, 255, 0.6))' backgroundClip={'text'} fontWeight={'medium'} fontSize={{base: '1.2em',sm:'1.3em', md: '1.4em', lg: '1.5em' }} >
            {t('Dispute_Resolution_Title')}
            </Text>

            <Text mt='50px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
            {t('Dispute_Resolution_Text')}
            </Text>

            <Text mt='50px' background='linear-gradient(to right, rgb(5, 102, 255), rgba(0, 0, 255, 0.6))' backgroundClip={'text'} fontWeight={'medium'} fontSize={{base: '1.2em',sm:'1.3em', md: '1.4em', lg: '1.5em' }} >
            {t('Contact_Title')}
            </Text>

            <Text mt='50px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
            {t('Contact_Text')}
            </Text>


          </Flex>
    </Flex>
    <Box bg='white'> 
        <Footer/>
    </Box>
    </Box>
        
    )
}

export default Use
 
 
export async function getStaticProps({locale}:GetStaticPropsContext) {return {props: {messages: require(`../lang/${locale}.json`)}}}
