


//REACT
import React from 'react'
//FRONT
import { Box,Flex,Text } from '@chakra-ui/react'
import ContactBox from '../Widgets/ContactBox'

const Contact = ()=>{

    const contactTitle = 'Adelántate a la nueva era de la comunicación'
    const contactSubTitle = 'Lidera la transformación de la atención al cliente y la ventas con la filosofía IA-Primero.'
    
   
    return(<>
     <Box width={'100%'} paddingTop={{ base:'5vh', sm: '8vh', md: '15vh' }} paddingBottom={{ base:'30vh', sm: '20vh', md: '30vh' }} bg='gray.100' clipPath= 'polygon(0 0, 100% 0, 100% 85%, 0 100%)'>
        <Flex width="100vw" color="black" justifyContent="center" >
          <Flex zIndex={2}  width="100%" maxW="1200px" gap='50px' justifyContent={{ md: 'space-between' }} px={{ base: '20px', sm: '30px', md: '50px' }} flexDirection={{ base: 'column',sm:'column', md: 'row' }}>
              <Box flex='4' width={{ base: '100%', md: 'auto' }} >
                <Text overflowWrap="break-word" whiteSpace="pre-wrap" textAlign={{ base: 'center',sm:'center', md: 'start' }} fontSize={{base: '1.5em',sm:'2em', md: '2em', lg: '2.5em' }}  fontWeight={'medium'}  >
                  {contactTitle}
                </Text>
                <Text mt='10px' fontSize={'1.1em'}  color="gray.600"  overflowWrap="break-word" whiteSpace="pre-wrap">
                  {contactSubTitle}
                </Text>
              </Box>
              <ContactBox/> 
            </Flex>   
          </Flex>
          <Box width={'100%'} mt='-60vh' position='absolute' zIndex={1} height={'80vh'} bg='linear-gradient(to right, rgba(0, 123, 255,0.8), rgba(33, 180, 253,0.7))' clipPath= 'polygon(0 65%, 100% 0, 100% 35%, 0 100%)'>
          </Box>
      </Box>
    </>)
    }

export default Contact