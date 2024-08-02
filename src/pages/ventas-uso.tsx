import React from 'react'
import { Flex, Box, Text, Image } from '@chakra-ui/react'
import ArrowButton from '../Content/Widgets/ArrowButton'
import Footer from '../Content/Components/footer'
import Contact from '../Content/Components/contact'


const Ventas = ()=>{

    const Titulo = 'Transformando la Captación de Leads con IA-Primero'
    const SubTitulo = 'Descubre cómo nuestra filosofía IA-Primero automatiza y optimiza la generación de leads, impulsando tus ventas con eficiencia y precisión sin precedentes.'  
    const statsList = [
                            {number:'+18%', text:'Volumen de ventas'}, 
                            {number:'80%', text:'Calificación de leads'}, 
                            {number:'-70%', text:'Tiempo de respuesta'}
                    ]

    const VentajasTitle = 'Impulsa a tu Equipo de Ventas'
    const VentajasSubTitle= 'Nuestra filosofía IA-Primero no solo acelera el proceso de ventas y mejora la captación de leads, sino que también capacita a los comerciales con herramientas que potencian su efectividad y eficiencia.'

    const ClientsTitle= 'Agilidad y Precisión'
    const ClientsText= 'Mediante el uso de IA, transformamos el proceso de ventas, facilitando una captación de leads más rápida y precisa. Esto no solo incrementa el volumen de ventas, sino que también asegura una mayor precisión al conectar con clientes potencialmente interesados, optimizando así cada oportunidad de venta.'
    const AgentsTitle= 'Eficiencia y Enfoque'
    const AgentsText= 'La inteligencia artificial optimiza la identificación y seguimiento de leads cualificados, permitiendo a los comerciales centrarse en cerrar ventas de manera efectiva. Con herramientas que anticipan las necesidades del cliente, los comerciales ofrecen soluciones personalizadas que mejoran la satisfacción y fidelidad del cliente.'

     return(
        <Box  position="absolute"> 
            <Flex mt={{ base: "10vh", md: "15vh", lg: "15vh", xl: "20vh" }} width="100vw" justifyContent="center" zIndex="98" >
                <Flex width="100%" maxW="1200px" gap='50px' justifyContent={{ md: 'space-between' }} px={{ base: '20px', sm: '30px', md: '50px' }} flexDirection={{ base: 'column', md: 'row' }}>
                    <Box  width={{ base: '100%', md: 'auto' }}>
                    <Text background='brand.blue' backgroundClip={'text'} fontWeight={'medium'} fontSize={{base: '1.2em',sm:'1.3em', md: '1.4em', lg: '1.5em' }} >
                        Ventas
                    </Text>
                    <Text mt='10px' lineHeight={1.1}  fontSize={{ base: '3em',sm:'4em', md: '4em', lg: '4.5em' }}fontWeight="medium" overflowWrap="break-word" whiteSpace="pre-wrap" color={'brand.clear_black'} >
                        {Titulo}
                        </Text>
                        <Text mt='30px' mb='30px' fontSize={{base: '1em',sm:'1.1em', md: '1.2em', lg: '1.3em' }} color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
                        {SubTitulo}
                        </Text>
                        <ArrowButton onClick={()=>{console.log('HOLA')}} text='Contactar'/>
                    </Box>
                    <Box display={{ base: 'none', md: 'block' }} width='35%' height="auto" flexShrink="0" >
                        <Image src={'/images/leads.png'} alt='leads'/>
                    </Box>
                </Flex>
            </Flex>
            
            <Box bg='gray.100'>
            <Box clipPath= 'polygon(0 0, 100% 0, 100% 85%, 0 100%)'  mt={{ base: "8vh", md: "13vh", lg: "13vh", xl: "15vh" }} bg='gray.200' paddingTop={{ base: "5vh", md: "5vh", lg: "7vh", xl: "10vh" }}  paddingBottom={{ base: "20vh", md: "25vh", lg: "20vh", xl: "18vh" }}> 
                {/*TÍTULO*/} 
                <Flex zIndex={10} justifyContent={'center'} width='100%'  px={{ base: '20px', sm: '30px', md: '5vw',lg: "10vw", xl: "15vw"  }} >
                  <Box>        
                    <Text textAlign="center" overflowWrap="break-word" whiteSpace="pre-wrap" fontSize={{ base: '1.5em', sm: '2em', md: '2em', lg: '2.8em' }} fontWeight="medium" color='brand.clear_black'>
                      {VentajasTitle}
                    </Text>
                    <Text mt='30px' textAlign={'center'} mb='30px' fontSize={{base: '1em',sm:'1.1em', md: '1.2em', lg: '1.3em' }} color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
                      {VentajasSubTitle}
                    </Text>
                  </Box> 
                </Flex>

                <Flex mt='50px' width="100vw" justifyContent="center" zIndex="98" >
                    <Flex width="100%" maxW="1200px" gap={{base:'30px', sm: '30px',md:'50px',lg:'80px' }} justifyContent={{ md: 'center' }} px={{ base: '20px', sm: '30px', md: '100px', lg:'50px' }} flexDirection={{base:'column', sm: 'column',md:'column',lg:'row' }}>
                            {statsList.map((stat, index) => 
                            (<Flex flex={1} zIndex={10} py={{base:'15px', sm: '20px',md:'25px',lg:'30px' }} px={{base:'30px', sm: '30px',md:'50px',lg:'60px' }}   alignItems={'center'} justifyContent={'center'} bg='gray.50' borderRadius={'1.5rem'} boxShadow={'0 0 10px 1px rgba(0, 0, 0, 0.15)'} >
                                <Flex flexDir={'column'}  alignItems={'center'}> 
                                    <Text mt='10px'  color={index == 0?'rgba(0, 123, 255)':index == 1? 'rgba(0, 123, 255, 0.8)':'rgba(0, 123, 255, 0.6)'} fontSize={{base: '1.8em',sm:'2em', md: '2.5em', lg: '2.8em' }}  fontWeight={'medium'} >{stat.number}</Text>
                                    <Text mt='10px' color={'brand.gray'} fontSize={{base: '1em',sm:'1em', md: '1.1em', lg: '1.2em' }}>{stat.text}</Text>
                                </Flex>
                            </Flex>))}
                    
                    </Flex>
                </Flex>
            </Box>
            </Box>


       {/*VENTAJAS DE IA-PRIMERO*/} 
        <Box  bg='gray.100' py={{ base: "5vh", md: "5vh", lg: "7vh", xl: "10vh" }}> 
        {/*TÍTULO*/} 
        <Flex justifyContent={'center'} width='100%'  px={{ base: '20px', sm: '30px', md: '5vw',lg: "10vw", xl: "15vw"  }} >
          <Text textAlign="center" overflowWrap="break-word" whiteSpace="pre-wrap" fontSize={{ base: '1.5em', sm: '2em', md: '2em', lg: '2.8em' }} fontWeight="medium" color='brand.clear_black'>
            Doble Impacto: Avances en Ventas y Empoderamiento Comercial
          </Text>
        </Flex>

        {/*CONSUMIDORES*/} 
        <Flex mt={{ base: "10vh", md: "10vh", lg: "12vh", xl: "15vh" }} width="100vw" color="black" justifyContent="center" >
          <Flex  width="100%" maxW="1200px" gap={{ base: "50px", md: "70px", lg: "100px", xl: "120px" }}justifyContent={{ md: 'space-between' }} px={{ base: '20px', sm: '30px', md: '50px' }} flexDirection={{ base: 'column', md: 'row' }}>
              <Box  flex={{base:'auto',md:'5'}}  width={{ base: '100%', md: 'auto' }}>
                <Flex >
                  <Box bg='brand.blue'  borderRadius={'2rem'} px='12px' py='7px' > 
                    <Text fontSize={{base: '1em',sm:'1em', md: '1.3em', lg: '1.5em' }} color='white' fontWeight={'medium'}>Ventas</Text>
                  </Box>
                </Flex>
                <Text overflowWrap="break-word" whiteSpace="pre-wrap" color={'brand.clear_black'} fontSize={{base: '1.5em',sm:'2em', md: '2em', lg: '2.5em' }} mt='10px'  fontWeight={'medium'}  >
                  {ClientsTitle}
                </Text>
                <Text mt='10px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
                  {ClientsText}
                </Text>
              </Box>

              <Box flex={{base:'auto',md:'3'}}  width={{ base: '100%', md: '40%', lg: '30%' }}  height="auto" flexShrink="0">
                <Image src={'/images/dart-board.png'} alt='dart-board'/>
              </Box>
            </Flex> 
        </Flex>

        {/*AGENTES*/} 
        <Flex mt={{ base: "10vh", md: "10vh", lg: "12vh", xl: "15vh" }} width="100vw" color="black" justifyContent="center" >
          <Flex  width="100%" maxW="1200px" gap={{ base: "50px", md: "70px", lg: "100px", xl: "120px" }}justifyContent={{ md: 'space-between' }} px={{ base: '20px', sm: '30px', md: '50px' }} flexDirection={{ base: 'column-reverse', md: 'row' }}>
          <Box flex={{base:'auto',md:'3'}}  width={{ base: '100%', md: '40%', lg: '30%' }}  height="auto" flexShrink="0">
                <Image src={'/images/magnify.png'}/>
              </Box>
              <Box  flex={{base:'auto',md:'5'}} width={{ base: '100%', md: 'auto' }}>
                <Flex >
                    <Box bg='brand.blue'  borderRadius={'2rem'} px='12px' py='7px' > 
                      <Text fontSize={{base: '1em',sm:'1em', md: '1.3em', lg: '1.5em' }}  color='white' fontWeight={'medium'}>Comerciales</Text>
                    </Box>
                </Flex>
                <Text  mt='10px' overflowWrap="break-word" whiteSpace="pre-wrap" color={'brand.clear_black'} fontSize={{base: '1.5em',sm:'2em', md: '2em', lg: '2.5em' }}  fontWeight={'medium'}  >
                  {AgentsTitle}
                </Text>
                <Text mt='10px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
                  {AgentsText}
                </Text>
              </Box>
            </Flex>
        </Flex>
        </Box>

    <Contact/>
      <Footer/>
        </Box>
    )
}

export default Ventas