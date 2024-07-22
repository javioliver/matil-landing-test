import React, { useRef, useEffect, useState } from 'react'
import { Flex, Box, Text, Image, SimpleGrid, Icon, IconButton } from '@chakra-ui/react'
import ArrowButton from '../Content/Widgets/ArrowButton'
import HighlightText from '../Content/Widgets/HighlightText'
import Footer from '../Content/Components/footer'
import Contact from '../Content/Components/contact'
 import { LuBrainCircuit } from "react-icons/lu"
import { FaRegClock, FaChartBar, FaLanguage, FaPlug } from "react-icons/fa"
import { FaUserCheck } from "react-icons/fa6"

import { TiFlowMerge } from "react-icons/ti"
import { IoMdSettings, IoMdPeople, IoIosLock, IoIosArrowForward, IoIosArrowBack } from "react-icons/io"
import { IoFunnel } from "react-icons/io5"
import { ImTree } from "react-icons/im"

import WaterDrop from '../Content/Widgets/WaterDrop.js'

const Plataforma1 =()=>{


    const Titulo = 'Servicio Humano, Tiempo Superhumano'
    const SubTitulo = 'Simplifica tu trabajo gestionando todas las comunicaciones desde un único lugar. Nuestra plataforma integra todas las fuentes de información para que puedas acceder y controlar fácilmente tu flujo comunicativo.'
   
    const comoFunciona = '¿Cómo funciona?'
 
    const timidaList = [
        ['1. Integración', '/Matilda/ se /conecta/ con una amplia variedad de /canales/ de comunicación. Incluso proporcionamos un /Chat Widget/ para que nuestros clientes puedan introducirlo en su página web.'],
        ['2. Recepción', 'Se /unifican/ todos los /canales/ habilitados para que /Matilda/ reciba todos los mensajes y pueda /procesarlos/.'],
        ['3. Clasificación', '/Matilda/ clasifica la /intención/ del cliente en distintas /categorías/ y avanzará en la conversación con el objetivo de /resolver/ el /ticket/.'],
        ['4. Resolución', '/Matilda/ continúa /avanzando/ en la conversación hasta que la /consulta/ del cliente quede /resuelta/ o hasta que considere que /no/ debe /responder/, en cuyo caso /delegará/ la conversación a un /agente/.']
    ]

    const EstructuraAplicacion = 'Nuestra plataforma está diseñada para ofrecer una experiencia de usuario eficiente y organizada, con una interfaz dividida en cuatro secciones clave.'
    const sections = ['Tickets', 'Clientes', 'Estadísticas']
    const sectionsText = [
        'Los usuarios pueden acceder a todas las conversaciones activas y pasadas. Ofrece la posibilidad de revisar y responder mensajes directamente desde la plataforma. Esta área es esencial para mantener una comunicación continua y efectiva con los contactos, proporcionando un fácil acceso a todo el historial de interacción.', 
        'Los usuarios pueden gestionar de manera eficaz su red de contactos. Esto incluye la capacidad de añadir nuevos contactos y editar o eliminar los existentes. Esta función asegura que los usuarios puedan mantener su lista de contactos actualizada y relevante en todo momento.',
        'Reservada para los administradores, esta sección proporciona un análisis detallado del rendimiento de la plataforma. Incluye métricas como el volumen de mensajes, la tasa de respuesta y el análisis de satisfacción del usuario, permitiendo a los administradores tomar decisiones informadas para mejorar el servicio y la experiencia del usuario.'
    ]

    const sectionImages = ['/images/tickets.png', '/images/cliente.png','/images/estadisticas.png']
    const [selectedSection, setSelectedSection] = useState(0)

    const carouselRef = useRef<HTMLDivElement>(null)
    

    const caracteristicasTitle = 'Características de la plataforma'
    const caracteristicasText = 'Descubre cómo nuestra plataforma mejora la comunicación y la gestión de datos con sus características diseñadas para eficiencia y facilidad de uso.'
    const caracteristicasList1 = [{icon:LuBrainCircuit, title:'Interfaz Intuitiva', text:'Diseño limpio y fácil de navegar, optimizado para usuarios de todos los niveles.'}, {icon:FaRegClock, title:'Respuestas Instantánea',text:'Capacidad para responder mensajes directamente desde la sección de Conversaciones.'}, {icon:IoMdPeople,title:'Gestión de Contactos', text:'Herramientas para añadir, editar y eliminar contactos fácilmente.'}, {icon:IoMdSettings,title:'Personalización de Interfaz', text:'Herramientas potentes de análisis y generación de reportes para una toma de decisiones informada.'}]
    const caracteristicasList2 = [{icon:IoIosLock,title:'Seguridad Avanzada', text:'Protección robusta de datos y comunicaciones con cifrado de última generación.'}, {icon:FaChartBar, title:'Visualización de datos',text:'KPIs bien organizados y visualmente intuitivos.'}, {icon:FaLanguage, title:'Soporte Multilingüe',text:'Soporte para múltiples idiomas, facilitando la adaptación global.'}, {icon:TiFlowMerge, title:'Visualización de Flujos',text:'Acceso exclusivo para administradores a visualizaciones completas de flujos automatizados.'} ]


 
    const timidaRef = useRef<HTMLDivElement>(null)
    const firstDropRef = useRef<HTMLDivElement>(null)
    const lastDropRef = useRef<HTMLDivElement>(null)
    const [lineLong, setLineLong] = useState({left:0,long:0})
    const [carouselWidth, setCarouselWidth] = useState(0)


    const [windowWidth, setWindowWidth] = useState<number>(0)
  const [windowHeight, setWindowHeight] = useState<number>(0)
  
    useEffect(() => {
      const updateLinePosition = () => {
        setWindowWidth(window.innerWidth)
        setWindowHeight(window.innerHeight)

        const width = window.innerWidth
        if (width < 450) setCarouselWidth(40)
        else if (width < 700) setCarouselWidth(60)
        else if (width < 960) setCarouselWidth(100)
        else if (width < 1200) setCarouselWidth(100)
        else setCarouselWidth(100)
      
     
        if (firstDropRef.current && lastDropRef.current) {
          const firstRect = firstDropRef.current.getBoundingClientRect()
          const lastRect = lastDropRef.current.getBoundingClientRect()
          if (window.innerWidth > 960) setLineLong({left:firstRect.right - 10, long:lastRect.left - firstRect.right + 20})
         }
      }
 
      if (typeof window !== 'undefined') {
        updateLinePosition()
        window.addEventListener('resize', updateLinePosition);
      }
      return () => {
        window.removeEventListener('resize', updateLinePosition);
      }
      
    }, [])
 

    return(

        
        <Box  position="absolute"> 
         <Flex mt={{ base: "10vh", md: "15vh", lg: "15vh", xl: "20vh" }} width="100vw" color="black"  justifyContent="center" zIndex="98" >
            <Flex width="100%" maxW="1200px" gap='50px' justifyContent={{ md: 'space-between' }} px={{ base: '20px', sm: '30px', md: '50px' }} flexDirection={{ base: 'column', md: 'row' }}>
                <Box  width={{ base: '100%', md: 'auto' }}>
                    <Text background='brand.blue' backgroundClip={'text'} fontWeight={'medium'} fontSize={{base: '1.2em',sm:'1.3em', md: '1.4em', lg: '1.5em' }} >
                        SuperService
                    </Text>  
                    <Text mt='10px' lineHeight={1.1} fontSize={{ base: '3em',sm:'4em', md: '4em', lg: '4.5em' }}  fontWeight="medium" overflowWrap="break-word" whiteSpace="pre-wrap" color={'brand.clear_black'} >
                    {Titulo}
                    </Text>
                    <Text mt='30px' mb='30px' fontSize={{base: '1em',sm:'1.1em', md: '1.2em', lg: '1.3em' }} color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
                    {SubTitulo}
                    </Text>
                    <ArrowButton onClick={()=>{console.log('/contacto')}} text='Contactar'/>
                </Box>

                <Box display={{ base: 'none', md: 'block' }} width='30%' height="auto" flexShrink="0" >
                    <Image src={'/images/platform.png'} />
                </Box>
            </Flex>
        </Flex>

        <Box width={'100%'} mt='-5vh'  position='absolute' zIndex={-1} height={{ base: "25vh", md: "30vh", lg: "40vh", xl: "50vh" }} bg='brand.blue' clipPath= 'polygon(0 65%, 100% 0, 100% 35%, 0 100%)'/>

      {/*IA-TIMIDA */}
      <Box  mt={{ base: "20vh", md: "28vh", lg: "36vh", xl: "40vh" }} overflow={'hidden'} ref={timidaRef}  bg='gray.100' py={{ base: "5vh", md: "5vh", lg: "7vh", xl: "10vh" }}> 
        
            <Box position={'absolute'} bgGradient='linear(to-br, blue.900, blue.800, blue.700)'  left={0} height={timidaRef.current?timidaRef.current.getBoundingClientRect().height - windowHeight*0.02:0} width='2vw'  mt={{ base: "-5vh", md: "-5vh", lg: "-7vh", xl: "-10vh" }} zIndex={0}  />
            <Box position={'absolute'} bg='brand.blue'  opacity={0.9}  left={'1vw'} height={timidaRef.current?timidaRef.current.getBoundingClientRect().height - windowHeight*0.02:0} width='2vw'  mt={{ base: "-3vh", md: "-3vh", lg: "-6vh", xl: "-8vh" }} zIndex={0} />         
            <Box position={'absolute'} bgGradient='linear(to-br, blue.900, blue.800, blue.700)'  right={0} height={timidaRef.current?timidaRef.current.getBoundingClientRect().height - windowHeight*0.02:0} width='2vw'  mt={{ base: "-5vh", md: "-5vh", lg: "-7vh", xl: "-10vh" }} zIndex={0}  />
            <Box position={'absolute'} bg='brand.blue'  opacity={0.9}  right={'1vw'} height={timidaRef.current?timidaRef.current.getBoundingClientRect().height - windowHeight*0.02:0} width='2vw'  mt={{ base: "-3vh", md: "-3vh", lg: "-6vh", xl: "-8vh" }} zIndex={0} />

            <Flex justifyContent={'center'} width='100%'  px={{ base: '20px', sm: '30px', md: '5vw',lg: "10vw", xl: "15vw"  }} >
            <Box> 
                <Text textAlign="center" overflowWrap="break-word" whiteSpace="pre-wrap" fontSize={{ base: '1em', sm: '2.3em', md: '2.5em', lg: '3em' }} fontWeight="medium" color='brand.clear_black'>
                {comoFunciona}
                </Text>
                <Text textAlign="center" overflowWrap="break-word" whiteSpace="pre-wrap" fontSize={{ base: '1.5em', sm: '1.8em', md: '2em', lg: '2.5em' }} fontWeight="medium" color='brand.clear_black'>
                 Esquema de la integración de Matilda para resolver distintos tickets
                </Text>

                <Flex flexDir={{base:'column',sm: 'column', md: 'row',  }} alignItems="stretch" gap='40px' mt={{ base: "6vh", md: "5vh", lg: "6vh", xl: "8vh" }}>
                    {windowHeight > 960 &&<Box position={'absolute'} bg='gray.300' borderRadius={'1rem'} left={lineLong.left} height={'10px'} mt='20px' zIndex={1} width={lineLong.long}/>}
                    {timidaList.map((element, index) => (
                    <Flex  flex={1} flexDirection={{ base: index%2===0? 'row':'row-reverse', sm: index%2===0? 'row':'row-reverse', md: index%2===0? 'row':'row-reverse', lg: 'column', xl: 'column' }}  key={`water-drop-element-${index}`} alignItems={'center'} >
                        <Box zIndex={2} ref={index === 0 ? firstDropRef : (index === timidaList.length - 1 ? lastDropRef : null)}> 
                        <WaterDrop color='brand.blue' rotation={windowHeight > 960 ?270:index%2===0?0:180}  icon={index === 0 ? FaPlug:index === 1 ?IoFunnel:index === 2 ? ImTree: FaUserCheck}/>
                        </Box>
                        <Box height={'100%'} bg='white' borderRadius={'.7rem'} p='20px'>
                            <Text fontSize={'1.2em'} mb='10px' fontWeight={'medium'} textAlign={'center'}>{element[0]}</Text>
                            <HighlightText text={element[1]}color1={'brand.gray'} color2={'black'} bold={true} center={true}/>
                     
                        </Box>
                    </Flex>
                    ))}
                </Flex>
            </Box>
            </Flex>
        </Box>


    {/*VENTAJAS DE IA-PRIMERO*/} 
    <Box py={{ base: "5vh", md: "5vh", lg: "7vh", xl: "10vh" }}> 
        <Flex justifyContent={'center'} width='100%'  px={{ base: '20px', sm: '30px', md: '5vw',lg: "10vw", xl: "15vw"  }} >
            <Box> 
                <Text textAlign="center" overflowWrap="break-word" whiteSpace="pre-wrap" fontSize={{ base: '1.5em', sm: '2em', md: '2em', lg: '2.8em' }} fontWeight="medium" color='brand.clear_black'>
                Estructura de la Plataforma
                </Text>
                <Text  textAlign="center" mt='30px' mb='30px' fontSize={{base: '1em',sm:'1.1em', md: '1.2em', lg: '1.3em' }} color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
                {EstructuraAplicacion}
                </Text>
            </Box>
        </Flex>

    {/*HISTORIAL*/} 
    <Flex mt={{ base: "3vh", md: "3vh", lg: "5vh", xl: "7vh" }} width="100vw" color="black" justifyContent="center" >
     
        
            <Box  width="100%" maxW="1200px"    ref={carouselRef} position="relative"  overflow="hidden" p={{ base: '20px', sm: '30px', md: '50px' }} bg='gray.200' borderRadius='1rem'>
                <IconButton position="absolute" left={{ base: '20px', sm: '30px', md: '50px' }} bg='transparent'  zIndex="1" isRound aria-label='section-back' icon={<IoIosArrowBack size='30px'/>} isDisabled={selectedSection===0} onClick={()=>    setSelectedSection(selectedSection - 1)}/>
                <IconButton position="absolute" right={{ base: '20px', sm: '30px', md: '50px' }} bg='transparent' zIndex="1" isRound aria-label='section-forward' icon={<IoIosArrowForward size='30px'/>}  isDisabled={selectedSection===2}  onClick={()=>  setSelectedSection(selectedSection + 1)}/>
                
                <Flex transition="0.5s ease-out" gap={{  base: '20px', sm: '30px', md: '50px' }} transform={`translateX(-${selectedSection * (carouselRef.current ? carouselRef.current.getBoundingClientRect().width - carouselWidth/2 :0)}px)`}>
                    {sections.map((section, index) => (
                    <Box key={index}   flex="none" width={carouselRef.current ? carouselRef.current.getBoundingClientRect().width - carouselWidth:600}>
                        <Text textAlign={'center'} fontWeight={'medium'} fontSize={{ base: '1.5em', sm: '2em', md: '2em', lg: '2.5em' }} color={'brand.clear_black'}>
                            {section}
                        </Text>
                        <Text mt='10px' textAlign={'center'} fontSize={{ base: '.9em', sm: '1em', md: '1.1em', lg: '1.1em' }} color="brand.gray">
                            {sectionsText[index]}
                        </Text>
                        <Box  mt='50px' width='100%' color='white' >
                            <Image src={sectionImages[index]} borderRadius={'1rem'} />
                        </Box>
                    </Box>
                    ))}
                </Flex>
            </Box>

              
 
        </Flex>

    
 
    
    </Box>


    {/*ESTADÍSTICAS*/} 
    <Box width={'100%'}  bgGradient='linear(to-br, blue.900, blue.800, blue.700)' clipPath= 'polygon(0 10%, 100% 0, 100% 100%, 0 100%)' paddingBottom={{base:'10vh',sm:'10vh',md:'13vh',lg:'15vh'}} paddingTop={{base:'21vh',sm:'21vh',md:'18vh',lg:'15vh'}}>
          
        <Flex justifyContent={'center'} width='100%'  px={{ base: '20px', sm: '30px', md: '5vw',lg: "10vw", xl: "15vw"  }} >
            <Box> 
                <Text textAlign="center" overflowWrap="break-word" whiteSpace="pre-wrap" fontSize={{ base: '1.5em', sm: '2em', md: '2em', lg: '2.8em' }} fontWeight="medium" color='white'>
                {caracteristicasTitle}
                </Text>
                <Text  textAlign="center" mt='30px' mb='30px' fontSize={{base: '1em',sm:'1.1em', md: '1.2em', lg: '1.3em' }} color="gray.300"  overflowWrap="break-word" whiteSpace="pre-wrap">
                {caracteristicasText}
                </Text>
            </Box>
        </Flex>
        
        <Flex width="100vw" color="black" justifyContent="center" >
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing="20px" mt="5vh" width="100%" maxW="1200px" px={{ base: '20px', sm: '30px', md: '50px' }}>
            {caracteristicasList1.map((stat, index) => (<Box > 
              <Box borderLeftColor = 'cyan.400' borderLeftWidth={'2px'} >
                <Flex  fontSize={'1.1em'} px='10px' fontWeight={'medium'} alignItems={'center'} gap='10px' color='white'> 
                    <Icon as={stat.icon} />
                    <Text>{stat.title}</Text>
                </Flex>
              </Box>
              <Box mt='15px' ml='10px'> 
                <HighlightText text={stat.text}/>
              </Box>
              </Box>))}
          </SimpleGrid>
        </Flex>
        <Flex width="100vw" color="black" justifyContent="center" >
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing="20px" mt="5vh" width="100%" maxW="1200px" px={{ base: '20px', sm: '30px', md: '50px' }}>
            {caracteristicasList2.map((stat, index) => (<Box > 
              <Box borderLeftColor = 'cyan.400' borderLeftWidth={'2px'} >
              <Flex fontSize={'1.1em'} px='10px' fontWeight={'medium'} alignItems={'center'} gap='10px' color='white'> 
                    <Icon as={stat.icon} />
                    <Text>{stat.title}</Text>
                </Flex>
              </Box>
              <Box mt='15px' ml='10px'> 
                <HighlightText text={stat.text}/>
              </Box>
              </Box>))}
          </SimpleGrid>
        </Flex>
      </Box>
   
     {/*CONTACTO*/} 
    <Contact/>

      <Footer/>
        </Box>
    )
}

export default Plataforma1