import React from "react"

import {Box, Flex, Text,Image ,Center} from '@chakra-ui/react'


const Plataforma2 =()=>{

    const Titulo = 'Convierte y administra leads con el mínimo esfuerzo'

    return(
        <Box  position="absolute"> 
            <Flex mt={{ base: "10vh", md: "15vh", lg: "15vh", xl: "20vh" }} width="100vw" color="black"  justifyContent="center" zIndex="98" >
                <Flex width="100%" maxW="1200px" gap='50px' justifyContent={{ md: 'space-between' }} px={{ base: '20px', sm: '30px', md: '50px' }} flexDirection={{ base: 'column', md: 'row' }}>
                    <Box  width={{ base: '100%', md: 'auto' }}>
                        <Text background='brand.blue' backgroundClip={'text'} fontWeight={'medium'} fontSize={{base: '1.2em',sm:'1.3em', md: '1.4em', lg: '1.5em' }} >
                            SuperSale
                        </Text>  
                        <Text mt='10px' lineHeight={1.1} fontSize={{ base: '3em',sm:'4em', md: '4em', lg: '4.5em' }}  fontWeight="medium" overflowWrap="break-word" whiteSpace="pre-wrap" color={'brand.clear_black'} >
                        {Titulo}
                        </Text>
                        <Text mt='30px' mb='30px' fontSize={{base: '1em',sm:'1.1em', md: '1.2em', lg: '1.3em' }} color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
                            
                        </Text>
                        </Box>

                    <Box display={{ base: 'none', md: 'block' }} width='30%' height="auto" flexShrink="0" >
                        
                    </Box>
                </Flex>
              
            </Flex>
            <Center>
            <Image src='/images/building.png'/>
            </Center>
                
           
       </Box>
    )
}

export default Plataforma2