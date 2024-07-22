
//REACT
import React, {useState,useEffect,useRef,Suspense} from 'react'
//FRONT
import {Box,Flex,Text,Button,Divider,Icon} from '@chakra-ui/react'
import {useNavigate} from 'react-router-dom'
import '../../app/globals.css'

const Footer=()=>{

    const handleClickSection = (section:string) =>{console.log(`/${section}`)}

    return(
        <Box  fontSize={'sm'}  color='brand.clear_black'   py='5vh' zIndex={1000} > 
            <Flex width="100vw" color="black" justifyContent="center" alignItems={'center'} >
                <Flex color='brand.clear_black' fontSize={'1.1em'}  alignItems={{ base: 'center', sm: 'center', lg: 'start' }} width="100%" maxW="1200px" flexDirection={{ base: 'column', sm:'column', lg: 'row' }}  justifyContent={{ base: 'flex-start', sm: 'flex-start', lg: 'center' }}px={{ base: '20px', sm: '30px', md: '50px' }} >
                    <Box   borderLeftWidth={'1px'} borderLeftColor={{ base: 'gray.50', sm: 'gray.50', md: 'gray.200' }}borderRightWidth={'1px'} borderRightColor={{ base: 'gray.50', sm: 'gray.50', md: 'gray.200' }} px='50px'>
                        <Text fontWeight={'bold'}>PRODUCTOS</Text>
                        <Text mt='15px' fontWeight={'bold'} color='gray.500'>Plataformas</Text>
                        <Box ml='10px'> 
                            <Text cursor={'pointer'} _hover={{color:'gray.500'}} mt='5px' onClick={()=>{handleClickSection('super-service')}}>SuperService</Text>
                            <Text cursor={'pointer'} _hover={{color:'gray.500'}} mt='5px' onClick={()=>{handleClickSection('super-sale')}}>SuperSale</Text>
                            <Text cursor={'pointer'} _hover={{color:'gray.500'}} mt='5px' onClick={()=>{handleClickSection('super-blitz')}}>SuperBlitz</Text>                       
                        </Box>
                    </Box>
                  
                    <Box   mt={{base:'20px',sm:'20px',md:'0' }} borderRightWidth={'1px'} borderRightColor={{ base: 'gray.50', sm: 'gray.50', md: 'gray.200' }} px='50px'>
                        <Text fontWeight={'bold'}>SOLUCIONES</Text>
                        <Text mt='15px' fontWeight={'bold'} color='gray.500'>Casos de uso</Text>
                        <Box ml='10px'> 
                            <Text cursor={'pointer'} _hover={{color:'gray.500'}} mt='5px' onClick={()=>{handleClickSection('atención-cliente-uso')}}>Atención al cliente</Text>
                            <Text cursor={'pointer'} _hover={{color:'gray.500'}} onClick={()=>{handleClickSection('ventas-uso')}}>Ventas</Text>
                        </Box>
                        <Text mt='15px' fontWeight={'bold'} color='gray.500'>Tecnología</Text>
                        <Box ml='10px'> 
                            <Text cursor={'pointer'} _hover={{color:'gray.500'}} mt='5px' onClick={()=>{handleClickSection('matilda')}}>Matilda</Text>
                            <Text cursor={'pointer'} _hover={{color:'gray.500'}} mt='5px' onClick={()=>{handleClickSection('integraciones')}}>Integraciones</Text>
                            <Text cursor={'pointer'} _hover={{color:'gray.500'}} onClick={()=>{handleClickSection('canales')}}>Canales</Text>
                        </Box> 
                    </Box>
                    <Box mt={{base:'20px',sm:'20px',md:'0' }} borderRightWidth={'1px'} borderRightColor={{ base: 'gray.50', sm: 'gray.50', md: 'gray.200' }} px='50px'>
                        <Text fontWeight={'bold'}>QUIENES SOMOS</Text>
                        <Text  mt='15px' cursor={'pointer'} _hover={{color:'gray.500'}}>Sobre nosotros</Text>
                    </Box>
                </Flex>
            </Flex>

        <Flex width="100vw" color="black" mt="10vh" justifyContent="center" alignItems="center">
            <Flex color='brand.clear_black' fontSize={'1.1em'} width="100%" maxW="1200px" justifyContent="center" alignItems="center"  px={{ base: '20px', sm: '30px', md: '50px' }}>
            <Text textAlign="center">  
                <Box as="span" onClick={()=>{handleClickSection('politica-de-privacidad')}} sx={{ cursor: 'pointer', _hover: { color: 'gray.500' }, mx: 2 }}>
                Política de privacidad
                </Box>
                |
                <Box as="span" onClick={()=>{handleClickSection('politica-de-cookies')}} sx={{ cursor: 'pointer', _hover: { color: 'gray.500' }, mx: 2 }}>
                Política de cookies
                </Box>
                | 
                <Box as="span" onClick={()=>{handleClickSection('terminos-y-condiciones-de-uso')}} sx={{ cursor: 'pointer', _hover: { color: 'gray.500' }, mx: 2 }}>
                Términos y condiciones de uso
                </Box>
            </Text>
            </Flex>
        </Flex>
        </Box>)
    }

export default Footer