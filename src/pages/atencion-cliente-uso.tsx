import React from 'react'
import { Flex, Box, Text, Image, SimpleGrid } from '@chakra-ui/react'
import ArrowButton from '../Content/Widgets/ArrowButton'
import Footer from '../Content/Components/footer'
import Contact from '../Content/Components/contact' 
import HighlightText from '../Content/Widgets/HighlightText'
import DottedSphere from '../Content/Widgets/3D-cube.js'

const AtencionCliente = () => {

    const Titulo = 'Revolucionando la Atención al Cliente con IA-Primero'
    const SubTitulo = 'Descubre cómo nuestra tecnología IA-Primero no solo eleva la satisfacción del cliente, sino que también empodera a nuestros agentes, optimizando cada interacción.'  

    const StatsList = [
      {number:'57,6 %', text:'/Valora/ la /rapidez/ cómo la característica más importante en los servicios de atención al cliente'}, 
      {number:'+50 %', text:'Realizan una /compra adicional/ después de una /experiencia positiva/'}, 
      {number:'42 %', text:'Responde a /experiencias negativas/ con /reseñas/ o /publicaciones/ en redes'}, 
      {number:'67 %', text:'De la /pérdida/ de /clientes/ se podría /evitar/ resolviendo los /problemas/ /rápidamente/'}
    ]

    const statsList = [
      {number:'86%', text:'Reducción de los Tiempos de Respuesta'}, 
      {number:'73%', text:'Incremento en la Valoración Positiva'}, 
      {number:'x2,5', text:'Prouductividad de los Agentes'}
    ]

    const VentajasTitle = 'Beneficios Dobles: Mejoras para Clientes y Agentes'
    const VentajasSubTitle = 'Nuestra filosofía IA-Primero no solo optimiza la eficiencia de los agentes y mejora la experiencia del cliente, sino que también fomenta interacciones más ricas y personalizadas, aumentando la lealtad del cliente y potenciando la productividad del equipo.'

    const ClientsTitle = 'Rápidez y Personalización'
    const ClientsText = 'Nuestro enfoque IA-Primero enriquece cada interacción con el cliente, ofreciendo respuestas más rápidas y personalizadas. Esto no solo acelera la resolución de consultas, sino que también adapta la comunicación a las necesidades individuales de cada cliente, elevando su satisfacción general y fomentando una relación más duradera y positiva.'
    const AgentsTitle = 'Maximiza la Productividad'
    const AgentsText = 'La filosofía IA-Primero es clave en la transformación del rol de nuestros agentes, proporcionándoles herramientas avanzadas para la automatización de tareas repetitivas y la gestión eficiente de casos complejos. Esto les permite enfocarse en resolver tareas críticas, mejorando su rendimiento y satisfacción laboral, mientras se eleva la calidad del servicio ofrecido.'

    return(
      <Box position="absolute"> 
          <Flex mt={{ base: "10vh", md: "15vh", lg: "15vh", xl: "20vh" }} width="100vw" justifyContent="center" zIndex="98" >
              <Flex width="100%" maxW="1200px" gap='50px' justifyContent={{ md: 'space-between' }} px={{ base: '20px', sm: '30px', md: '50px' }} flexDirection={{ base: 'column', md: 'row' }}>
                  <Box  width={{ base: '100%', md: 'auto' }}>
                  <Text background='brand.blue' backgroundClip={'text'} fontWeight={'medium'} fontSize={{base: '1.2em',sm:'1.3em', md: '1.4em', lg: '1.5em' }} >
                      Atención al cliente
                  </Text>
                  <Text mt='10px' lineHeight={1.1}  fontSize={{ base: '3em',sm:'4em', md: '4em', lg: '4.5em' }}fontWeight="medium" overflowWrap="break-word" whiteSpace="pre-wrap" color={'brand.clear_black'} >
                      {Titulo}
                      </Text>
                      <Text mt='30px' mb='30px' fontSize={{base: '1em',sm:'1.1em', md: '1.2em', lg: '1.3em' }} color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
                      {SubTitulo}
                      </Text>
                      <ArrowButton onClick={()=>{console.log('HOLA')}} text='Contactar'/>
                  </Box>

                  <Box display={{ base: 'none', md: 'block' }} width='40%' height="auto" flexShrink="0" >
                      <Image src={'/images/customer-support.png'}/>
                  </Box>
              </Flex>
          </Flex>

          <Box bg='white'>
            <Box clipPath= 'polygon(0 0, 100% 0, 100% 85%, 0 100%)'  mt={{ base: "8vh", md: "13vh", lg: "13vh", xl: "15vh" }} bg='gray.200' paddingTop={{ base: "5vh", md: "5vh", lg: "7vh", xl: "10vh" }} paddingBottom={{ base: "20vh", md: "25vh", lg: "20vh", xl: "18vh" }}> 
                {/*TÍTULO*/} 
                <Flex zIndex={10} justifyContent={'center'} width='100%'  px={{ base: '20px', sm: '30px', md: '5vw',lg: "10vw", xl: "15vw"  }} >
                    <Box> 
                        <Text textAlign="center" overflowWrap="break-word" whiteSpace="pre-wrap" fontSize={{ base: '1.5em', sm: '2em', md: '2em', lg: '2.8em' }} fontWeight="medium" color='brand.clear_black'>
                        Ofrece el Soporte Personalizado que tus Clientes Demandan
                        </Text>
                    </Box>
                </Flex>

                <Flex mt='50px' width="100vw" justifyContent="center" zIndex="98" >
                    <Flex width="100%" maxW="1200px" gap={{base:'30px', sm: '30px',md:'50px',lg:'80px' }} justifyContent={{ md: 'center' }} px={{ base: '20px', sm: '30px', md: '100px', lg:'50px' }} flexDirection={{base:'column', sm: 'column',md:'column',lg:'row' }}>
                        {statsList.map((stat, index) => 
                        (<Flex flex={1} zIndex={10} py={{base:'15px', sm: '20px',md:'25px',lg:'30px' }} px={{base:'30px', sm: '30px',md:'50px',lg:'60px' }}   alignItems={'center'} justifyContent={'center'} bg='gray.50' borderRadius={'1.5rem'} boxShadow={'0 0 10px 1px rgba(0, 0, 0, 0.15)'} >
                            <Flex flexDir={'column'}  alignItems={'center'}> 
                                <Text mt='10px' color={index == 0?'rgba(0, 123, 255)':index == 1? 'rgba(0, 123, 255, 0.8)':'rgba(0, 123, 255, 0.6)'} fontSize={{base: '1.8em',sm:'2em', md: '2.5em', lg: '2.8em' }}  fontWeight={'medium'} >{stat.number}</Text>
                                <Text textAlign={'center'} mt='10px' color={'brand.gray'} fontSize={{base: '1em',sm:'1em', md: '1.1em', lg: '1.2em' }}>{stat.text}</Text>
                            </Flex>
                        </Flex>))}
                    </Flex>
                </Flex>
            </Box>
          </Box>


      {/*VENTAJAS DE IA-PRIMERO*/} 
      <Box bg='white' py={{ base: "5vh", md: "5vh", lg: "7vh", xl: "10vh" }}> 
      {/*TÍTULO*/} 
      <Flex justifyContent={'center'} width='100%'  px={{ base: '20px', sm: '30px', md: '5vw',lg: "10vw", xl: "15vw"  }} >
        <Box>        
        <Text textAlign="center" overflowWrap="break-word" whiteSpace="pre-wrap" fontSize={{ base: '1.5em', sm: '2em', md: '2em', lg: '2.8em' }} fontWeight="medium" color='brand.clear_black'>
          {VentajasTitle}
        </Text>
        <Text mt='30px' textAlign={'center'} mb='30px' fontSize={{base: '1em',sm:'1.1em', md: '1.2em', lg: '1.3em' }} color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
          {VentajasSubTitle}
          </Text>
          </Box>  
      </Flex>

      {/*CONSUMIDORES*/} 
      <Flex mt={{ base: "5vh", md: "5vh", lg: "7vh", xl: "10vh" }} width="100vw" color="black" justifyContent="center" >
        <Flex  width="100%" maxW="1200px" gap={{ base: "50px", md: "70px", lg: "100px", xl: "120px" }}justifyContent={{ md: 'space-between' }} px={{ base: '20px', sm: '30px', md: '50px' }} flexDirection={{ base: 'column', md: 'row' }}>
            <Box flex={{base:'auto',md:'5'}}  width={{ base: '100%', md: 'auto' }}>
              <Flex >
                <Box bg='brand.blue'  borderRadius={'2rem'} px='12px' py='7px' > 
                  <Text fontSize={{base: '1em',sm:'1em', md: '1.3em', lg: '1.5em' }} color='white' fontWeight={'medium'}>Clientes</Text>
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
              <Image src={'/images/time.png'}/>
            </Box>
          </Flex> 
      </Flex>

      {/*AGENTES*/} 
      <Flex mt={{ base: "5vh", md: "5vh", lg: "7vh", xl: "10vh" }}width="100vw" color="black" justifyContent="center" >
        <Flex  width="100%" maxW="1200px" gap={{ base: "50px", md: "70px", lg: "100px", xl: "120px" }}justifyContent={{ md: 'space-between' }} px={{ base: '20px', sm: '30px', md: '50px' }} flexDirection={{ base: 'column-reverse', md: 'row' }}>
            <Box flex={{base:'auto',md:'3'}}  width={{ base: '100%', md: '40%', lg: '30%' }}  height="auto" flexShrink="0">
              <Image src={'/images/productivity.png'}/>
            </Box>
            <Box flex={{base:'auto',md:'5'}} width={{ base: '100%', md: 'auto' }}>
              <Flex >
                  <Box bg='brand.blue'  borderRadius={'2rem'} px='12px' py='7px' > 
                    <Text fontSize={{base: '1em',sm:'1em', md: '1.3em', lg: '1.5em' }}  color='white' fontWeight={'medium'}>Agentes</Text>
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
    
    {/*ESTADÍSTICAS*/} 
    
    <Box bg='white' overflow={'hidden'}> 
      <Box width={'100%'}  bgGradient='linear(to-br, blue.900, blue.800, blue.700)' clipPath= 'polygon(0 10%, 100% 0, 100% 100%, 0 100%)' py='15vh'>
        <Flex justifyContent={'center'} width='100%'  px={{ base: '20px', sm: '30px', md: '5vw',lg: "10vw", xl: "15vw"  }} >
          <Flex  width="100%" maxW="1200px" gap='50px' justifyContent={{ md: 'space-between' }} px={{ base: '20px', sm: '30px', md: '50px' }} flexDirection={{ base: 'column', md: 'row' }}>
              <Box flex='3' width={{ base: '100%', md: 'auto' }}>
                <Text  overflowWrap="break-word" whiteSpace="pre-wrap" color={'white'} fontSize={{base: '1.5em',sm:'2em', md: '2em', lg: '2.5em' }}  fontWeight={'medium'}  >
                  {ClientsTitle}
                </Text>
                <Text mt='30px' fontSize={'1.1em'}  color="gray.400"  overflowWrap="break-word" whiteSpace="pre-wrap">
                  {ClientsText}
                </Text>
              </Box>

              <Box color='white'  flex='4' display={{ base: 'none', md: 'block' }} width={{ md: '40%', lg: '30%' }} height="auto" flexShrink="0" />
                <Box  display={{ base: 'none', md: 'none', lg:'none', xl:'block' }}width='35vw' ml={'65vw'} left={0} mt='-10vh' height={'50vh'} position={'absolute'} >
                  <DottedSphere/>
                </Box>
            </Flex>   
        </Flex>
        <Flex width="100vw" color="black" justifyContent="center" >
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing="20px" mt="5vh" width="100%" maxW="1200px" px={{ base: '20px', sm: '30px', md: '50px' }}>
            {StatsList.map((stat, index) => (
            <Box key={`stata-${index}`}> 
              <Box borderLeftColor = 'cyan.400' borderLeftWidth={'2px'} >
                <Text fontSize={'1.5em'} fontWeight={'bold'} color='white' ml={'10px'}>{stat.number}</Text>
              </Box>
              <Box mt='15px' ml='10px'> 
                <HighlightText text={stat.text}/>
              </Box>
              </Box>))}
          </SimpleGrid>
        </Flex>
      </Box>
    </Box>
  <Contact/>
    <Footer/>
      </Box>
    )
}

export default AtencionCliente