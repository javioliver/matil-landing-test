import React from 'react'
import { Flex, Box, Text, Image, Grid, Icon} from '@chakra-ui/react'
import ArrowButton from '../Content/Widgets/ArrowButton'
import Footer from '../Content/Components/footer'

import { FaCheckCircle } from "react-icons/fa"


import HighlightText from '../Content/Functions/HighlightText'
const Integraciones =()=>{



    const Titulo = 'Integraciones a Medida con tu Flujo de Trabajo'
    const SubTitulo = 'A diferencia de otras soluciones, entendemos profundamente tus procesos y nos integramos de manera óptima con tus flujos de trabajo para maximizar tu eficiencia y transformar tu entorno laboral.'
    const IntegracionesTitulo = 'Otras integraciones'
    const AMedidaSubTitulo = 'Explora cómo nuestro proceso de integración personalizado asegura que MATILDA y nuestra plataforma funcionen sinérgicamente con tu estructura empresarial, mejorando significativamente tu rendimiento y resultados.'
    const images = Array.from({ length: 16   }, (_, i) => `/images/logo-${i + 1}.png`);
    const orderImages = [11, 8, 7, 9, 13, 14, 15, 16, 5, 12, 4, 6, 1, 2, 3, 10]

    const IntegracionesPoints = [['Análisis Detallado de Procesos','Realizamos un /análisis exhaustivo/ para entender tus procesos y estructuras actuales, asegurando que captamos las necesidades específicas de tu negocio.'],['Desarrollo de Soluciones Personalizadas','Diseñamos /soluciones a medida/ que se integran de manera fluida con tus sistemas, mejorando la eficiencia operativa y automatizando tareas repetitivas.'], ['Implementación y Ajuste Continuo','Tras implementar MATILDA, proporcionamos /formación/ y hacemos ajustes necesarios para /optimizar/ su /funcionamiento/ según evolucionen tus necesidades.']]
    
    const otrasintegracionesText = 'Además de personalizar integraciones específicas para tu empresa, MATILDA también se conecta de manera fluida con una amplia variedad de herramientas estándar del mercado. Esto incluye plataformas de comunicación, sistemas de gestión de proyectos, herramientas de CRM, y más. '
    return(
        <Box  position="absolute"> 
            <Flex mt={{ base: "10vh", md: "15vh", lg: "15vh", xl: "20vh" }} width="100vw" color="black"  justifyContent="center" zIndex="98" >
            <Flex width="100%" maxW="1200px" gap='50px' justifyContent={{ md: 'space-between' }} px={{ base: '20px', sm: '30px', md: '50px' }} flexDirection={{ base: 'column', md: 'row' }}>
                    <Box  width={{ base: '100%', md: 'auto' }}>
                        <Text     background='brand.blue' backgroundClip={'text'} fontWeight={'medium'} fontSize={{base: '1.2em',sm:'1.3em', md: '1.4em', lg: '1.5em' }} >Integraciones</Text>  
                        <Text mt='10px' lineHeight={1.1} fontSize={{ base: '3em',sm:'4em', md: '4em', lg: '4.5em' }}  fontWeight="medium" overflowWrap="break-word" whiteSpace="pre-wrap" color={'brand.clear_black'} >
                        {Titulo}
                        </Text>
                        <Text mt='30px' mb='30px' fontSize={{base: '1em',sm:'1.1em', md: '1.2em', lg: '1.3em' }} color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
                        {SubTitulo}
                        </Text>
                        <ArrowButton onClick={()=>{console.log('/contacto')}} text='Contactar'/>
                    </Box>

                    <Box display={{ base: 'none', md: 'block' }} width='40%' height="auto" flexShrink="0" >
                        <Image src={'/images/workflow.png'}/>
                    </Box>
                </Flex>
            </Flex>

            <Box width={'100%'} mt='-5vh'  position='absolute' zIndex={-1} height={{ base: "25vh", md: "30vh", lg: "40vh", xl: "50vh" }} bg='brand.blue' clipPath= 'polygon(0 65%, 100% 0, 100% 35%, 0 100%)'/>
  

            {/*VENTAJAS DE IA-PRIMERO*/} 
            <Box  mt={{ base: "18vh", md: "23vh", lg: "33vh", xl: "35vh" }} py={{ base: "5vh", md: "5vh", lg: "7vh", xl: "10vh" }}> 
                
                {/*TÍTULO*/} 
                <Flex width="100vw" mt={{base:0,md:'-5vh'}} color="black" justifyContent="center" >
                    <Flex  width="100%" maxW="1200px" gap='50px'  px={{ base: '20px', sm: '30px', md: '50px' }} flexDirection={{ base: 'column', md: 'row-reverse' }}>
                        <Box flex='3' width={{ base: '100%', md: 'auto' }}>
                            <Text overflowWrap="break-word" whiteSpace="pre-wrap" textAlign={{base:'center',md:'left'}} color={'brand.clear_black'} fontSize={{ base: '1.8em', sm: '2em', md: '2.5em', lg: '3em' }}   fontWeight={'medium'}  >
                                Integraciones Personalizadas
                            </Text>
                            <Text mt='10px' fontSize={{base: '1em',sm:'1.1em', md: '1.2em', lg: '1.3em' }}  textAlign={{base:'center',md:'left'}}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
                                {AMedidaSubTitulo}
                            </Text>
                        </Box>
                        <Box  flex='3' width={{ base: '100%', md: '40%', lg: '30%' }}  height="auto" flexShrink="0"/>
                    </Flex> 
                </Flex>

                {/*CONSUMIDORES*/} 
                <Flex mt='20px' width="100vw" color="black" justifyContent="center"  >
                    <Flex  width="100%" maxW="1200px" gap='50px' justifyContent={{ md: 'space-between' }} px={{ base: '20px', sm: '30px', md: '50px' }} flexDirection={{ base: 'column', md: 'row' }}>
                    <Box flex='4' width={{ base: '100%', md: 'auto' }}>
                        
                        <Text overflowWrap="break-word" whiteSpace="pre-wrap" color={'brand.clear_black'} fontSize={{base: '1.5em',sm:'2em', md: '2em', lg: '2.5em' }}  fontWeight={'medium'}  >
                            Proceso de integración
                        </Text>

                        {IntegracionesPoints.map((text) => 
                        (<Box mt='20px' alignItems={'center'} gap='10px'> 
                            
                            <Flex   fontSize={{base: '1.2em',sm:'1.2em', md: '1.4em', lg: '1.5em' }} alignItems={'center'} gap='10px'> 
                                <Icon as={FaCheckCircle} color='cyan.600'/>
                                <Text fontWeight={'medium'} color={'gray.700'}>{text[0]}</Text>
                            </Flex>
                            <Text mt='10px' fontSize={{base: '1em',sm:'1em', md: '1.1em', lg: '1.2em' }}   overflowWrap="break-word" whiteSpace="pre-wrap">
                                <HighlightText text={text[1]} color1={'brand.gray'} color2={'cyan.700'}/> 
                            </Text>
                        </Box>))}
                        
                    </Box>
                    <Box  flex='4' mt='10px' p='30px' height="auto" flexShrink="0">
                        <Image src={'/images/integrations.png'}/>
                     </Box>
                    </Flex> 
                </Flex>
            </Box>
            {/*INTEGRACIONES*/} 
            <Box  mt={{ base: "2vh", md: "2vh", lg: "3vh", xl: "5vh" }} bg='gray.100' py={{ base: "5vh", md: "5vh", lg: "7vh", xl: "10vh" }}> 
             
                <Flex justifyContent={'center'} width='100%'  px={{ base: '20px', sm: '30px', md: '5vw',lg: "10vw", xl: "15vw"  }} >
                    <Box> 
                        <Text textAlign="center" overflowWrap="break-word" whiteSpace="pre-wrap" fontSize={{ base: '1.5em', sm: '2em', md: '2em', lg: '2.8em' }} fontWeight="medium" color='brand.clear_black'>
                            {IntegracionesTitulo}
                        </Text>
                        <Text mt='20px' mb='30px' textAlign={'center'} fontSize={{base: '1em',sm:'1.1em', md: '1.2em', lg: '1.3em' }} color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
                        {otrasintegracionesText}
                        </Text>
                    </Box>
                </Flex>
                <Flex justifyContent={'center'} width='100%'  px={{ base: '20px', sm: '30px', md: '5vw',lg: "10vw", xl: "15vw"  }} >

                    <Grid templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)" }} gap={'40px'} width="100%">
                        {images.map((image, index) => (
                        <Flex p={(index === 7 || index === 8 || index === 13)?'35px':(index  === 4 || index === 14)?'0px':'15px'} key={index} overflow="hidden" alignItems={'center'}>
                            <Image src={`/images/logos/logo-${orderImages[index]}.png`} alt={`Imagen ${orderImages[index]}`} objectFit="cover" />
                        </Flex>
                        ))}
                    </Grid>
                </Flex>

            </Box>
            <Footer/>
       </Box>
    )
}

export default Integraciones