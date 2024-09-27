
//REACT
import React, {useState,useEffect,useRef,Suspense} from 'react'
//FRONT
import {Box,Flex,Text,Button,Divider,Icon} from '@chakra-ui/react'

const CoockiesWarning=()=>{

  const [cookieAccepted, setCoockieAccepted] = useState(() => {
    if (typeof window !== 'undefined') {
      return Boolean(localStorage.getItem('cookiesAccepted'));
    }
    return false;
  });
   

        return(<>
     {!cookieAccepted&& 
        <Box position='fixed' right='2vw' bottom='2vw' p='15px' borderRadius={'xl'} bg='white' color='black'  boxShadow={'0 0 10px 1px rgba(0, 0, 0, 0.15)'}  maxW={{base:'96vw',md:'500px'}}  zIndex={10000}>
          <Text  fontSize={'sm'}>Este sitio web utiliza cookies propias y de terceros para obtener datos estadísticos de la navegación de nuestros usuarios y mejorar nuestros servicios, así como la experiencia de usuario. Más información en nuestra  <Box as="span" onClick={()=>{('/politica-de-cookies')}} fontWeight={'bold'}   sx={{ cursor: 'pointer', _hover: { color: 'gray.600'}}}>política de cookies</Box>. </Text>
          <Flex flexDir={'row-reverse'} mt='4vh' gap='1vw'> 
            <Button size='sm' borderRadius={'3vh'} onClick={()=>{setCoockieAccepted(true);localStorage.setItem('cookiesAccepted', 'true')}} bg='brand.clear_black' color='white' _hover={{bg:''}}>Aceptar</Button>
            <Button size='sm' borderRadius={'3vh'} onClick={()=>{localStorage.setItem('cookiesAccepted', 'false')}} bg='brand.clear_black' color='white' _hover={{bg:''}}>Rechazar</Button>
          </Flex>
          </Box>
          }</>)
    }

export default CoockiesWarning