import React from 'react'
import { Flex, Box, Text, Image, SimpleGrid, Icon} from '@chakra-ui/react'
import ArrowButton from '../Content/Widgets/ArrowButton'
import HighlightText from '../Content/Widgets/HighlightText'
import Footer from '../Content/Components/footer'

import Contact from '../Content/Components/contact'

import { FaMagnifyingGlass,FaUsersGear } from "react-icons/fa6";
import { FaShieldAlt, FaAnchor, FaMedal, FaHeadset } from "react-icons/fa";
import { TbBinaryTree } from "react-icons/tb";

import { GiChameleonGlyph } from "react-icons/gi";

import { useNavigate } from 'react-router-dom'
 

import { LuBrainCircuit } from "react-icons/lu"
const Matilda =()=>{

    const navigate = useNavigate()

    const Titulo = 'IA Personalizada para tu Negocio'
    const SubTitulo = 'Conoce a MATILDA, tu asistente de IA entrenada para atender las necesidades específicas de tus clientes y optimizar tus procesos operativos.'

    const EstructuraAplicacion = 'Descubre cómo MATILDA se adapta y transforma tu entorno de trabajo con la Inteligencia Artificial más avanzada y automatizaciones inteligentes.'

    const HistorialText = 'MATILDA no solo accede a tus datos, los transforma en soluciones. Utilizando el vasto conocimiento interno de tu empresa, esta IA ofrece respuestas precisas y decisiones informadas que potencian la eficiencia operativa y el rendimiento del equipo.'
    const PorResponderText = 'Con la habilidad de detectar intenciones automáticamente, MATILDA inicia procesos y tareas relevantes sin intervención manual, liberando a tu equipo para que se concentre en actividades críticas.'
    const ClientesText = 'Diseñada para adaptarse a las especificidades de tu empresa, MATILDA evoluciona con tus necesidades, asegurando una asistencia personalizada que mejora continuamente la gestión y operación empresarial.'


    const caracteristicasTitle = 'Principios de MATILDA'
    const caracteristicasText = 'Descubre los valores fundamentales que definen y guían a MATILDA en cada interacción y decisión.'
    const caracteristicasList1 = [{icon:FaMagnifyingGlass, title:'Transparencia', text:'MATILDA promueve una total claridad en sus procesos y decisiones, fomentando la confianza y la apertura.'}, {icon:FaShieldAlt, title:'Integridad de Datos',text:'Compromiso con la precisión, privacidad y seguridad de la información procesada y almacenada.'}, {icon:FaHeadset,title:'Delegación Inteligente', text:'En situaciones donde MATILDA no puede proporcionar una respuesta adecuada, automáticamente redirige la tarea o consulta a un humano.'}, {icon:FaUsersGear,title:'Colaboración Humana', text:'Diseñada para trabajar junto a humanos, complementando y potenciando sus capacidades.'}]
    const caracteristicasList2 = [{icon:FaAnchor,title:'Confiabilidad', text:'MATILDA es una herramienta confiable, diseñada para ofrecer coherencia y precisión en sus operaciones, reforzando la seguridad en su uso diario.'}, {icon:FaMedal, title:'Basada en los Valores',text:'Prioriza decisiones que reflejan los valores centrales de la empresa y de sus clientes.'}, {icon:GiChameleonGlyph, title:'Respuesta Adaptativa',text:'MATILDA se adapta dinámicamente a las necesidades de los usuarios, ajustando sus respuestas y funciones para ofrecer siempre la mejor experiencia posible.'}, {icon:TbBinaryTree, title:'Optimización de Procesos',text:'MATILDA está diseñada para simplificar y agilizar operaciones, reduciendo tiempos de respuesta y aumentando la productividad sin intervención manual.'} ]

    return(
        
        <Box  position="absolute"> 
         <Flex mt={{ base: "10vh", md: "15vh", lg: "15vh", xl: "20vh" }} width="100vw" color="black"  justifyContent="center" zIndex="98" >
            <Flex width="100%" maxW="1200px" gap='50px' justifyContent={{ md: 'space-between' }} px={{ base: '20px', sm: '30px', md: '50px' }} flexDirection={{ base: 'column', md: 'row' }}>
                <Box  width={{ base: '100%', md: 'auto' }}>
                    <Text background='brand.blue' backgroundClip={'text'} fontWeight={'medium'} fontSize={{base: '1.2em',sm:'1.3em', md: '1.4em', lg: '1.5em' }} >MATILDA</Text>  
                    <Text mt='10px' lineHeight={1.1} fontSize={{ base: '3em',sm:'4em', md: '4em', lg: '4.5em' }}  fontWeight="medium" overflowWrap="break-word" whiteSpace="pre-wrap" color={'brand.clear_black'} >
                    {Titulo}
                    </Text>
                    <Text mt='30px' mb='30px' fontSize={{base: '1em',sm:'1.1em', md: '1.2em', lg: '1.3em' }} color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
                    {SubTitulo}
                    </Text>
                    <ArrowButton onClick={()=>{navigate('/contacto')}} text='Contactar'/>
                </Box>

                <Box display={{ base: 'none', md: 'block' }} width='40%' height="auto" flexShrink="0" >
                    <Image src={'/images/ai-first.png'}/>
                </Box>
            </Flex>
        </Flex>

        <Box width={'100%'} mt='-5vh'  position='absolute' zIndex={-1} height={{ base: "25vh", md: "30vh", lg: "40vh", xl: "50vh" }} bg='brand.blue' clipPath= 'polygon(0 65%, 100% 0, 100% 35%, 0 100%)'/>
  

   {/*VENTAJAS DE IA-PRIMERO*/} 
   <Box  mt={{ base: "18vh", md: "23vh", lg: "33vh", xl: "35vh" }} py={{ base: "5vh", md: "5vh", lg: "7vh", xl: "10vh" }}> 
        {/*TÍTULO*/} 
        <Flex justifyContent={'center'} width='100%'  px={{ base: '20px', sm: '30px', md: '5vw',lg: "10vw", xl: "15vw"  }} >
            <Box> 
                <Text textAlign="center" overflowWrap="break-word" whiteSpace="pre-wrap" fontSize={{ base: '1.5em', sm: '2em', md: '2em', lg: '2.8em' }} fontWeight="medium" color='brand.clear_black'>
                Características Avanzadas de MATILDA
                </Text>
                <Text  textAlign="center" mt='30px' mb='30px' fontSize={{base: '1em',sm:'1.1em', md: '1.2em', lg: '1.3em' }} color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
                {EstructuraAplicacion}
                </Text>
            </Box>
        </Flex>

        {/*HISTORIAL*/} 
        <Flex mt={{ base: "10vh", md: "10vh", lg: "12vh", xl: "15vh" }} width="100vw" color="black" justifyContent="center" >
        <Flex  width="100%" maxW="1200px"gap={{ base: "30px", md: "20px",lg: "70px", xl: "100px" }} justifyContent={{ md: 'space-between' }} px={{ base: '20px', sm: '30px', md: '50px' }} flexDirection={{ base: 'column-reverse', md: 'row' }}>
                <Box flex={{base:'auto',md:'4'}} width={{ base: '100%', md: 'auto' }}>
                
                <Text overflowWrap="break-word" whiteSpace="pre-wrap" color={'brand.clear_black'} fontSize={{base: '1.5em',sm:'2em', md: '2em', lg: '2.5em' }} mt='10px'  fontWeight={'medium'}  >
                    Base de conocimiento
                </Text>
                <Text mt='10px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
                    {HistorialText}
                </Text>
                </Box>

                <Box  borderRadius={'1rem'} overflow={'hidden'} flex={{base:'auto',md:'3'}} width={{ base: '100%', md: '40%', lg: '30%' }}  height="auto" flexShrink="0">
                    <Image src={'/images/knowledge.png'}/>
                </Box>
            </Flex> 
        </Flex>

        {/*TICKETS PENDIENTES*/} 
        <Flex mt={{ base: "10vh", md: "10vh", lg: "12vh", xl: "15vh" }} width="100vw" color="black" justifyContent="center" >
            <Flex  width="100%" maxW="1200px"gap={{ base: "30px", md: "20px",lg: "70px", xl: "100px" }} justifyContent={{ md: 'space-between' }} px={{ base: '20px', sm: '30px', md: '50px' }} flexDirection={{ base: 'column-reverse', md: 'row' }}>
                <Box   borderRadius={'1rem'} overflow={'hidden'} flex={{base:'auto',md:'3'}} width={{ base: '100%', md: '40%', lg: '30%' }}  height="auto" flexShrink="0">
                    <Image src={'/images/automation.png'}/>
                </Box>
                <Box flex={{base:'auto',md:'4'}} width={{ base: '100%', md: 'auto' }}>
            
                <Text  mt='10px' overflowWrap="break-word" whiteSpace="pre-wrap" color={'brand.clear_black'} fontSize={{base: '1.5em',sm:'2em', md: '2em', lg: '2.5em' }}  fontWeight={'medium'}  >
                Automatizaciones inteligentes
                </Text>
                <Text mt='10px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
                    {PorResponderText}
                </Text>
                </Box>
            </Flex>
        </Flex>

        {/*CLIENTES*/} 
        <Flex mt={{ base: "10vh", md: "10vh", lg: "12vh", xl: "15vh" }} width="100vw" color="black" justifyContent="center" >
            <Flex  width="100%" maxW="1200px"gap={{ base: "30px", md: "20px",lg: "70px", xl: "100px" }} justifyContent={{ md: 'space-between' }} px={{ base: '20px', sm: '30px', md: '50px' }} flexDirection={{ base: 'column', md: 'row' }}>
                <Box flex={{base:'auto',md:'4'}} width={{ base: '100%', md: 'auto' }}>
                <Text  mt='10px' overflowWrap="break-word" whiteSpace="pre-wrap" color={'brand.clear_black'} fontSize={{base: '1.5em',sm:'2em', md: '2em', lg: '2.5em' }}  fontWeight={'medium'} >
                    Personalización completa
                </Text>
                <Text mt='10px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
                    {ClientesText}
                </Text>
                </Box>
                <Box   borderRadius={'1rem'} overflow={'hidden'} flex={{base:'auto',md:'3'}} width={{ base: '100%', md: '40%', lg: '30%' }}  height="auto" flexShrink="0">
                    <Image src={'/images/custom.png'}/>
                </Box>
            </Flex>
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

export default Matilda