


//REACT
import React from 'react'
//TRANSLATION
import { useTranslations } from 'next-intl'
//FRONT
import { Box, Flex, Text } from '@chakra-ui/react'
import ContactBox from '../Widgets/ContactBox'
import MeshGradientBackground from '../Gradient/gradient'
const Contact = ()=>{

    //TRANSLATION
    const t = useTranslations('Sections')

    return(<>
     <Box width={'100%'} paddingTop={{ base:'5vh', sm: '8vh', md: '15vh' }} paddingBottom={{ base:'30vh', sm: '20vh', md: '30vh' }} bg='brand.gray_1' clipPath= 'polygon(0 0, 100% 0, 100% 85%, 0 100%)'>
        <Flex width="100vw" color="black" justifyContent="center" >
          <Flex zIndex={2}  width="100%" maxW="1200px" gap='50px' justifyContent={{ md: 'space-between' }} px={{ base: '20px', sm: '30px', md: '50px' }} flexDirection={{ base: 'column',sm:'column', md: 'row' }}>
              <Box flex='4' width={{ base: '100%', md: 'auto' }} >
                <Text overflowWrap="break-word" whiteSpace="pre-wrap" textAlign={{ base: 'center',sm:'center', md: 'start' }} fontSize={'3xl'}  >
                  {t('Contact_Title')}
                </Text>
                <Text mt='10px' fontSize={'1.1em'}  color="gray.600" fontWeight={300}  overflowWrap="break-word" whiteSpace="pre-wrap">
                {t('Contact_Subtitle')}
                </Text>
              </Box>
              <ContactBox/> 
            </Flex>   
          </Flex>
          <Box width={'100%'} bgGradient='linear(rgb(5, 102, 255), #58daf4)' mt='-60vh' position='absolute' zIndex={1} height={'80vh'} clipPath='polygon(0 65%, 100% 0, 100% 35%, 0 100%)'>
          </Box>
      </Box>
    </>)
    }

export default Contact