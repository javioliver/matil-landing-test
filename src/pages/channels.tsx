import React from 'react'
import { Flex, Box, Text, Image, Grid, Icon} from '@chakra-ui/react'
import ArrowButton from '../Content/Widgets/ArrowButton'
import Footer from '../Content/Components/footer'


const Canales =()=>{


    const Titulo = 'Conectividad Multicanal con MATILDA'
    const SubTitulo = 'Amplía tu alcance y mejora tu comunicación con integraciones en los principales canales digitales'

     
    const CanalesList = [
                            {icon:'whatsapp.png', canal:'Whatsapp', text:'Conéctate directamente con tus clientes a través de WhatsApp para ofrecer respuestas rápidas y personalizadas, aprovechando la plataforma de mensajería más popular del mundo.'}, 
                            {icon:'chat.png', canal:'Chat Web', text:'Integra MATILDA en tu sitio web mediante un chat interactivo que responde consultas en tiempo real, mejorando la experiencia del usuario y la captación de leads.'}, 
                            {icon:'facebook.png', canal:'Facebook Messenger', text:'Utiliza MATILDA para gestionar y responder mensajes en Facebook, facilitando la comunicación continua con tu comunidad y mejorando la gestión de tu presencia social.'},
                            {icon:'instagram.png', canal:'Instagram', text:'Amplía tu servicio de atención al cliente con MATILDA en Instagram, respondiendo a consultas y comentarios de forma automática para mantener un alto nivel de engagement.'}, 
                            {icon:'business.png', canal:'Correo electrónico', text:'Optimiza tus respuestas y gestión de correo electrónico con MATILDA, asegurando comunicaciones eficientes y coherentes que reflejan el tono y la ética de tu empresa.'},
                            {icon:'business.png', canal:'Google Business Messages', text:'Mejora la interacción con los clientes que buscan tu negocio en Google, permitiendo a MATILDA responder preguntas frecuentes y actualizar información importante automáticamente.'},
                            {icon:'twitter.png', canal:'Twitter', text:'Gestiona tu cuenta de Twitter con MATILIDA para publicar contenido, interactuar con usuarios y monitorear tu marca, todo automatizado para maximizar tu presencia online.'},
                            {icon:'telegram.png', canal:'Telegram', text:'Integra MATILDA con Telegram para proporcionar un servicio de atención al cliente eficaz y seguro, utilizando esta plataforma de mensajería en crecimiento para expandir tus canales de comunicación.'}
                        ]
     return(
        <Box  position="absolute"> 
            <Flex mt={{ base: "10vh", md: "15vh", lg: "15vh", xl: "20vh" }} width="100vw" justifyContent="center" zIndex="98" >
                <Flex width="100%" maxW="1200px" gap='50px' justifyContent={{ md: 'space-between' }} px={{ base: '20px', sm: '30px', md: '50px' }} flexDirection={{ base: 'column', md: 'row' }}>
                    <Box  width={{ base: '100%', md: 'auto' }}>
                        <Text     background='brand.blue' backgroundClip={'text'} fontWeight={'medium'} fontSize={{base: '1.2em',sm:'1.3em', md: '1.4em', lg: '1.5em' }} >Canales</Text>  
                        <Text mt='10px' lineHeight={1.1} fontSize={{ base: '3em',sm:'4em', md: '4em', lg: '4.5em' }}  fontWeight="medium" overflowWrap="break-word" whiteSpace="pre-wrap" color={'brand.clear_black'} >
                        {Titulo}
                        </Text>
                        <Text mt='30px' mb='30px' fontSize={{base: '1em',sm:'1.1em', md: '1.2em', lg: '1.3em' }} color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
                        {SubTitulo}
                        </Text>
                        <ArrowButton onClick={()=>{console.log('/contacto')}} text='Contactar'/>
                    </Box>

                    <Box display={{ base: 'none', md: 'block' }} width='40%' height="auto" flexShrink="0" >
                        <Image src={'/images/channels.png'}/>
                    </Box>
                </Flex>
            </Flex>
            <Box   mt={{ base: "8vh", md: "13vh", lg: "13vh", xl: "15vh" }} bg='gray.200' py={{ base: "5vh", md: "5vh", lg: "7vh", xl: "10vh" }}> 
            
                {/*TÍTULO*/} 
                <Flex zIndex={10} justifyContent={'center'} width='100%'  px={{ base: '20px', sm: '30px', md: '5vw',lg: "10vw", xl: "15vw"  }} >
                    <Box> 
                        <Text textAlign="center" overflowWrap="break-word" whiteSpace="pre-wrap" fontSize={{ base: '1.5em', sm: '2em', md: '2em', lg: '2.8em' }} fontWeight="medium" color='brand.clear_black'>
                            Canales de mensajería principales
                        </Text>

                    </Box>
                </Flex>

                <Flex mt='50px' width="100vw" justifyContent="center" zIndex="98" >
                    <Flex width="100%" maxW="1200px" gap='50px' justifyContent={{ md: 'space-between' }} px={{ base: '20px', sm: '30px', md: '50px' }} flexDirection={{ base: 'column', md: 'row' }}>
                        <Grid  templateColumns={{ base: "repeat(1, 1fr)",lg: "repeat(2, 1fr)" }} gap={'50px'} width="100%">
                            {CanalesList.map((element, index) => (
                            <Flex zIndex={10} p='30px' key={index}  alignItems={'center'} justifyContent={'center'} bg='gray.50' borderRadius={'1.5rem'} boxShadow={'0 0 10px 1px rgba(0, 0, 0, 0.15)'} >
                                <Flex flexDir={'column'}  alignItems={'center'}> 
                                    <Image src={`/images/logos/${element.icon}`} height='70px' />
                                    <Text mt='10px' color={'brand.clear_black'} fontSize={{base: '1.3em',sm:'1.5em', md: '2em', lg: '2.2em' }}  fontWeight={'medium'} >{element.canal}</Text>
                                    <Text mt='20px' color={'brand.gray'} fontSize={{base: '.9em',sm:'.9em', md: '1em', lg: '1.1em' }} textAlign={'center'}  >{element.text}</Text>
                                </Flex>
                            </Flex>
                            ))}
                        </Grid>
                    </Flex>
                </Flex>
 
                <Box width={'100%'} mt='-75vh'  position='absolute' zIndex={1} height={{ base: "25vh", md: "30vh", lg: "40vh", xl: "50vh" }} bg='brand.blue' clipPath= 'polygon(0 0, 100% 65%, 100% 100%, 0 35%)'/>
                <Box width={'100%'} mt='-100vh'   position='absolute' zIndex={1} height={{ base: "25vh", md: "30vh", lg: "40vh", xl: "130vh" }} bg='brand.blue' clipPath= 'polygon(0 85%, 100% 0, 100% 15%, 0 100%)'/>
                 
 
            </Box>
                 <Footer/>
        </Box>
    )
}

export default Canales