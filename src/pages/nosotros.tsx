import React from 'react'
import { Flex, Box, Text, Image, SimpleGrid, Icon} from '@chakra-ui/react'
import ArrowButton from '../Content/Widgets/ArrowButton'
import Footer from '../Content/Components/footer'
import Contact from '../Content/Components/contact'
import { IoIosWater } from "react-icons/io";

import { FaHandshakeSimple,FaScaleBalanced, FaLightbulb } from "react-icons/fa6";
import { IoShieldCheckmark } from "react-icons/io5"
import { MdOutlineDoubleArrow } from "react-icons/md"

const Nosotros =()=>{

    const Titulo = 'Transformando Comunicaciones con la IA-Primero'
    const SubTitulo = 'Enfocados en potenciar las ventas y mejorar la atención al cliente, nuestras soluciones de inteligencia artificial optimizan los procesos de comunicación para empresas de todos los tamaños, creando interacciones más efectivas y eficientes.'
    const statsList1 = [
      {title:'Innovación', icon:FaLightbulb, text:'Constantemente buscamos nuevas formas de mejorar nuestras soluciones y servicios.'}, 
      {title:'Confianza', icon:IoShieldCheckmark,text:'Mantenemos la integridad y la seguridad en el corazón de todas nuestras interacciones y soluciones.'}, 
      {title:'Colaboración', icon:FaHandshakeSimple,text:'Trabajamos mano a mano con nuestros clientes para asegurar que nuestras soluciones se integren sin problemas en sus operaciones diarias.'},
 
    ]
    const statsList2 = [
      {title:'Responsabilidad', icon:FaScaleBalanced,text:'Actuamos con integridad, asegurando impactos positivos en la comunidad y nuestros clientes.'},
      {title:'Eficiencia', icon:MdOutlineDoubleArrow,text:'Entregamos resultados superiores con rapidez y precisión, optimizando cada proceso.'},
      {title:'Adaptabilidad', icon:IoIosWater,text:'Nos ajustamos ágilmente a los cambios para mantener la competitividad de nuestros clientes.'},
    ]
    return(
        
        <Box  position="absolute"> 
         <Flex mt={{ base: "10vh", md: "15vh", lg: "15vh", xl: "20vh" }} width="100vw" color="black"  justifyContent="center" zIndex="98" >
            <Flex width="100%" maxW="1200px" gap='50px' justifyContent={{ md: 'space-between' }} px={{ base: '20px', sm: '30px', md: '50px' }} flexDirection={{ base: 'column', md: 'row' }}>
                <Box  width={{ base: '100%', md: 'auto' }}>
                    <Text background='brand.blue' backgroundClip={'text'} fontWeight={'medium'} fontSize={{base: '1.2em',sm:'1.3em', md: '1.4em', lg: '1.5em' }} >Sobre nosotros</Text>  
                    <Text mt='10px' lineHeight={1.1}  fontSize={{ base: '3em',sm:'4em', md: '4em', lg: '4.5em' }}fontWeight="medium" overflowWrap="break-word" whiteSpace="pre-wrap" color={'brand.clear_black'} >
                    {Titulo}
                    </Text>
                    <Text mt='30px' mb='30px' fontSize={{base: '1em',sm:'1.1em', md: '1.2em', lg: '1.3em' }} color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
                    {SubTitulo}
                    </Text>
                    <ArrowButton onClick={()=>{console.log('HOLA')}} text='Contactar'/>
                </Box>

                <Box display={{ base: 'none', md: 'block' }} width='40%' height="auto" flexShrink="0" >
                    <Image src={'/images/communication.png'}/>
                </Box>
            </Flex>
        </Flex>

        <Box width={'100%'} mt='-5vh'position='absolute' zIndex={2} height={{ base: "25vh", md: "30vh", lg: "40vh", xl: "50vh" }} bg='brand.blue' clipPath= 'polygon(0 65%, 100% 0, 100% 35%, 0 100%)'/>
     {/*VENTAJAS DE IA-PRIMERO*/} 
     <Box  mt={{ base: "15vh", md: "17vh", lg: "20vh", xl: "30vh" }}  py={{ base: "5vh", md: "5vh", lg: "7vh", xl: "10vh" }}> 
        {/*TÍTULO*/} 
        <Flex justifyContent={'center'} width='100%'  px={{ base: '20px', sm: '30px', md: '5vw',lg: "10vw", xl: "15vw"  }} >
          <Text textAlign="center" overflowWrap="break-word" whiteSpace="pre-wrap" fontSize={{ base: '1.8em', sm: '2.2em', md: '2.5em', lg: '3em' }} fontWeight="medium" color='brand.clear_black'>
            Nuestra Misión
          </Text>
        </Flex>

        {/*CONSUMIDORES*/} 
        <Flex mt={{ base: "5vh", md: "5vh", lg: "7vh", xl: "10vh" }} width="100vw" color="black" justifyContent="center" >
          <Flex  width="100%" maxW="1200px" gap={{ base: "50px", md: "70px", lg: "100px", xl: "120px" }}justifyContent={{ md: 'space-between' }} px={{ base: '20px', sm: '30px', md: '50px' }} flexDirection={{ base: 'column', md: 'row' }}>
              <Box flex='3' width={{ base: '100%', md: 'auto' }}>
               
              <Text  color={'rgba(33, 180, 253)'}mt='10px'textAlign={{base:"center",sm:'center',md:'start'}}  fontSize={{base: '1.3em',sm:'1.5em', md: '1.8em', lg: '2em' }}  fontWeight={'medium'} >
                Revolucionando la Comunicación Empresarial
              </Text>
                <Text mt='10px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
                En MATIL, nuestra misión es abordar uno de los desafíos más críticos que enfrentan las empresas hoy en día: la ineficiencia en la comunicación. Reconocemos que un tiempo considerable se pierde en interacciones redundantes y procesos de comunicación ineficaces, tanto en ventas como en atención al cliente. Nuestro objetivo es transformar este panorama mediante soluciones avanzadas de inteligencia artificial que optimizan y agilizan estas interacciones esenciales.
                 </Text>
                <Text mt='10px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
                Nos dedicamos a diseñar sistemas inteligentes que no solo aceleran la comunicación, sino que también la hacen más precisa y efectiva, eliminando demoras y mejorando la satisfacción del cliente. Al integrar nuestra tecnología IA, las empresas pueden liberar recursos valiosos, permitiéndoles concentrarse en lo que realmente importa: crecer y prosperar en sus mercados.
              </Text>
              </Box>

              <Box boxShadow={'0 0 10px 3px rgba(0, 0, 0, 0.05)'} color='white' borderRadius={'1rem'} overflow={'hidden'} flex='4' width={{ base: '100%', md: '40%', lg: '30%' }}  height="auto" flexShrink="0">
                <Image src={'/images/nodes.png'} />
              </Box>
            </Flex> 
        </Flex>

       
      </Box>

        {/*VENTAJAS DE IA-PRIMERO*/} 
        <Box bg='gray.100'> 
        <Box clipPath= 'polygon(0 0, 100% 0, 100% 85%, 0 100%)'  mt={{ base: "8vh", md: "13vh", lg: "13vh", xl: "15vh" }} bg='gray.200' paddingTop={{ base: "5vh", md: "5vh", lg: "7vh", xl: "10vh" }} paddingBottom={{ base: "30vh", md: "25vh", lg: "20vh", xl: "18vh" }}> 
                {/*TÍTULO*/} 
                <Flex zIndex={10} justifyContent={'center'} width='100%'  px={{ base: '20px', sm: '30px', md: '5vw',lg: "10vw", xl: "15vw"  }} >
                    <Box> 
                        <Text textAlign="center" overflowWrap="break-word" whiteSpace="pre-wrap" fontSize={{ base: '1.5em', sm: '2em', md: '2em', lg: '2.8em' }} fontWeight="medium" color='brand.clear_black'>
                        Nuestros Valores
                        </Text>
                    </Box>
                </Flex>

                <Flex mt='50px' width="100vw" justifyContent="center" zIndex="98" >
                    <Flex width="100%" maxW="1200px" gap={{base:'20px', sm: '20px',md:'40px',lg:'50px' }} justifyContent={{ md: 'center' }} px={{ base: '20px', sm: '30px', md: '100px', lg:'50px' }} flexDirection={{base:'column', sm: 'column',md:'column',lg:'row' }}>
                            {statsList1.map((stat, index) => 
                            (<Flex key={`nosotros-1-${index}`} flex={1} py={{base:'15px', sm: '20px',md:'25px',lg:'30px' }} px={{base:'15px', sm: '20px',md:'35px',lg:'40px' }}  justifyContent={'center'} bg='gray.50' borderRadius={'1.5rem'} boxShadow={'0 0 10px 1px rgba(0, 0, 0, 0.15)'} >
                                <Flex  color={index == 0?'rgba(0, 123, 255)':index == 1? 'rgba(0, 123, 255, 0.8)':'rgba(0, 123, 255, 0.6)'} flexDir={'column'}  alignItems={'center'}> 
                                    <Icon   fontSize={{base: '1.3em',sm:'1.5em', md: '1.8em', lg: '2em' }}   as={stat.icon}/>
                                    <Text mt='10px'  fontSize={{base: '1.3em',sm:'1.5em', md: '1.8em', lg: '2em' }}  fontWeight={'medium'} >{stat.title}</Text>
                                    
                                    <Text textAlign={'center'} mt='10px' color={'brand.gray'} fontSize={{base: '1em',sm:'1em', md: '1.1em', lg: '1.2em' }}>{stat.text}</Text>
                                </Flex>
                            </Flex>))}
                    </Flex>
                    
                </Flex>
                <Flex mt='50px' width="100vw" justifyContent="center" zIndex="98" >
                  <Flex width="100%" maxW="1200px" gap={{base:'20px', sm: '20px',md:'40px',lg:'50px' }} justifyContent={{ md: 'center' }} px={{ base: '20px', sm: '30px', md: '100px', lg:'50px' }} flexDirection={{base:'column', sm: 'column',md:'column',lg:'row' }}>
                              {statsList2.map((stat, index) => 
                              (<Flex  key={`nosotros-2-${index}`}flex={1} py={{base:'15px', sm: '20px',md:'25px',lg:'30px' }}px={{base:'15px', sm: '20px',md:'35px',lg:'40px' }}  justifyContent={'center'} bg='gray.50' borderRadius={'1.5rem'} boxShadow={'0 0 10px 1px rgba(0, 0, 0, 0.15)'} >
                                  <Flex  color={index == 0?'rgba(0, 123, 255, 0.6)':index == 1? 'rgba(0, 123, 255, 0.8)':'rgba(0, 123, 255)'} flexDir={'column'}  alignItems={'center'}> 
                                      <Icon   fontSize={{base: '1.3em',sm:'1.5em', md: '1.8em', lg: '2em' }}   as={stat.icon}/>
                                      <Text mt='10px'  fontSize={{base: '1.3em',sm:'1.5em', md: '1.8em', lg: '2em' }}  fontWeight={'medium'} >{stat.title}</Text>
                                      
                                      <Text textAlign={'center'} mt='10px' color={'brand.gray'} fontSize={{base: '1em',sm:'1em', md: '1.1em', lg: '1.2em' }}>{stat.text}</Text>
                                  </Flex>
                              </Flex>))}
                      </Flex>
                    </Flex>
            </Box>
            </Box>
        <Contact/>
      <Footer/>
        </Box>
    )
}

export default Nosotros