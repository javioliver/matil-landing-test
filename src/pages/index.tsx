//NEXT
import Head from 'next/head'
import { useRouter } from 'next/router'
import '../app/globals.css'
//TRANSLATION
import { useTranslation } from 'react-i18next'
//REACT
import React , {useState, useRef, useEffect} from 'react'
//FRONT
import { Flex, Text, Box, Image, IconButton, Grid, Icon } from '@chakra-ui/react'
//COMPONENTS
import Footer from '../Content/Components/footer'
import Contact from '../Content/Components/contact'
import Chatbot from '../Content/Widgets/Chatbot'
import WaterDrop from '../Content/Widgets/WaterDrop.js'
//ICONS
import { IoIosArrowForward,IoIosArrowBack } from "react-icons/io"
import { BsMegaphoneFill,BsFillPeopleFill } from "react-icons/bs"
import { HiMiniPresentationChartLine } from "react-icons/hi2"
import { FaCheck, FaPencilAlt,FaLaptopCode ,FaHeadset } from "react-icons/fa"
import { GrDocumentText } from "react-icons/gr"
import { FaDumbbell } from "react-icons/fa6"

//MAIN FUNCTION
const Main = () => {

  const { t } = useTranslation()

  const SubTitulo = 'Ofrece una experiencia rápida y personalizada a tus clientes con una plataforma que centraliza las comunicaciones y una IA experta en tu negocio, capaz de consultar datos, tomar decisiones y reaccionar a eventos.'  
  

  const Titulo2 = 'La IA es Tímida.'
  const VentajasSubTitle = 'Los LLMs pueden hacer muchas cosas, pero no por sí solos. Necesitan un entorno en el que puedan obtener datos y donde dispongan de los mecanismos necesarios para tomar decisiones. En MATIL, desarrollamos ese entorno para tu negocio.'
  const timidaList = [
      ['1. Estudio', 'Analizamos tus procesos comunicativos e identificamos las interacciones más repetitivas.'],
      ['2. Desarrollo', 'Creamos integraciones personalizadas para que Matilda acceda a la misma información que tu equipo.'],
      ['3. Entrenamiento', 'Capacitamos a Matilda para que se adapte al tono y nivel de tu equipo.'],
      ['4. Testeo', 'Supervisamos y evaluamos las interacciones de Matilda para optimizar y sugerir mejoras.']
  ]

  const CanalesList = [
    {icon:FaHeadset, canal:'Atención al Cliente', text:['Escala la atención al cliente', 'Reduce el coste de consultas telefónicas', 'Disminuye el tiempo de respuesta']}, 
    {icon:HiMiniPresentationChartLine, canal:'Ventas', text:['Incrementa el volumen de ventas', 'Utiliza canales de mensajería para vender','Simplifica procesos administrativos']}, 
    {icon:BsFillPeopleFill, canal:'Comunicación Interna', text: ['Promueve la sinergia entre departamentos','Facilita flujos de comunicación abiertos y efectivos', 'Centraliza la información']},
    {icon:BsMegaphoneFill, canal:'Marketing', text:['Aumenta el ratio de captación de leads','Mejora la cualificación de contactos','Disminuye el coste de adquisición de clientes']}, 
]

  const platformsTitle = 'Aplica IA-primero a todo tipo de comunicación con nuestras plataformas'
  const [expandedIndex, setExpandedIndex] = useState(null)


  const statsList = [
    {number:'SuperService', text:'Unifica todos los canales que tus clientes usan en un mismo lugar, donde Matilda desarrollará todos los tickets que lleguen todo lo que pueda. Con SuperService, libera a tu equipo del trabajo más repetitivo, y ofrece a tus clientes una atención personalizada e instantánea.'}, 
    {number:'SuperSale', text:'Administra todos tus leads y comunicaciones comerciales en una misma plataforma. Matilda desarrolla las conversaciones de manera tan natural como tu mejor comercial; deja que se haga cargo de filtrar tus prospectos mediante flujos conversacionales predefinidos, y permite que tus comerciales humanos se encarguen del cierre.'}, 
    {number:'SuperBlitz', text:'Mantén conversaciones con miles de personas a la vez y obtén los resultados sin haber redactado ni una sola palabra: desde embudos de venta hasta peticiones de presupuestos de posibles proveedores. Desarrollar por completo cualquier conversación con un objetivo bien claro, por compleja que sea, es posible mediante SuperBlitz.'}
]


  const AIFirstTitle = 'Filosofía IA-primero'

  const AIAIFirst1Title = 'Tu negocio y la IA, el uno para el otro'
  const AIAIFirst1Text = 'Son pocos los que aterrizan el uso de la IA en sus negocios. Esto es porque, por sí sola, la IA no es muy útil; necesita integraciones y funciones que le permitan conectar con tu negocio. En MATIL identificamos exactamente qué integraciones necesita tu negocio para entenderse con la IA y poder aprovechar todo su potencial. '

  const AIAIFirst2Title = 'Conversaciones humanas, con los humanos que más te importan'
  const AIAIFirst2Text = 'Sabemos lo importante que es para un negocio cuidar todas y cada una de tus relaciones comerciales. Por eso nuestros modelos están fine-tuned con cientos de interacciones ejemplares entre empresa y cliente, para asegurarnos de que cada mensaje que genere Matilda cumpla con los más altos estándares de calidad.'

  const AIAIFirst3Title = 'Quédate con lo que importa'
  const AIAIFirst3Text = 'Con cada mensaje de cada conversación procesada en MATIL, nos aseguramos de que Matilda pueda contestar de una manera satisfactoria. Si Matilda no sabe qué contestar o el cliente se comporta de manera inesperada, Matilda transfiere la conversación a un miembro de tu equipo, para que nadie tire su tiempo.'

  const AIAIFirst4Title = 'IA-Primero'
  const AIAIFirst4Text = 'En MATIL creemos que si la IA puede realizar una tarea mejor que un humano, debería hacerla, y que esto es bueno para todos; el cliente es atendido inmediatamente y con menor riesgo de error, y tu equipo se puede centrar en asuntos que requieren un mayor criterio humano. En MATIL apostamos por IA-Primero.'
   
  const [chatRef, setChatRef] = useState(0)
  const chatRefMap = [1, 4, 7, 2, 5, 8, 3, 6, 9]

  const examplesList = [
      ['¿Dónde está mi pedido?', 'Contestación automática a una de las preguntas más frecuentes en la atención al cliente de cualquier negocio de Ecommerce. ¿Dónde está mi pedido?.'],
      ['Venta proactiva', 'Automatización de venta cruzada al vender cierto producto un cliente.'],
      ['Automatización inteligente', 'Automatización de procesos internos de la empresa que requieran tomar acciones a partir de una comprensión profunda de documentos.'],
      ['Pérdida de cuenta', 'Automatización del proceso de recuperación de cuenta de un cliente, problema muy común entre los clientes de cualquier negocio con presencia online.'],
      ['Guía de compra', 'Asistente comercial con capacidad de hacer recomendaciones personalizadas según la intención y el historial del cliente. Incluso podría llegar a añadir productos al carrito de manera automática.',],
      ['Filtrado de información', 'Optimización del manejo de grandes volúmenes de datos, seleccionando solo la información relevante para acciones específicas de la empresa.'],
      ['Problema con producto', 'Resolución de problemas básicos a través de información de los productos y las FAQs.'],
      ['Carrito abandonado', 'Recordatorio personalizado de carrito abandonado.'],
      ['Contacto con proveedores', 'Automatización del proceso de gestión y comunicación con proveedores, asegurando eficiencia y actualización constante en las relaciones comerciales.']
    ]

  const timidaRef = useRef<HTMLDivElement>(null)
  const firstDropRef = useRef<HTMLDivElement>(null)
  const lastDropRef = useRef<HTMLDivElement>(null)
  const [lineLong, setLineLong] = useState({left:0,long:0})

  const { pathname } = useRouter()


  useEffect(() => {
    const updateLinePosition = () => {
      if (firstDropRef.current && lastDropRef.current) {
        const firstRect = firstDropRef.current.getBoundingClientRect()
        const lastRect = lastDropRef.current.getBoundingClientRect()
        if (window.innerWidth > 960) setLineLong({left:firstRect.right - 10, long:lastRect.left - firstRect.right + 20})
       }
    }
    updateLinePosition()
    window.addEventListener('resize', updateLinePosition);
    return () => {
      window.removeEventListener('resize', updateLinePosition);
    }
  }, [])


  const [windowWidth, setWindowWidth] = useState<number>(0)
  const [windowHeight, setWindowHeight] = useState<number>(0)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);

      }
      
      window.addEventListener('scroll', handleScroll);
      handleScroll()
  
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  
  return (<> 
 
    
    <Head>
      <title>MATIL</title>
      <meta name="description" content="Impulsa tu negocio con soluciones de IA. Mejora la atención al cliente, aumenta las ventas proactivas y envía correos masivos personalizados con nuestra tecnología innovadora. Descubre cómo la inteligencia artificial puede transformar tu empresa."/>
    </Head>

      {/*AURORA BACKGROUND*/}
      <Box width="100%"  height={{ base: "20vh", md: "20vh", lg: "20vh", xl: "30vh" }} clipPath="polygon(0 0, 100% 0, 100% 45%, 0 100%)"  position="relative" overflow="hidden" bgGradient="linear(to-r, #89f7fe, #66a6ff)" backgroundSize="200% 200%">
        <div className="auroraBlob blob1"></div>
        <div className="auroraBlob blob2"></div>
        <div className="auroraBlob blob3"></div>
      </Box>
 
      <Box mt={{ base: "-21vh", md: "-25vh", lg: "-25vh", xl: "-10vh" }}  position="absolute" >
        {/*HERO*/}
        <Flex  width="100vw" color="black"  justifyContent="center" zIndex="98" >
          <Flex width="100%" maxW="1200px" gap={{ base: '20px', md: '30px',lg:'40px',xl:'70px' }} justifyContent={'space-between'} px={{ base: '20px', sm: '30px', md: '50px' }} flexDirection={{ base: 'column', md: 'column',lg:'column',xl:'row' }}>
            <Box   mt={{ base: "10vh", md: "13vh", lg: "12vh", xl: "9vh" }} >
              <Text lineHeight={1.1} fontSize={{ base: '3em',sm:'4em', md: '4em', lg: '4.5em' }} fontWeight="medium" whiteSpace={'nowrap'}  color={'brand.clear_black'} >
                {t('Hero_1')}
              </Text>
              <Text lineHeight={1.1} fontSize={{ base: '3em',sm:'4em', md: '4em', lg: '4.5em' }} fontWeight="medium"  whiteSpace={'nowrap'} color={'brand.clear_black'} >
                {t('Hero_2')}
              </Text>
              <Text lineHeight={1.1}  fontSize={{ base: '3em',sm:'4em', md: '4em', lg: '4.5em' }} fontWeight="medium"whiteSpace={'nowrap'}  color={'brand.clear_black'} >
                <b style={{background: 'linear-gradient(120deg, rgba(150, 175, 240), rgba(120, 200, 240))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>{t('Hero_3')}</b>
              </Text>
              <Text mt='50px' fontSize={{base: '1em',sm:'1.1em', md: '1.2em', lg: '1.3em' }} color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
                {SubTitulo}
              </Text>
            </Box>
            <Flex justifyContent={'center'} alignItems={{base:'center',sm:'center',md:'start',lg:'start',xl:'start'}} mt={{lg:'0px',xl:'-70px' }}  flexDir={{base:'column-reverse',sm:'column-reverse',md:'row',lg:'row',xl:'row'}}  height="auto" >
                <Box mt={{base:'10px',sm:'10px',md:'0px',lg:'0px',xl:'0px' }} overflow={'hidden'} zIndex={1}  position={'relative'}  height={'660px'} width={windowWidth > 420 ? '350px':windowWidth - 50} borderRadius={'2rem'} borderWidth='7px' borderColor={'gray.200'} bg='white'  boxShadow={'0 0 10px 1px rgba(0, 0, 0, 0.15)'} >
                    <Chatbot currentChat={chatRefMap[chatRef]}/>
                </Box>
                <Flex width={'300px'} gap='10px' alignItems={'center'}  flexWrap={'wrap'} fontSize={{base: '.9em',sm:'1em' }} boxShadow='0 0 10px 1px rgba(0, 0, 0, 0.15)' bg='gray.100' mt={{base:'20px',sm:'20px',md:'20px',lg:'40px',xl:'40px'}} p='15px' flexDir={'column'}  borderRadius={{base:'.7rem',sm:'.7rem',md:'0 .7rem .7rem 0'}}>
                      <Flex gap='5px' alignItems={'center'} justifyContent={'space-between'} width={'100%'}>
                        <IconButton color='brand.clear_black' aria-label='example-back' icon={<IoIosArrowBack/>} isRound size='sm' onClick={() =>{if (chatRef === 0) {setChatRef(8)} else setChatRef(chatRef - 1)}}/>
                          <Text fontWeight={'medium'} fontSize={'.95em'} color='brand.clear_black'> {examplesList[chatRef][0]}</Text>
                        <IconButton  color='brand.clear_black'aria-label='example-forward' icon={<IoIosArrowForward/>} isRound size='sm' onClick={() =>{if (chatRef === 8) {setChatRef(0)} else setChatRef(chatRef + 1)}}/>
                      </Flex>
                      <Flex flexDir={'row'} width='100%'> 
                        <Text fontSize={'.9em'} fontWeight={'medium'} color='gray.500'>{chatRef%3 === 0 ? 'Atención al cliente':chatRef%3 === 1?'Ventas':'Comunicación interna'}</Text> 
                      </Flex> 
                      <Box width={'100%'} height={'2px'} bg='gray.300' mb='10px'/>
                      <Text fontSize={'.9em'} color='brand.gray'>{examplesList[chatRef][1]}</Text>    
                      <Text fontSize={'.75em'}  color='brand.gray'mt='10px'>{chatRef + 1} de 9 interacciones</Text>
                  </Flex>
            </Flex>
          </Flex>
        </Flex>

        {/*IA-TIMIDA */}
        <Box overflow={'hidden'} ref={timidaRef} mt={{ base: "6vh", md: "5vh", lg: "6vh", xl: "8vh" }} bg='gray.100' py={{ base: "5vh", md: "5vh", lg: "7vh", xl: "10vh" }}> 
          
          <Box position={'absolute'} bgGradient='linear(to-br, blue.900, blue.800, blue.700)'  left={0} height={timidaRef.current?timidaRef.current.getBoundingClientRect().height - windowHeight*0.02:0} width='2vw'  mt={{ base: "-5vh", md: "-5vh", lg: "-7vh", xl: "-10vh" }} zIndex={0}  />
          <Box position={'absolute'} bg='brand.blue'  opacity={0.9}  left={'1vw'} height={timidaRef.current?timidaRef.current.getBoundingClientRect().height - windowHeight*0.02:0} width='2vw'  mt={{ base: "-3vh", md: "-3vh", lg: "-6vh", xl: "-8vh" }} zIndex={0} />         
          <Box position={'absolute'} bgGradient='linear(to-br, blue.900, blue.800, blue.700)'  right={0} height={timidaRef.current?timidaRef.current.getBoundingClientRect().height - window.innerHeight*0.02:0} width='2vw'  mt={{ base: "-5vh", md: "-5vh", lg: "-7vh", xl: "-10vh" }} zIndex={0}  />
          <Box position={'absolute'} bg='brand.blue'  opacity={0.9}  right={'1vw'} height={timidaRef.current?timidaRef.current.getBoundingClientRect().height - windowHeight*0.02:0} width='2vw'  mt={{ base: "-3vh", md: "-3vh", lg: "-6vh", xl: "-8vh" }} zIndex={0} />

          <Flex justifyContent={'center'} width='100%'  px={{ base: '20px', sm: '30px', md: '5vw',lg: "10vw", xl: "15vw"  }} >
            <Box> 
              <Text textAlign="center" overflowWrap="break-word" whiteSpace="pre-wrap" fontSize={{ base: '1em', sm: '2.3em', md: '2.5em', lg: '3em' }} fontWeight="medium" color='brand.clear_black'>
                {Titulo2}
              </Text>
              <Text textAlign="center" overflowWrap="break-word" whiteSpace="pre-wrap" fontSize={{ base: '1.5em', sm: '1.8em', md: '2em', lg: '2.5em' }} fontWeight="medium" color='brand.clear_black'>
                Haz que Conecte con tu Negocio.
              </Text>
              <Text mt='30px' textAlign={'center'} mb='30px' fontSize={{base: '1em',sm:'1.1em', md: '1.2em', lg: '1.3em' }} color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
              {VentajasSubTitle}
              </Text>

              <Flex flexDir={{base:'column',sm: 'column', md: 'column',lg:'row' }} alignItems="stretch" gap='40px' mt={{ base: "6vh", md: "5vh", lg: "6vh", xl: "8vh" }}>
                  {windowWidth > 960 &&<Box position={'absolute'} bg='gray.300' borderRadius={'1rem'} left={lineLong.left} height={'10px'} mt='20px' zIndex={1} width={lineLong.long}/>}
                  {timidaList.map((element, index) => (
                    <Flex  flex={1} flexDirection={{ base: index%2===0? 'row':'row-reverse', sm: index%2===0? 'row':'row-reverse', md: index%2===0? 'row':'row-reverse', lg: 'column', xl: 'column' }}  key={`water-drop-element-${index}`} alignItems={'center'} >
                      <Box zIndex={2} ref={index === 0 ? firstDropRef : (index === timidaList.length - 1 ? lastDropRef : null)}> 
                        <WaterDrop color='brand.blue' rotation={windowWidth > 960 ?270:index%2===0?0:180}  icon={index === 0 ? FaPencilAlt:index === 1 ?FaLaptopCode:index === 2 ? FaDumbbell: GrDocumentText}/>
                      </Box>
                      <Box height={'100%'} bg='white' borderRadius={'.7rem'} p='20px'>
                        <Text fontSize={'1.2em'} fontWeight={'medium'} textAlign={'center'}>{element[0]}</Text>
                        <Text mt='10px' color='brand.gray' textAlign={'center'}>{element[1]}</Text>
                      </Box>
                    </Flex>
                  ))}
              </Flex>
            </Box>
          </Flex>
        </Box>
 

        <Box  bg='white' py={{ base: "5vh", md: "5vh", lg: "7vh", xl: "10vh" }}> 
          {/*TÍTULO*/} 
          < Flex justifyContent={'center'} width='100%'  px={{ base: '20px', sm: '30px', md: '5vw',lg: "10vw", xl: "15vw"  }} >
            <Text textAlign="center" overflowWrap="break-word" whiteSpace="pre-wrap" fontSize={{ base: '2.2em', sm: '2.7em', md: '3em', lg: '4em' }} fontWeight="medium" color='brand.clear_black'>{AIFirstTitle}</Text>
          </Flex>


          {/*HISTORIAL*/} 
          <Flex mt={{ base: "7vh", md: "7vh", lg: "8vh", xl: "10vh" }} width="100vw" color="black" justifyContent="center" >
            <Flex  width="100%" maxW="1200px"gap={{ base: "30px", md: "20px",lg: "70px", xl: "100px" }} justifyContent={{ md: 'space-between' }} px={{ base: '20px', sm: '30px', md: '50px' }} flexDirection={{ base: 'column', md: 'row' }}>
                <Box flex={{base:'auto',md:'4'}}width={{ base: '100%', md: '40%', lg: '30%' }}>
                
                <Text overflowWrap="break-word" whiteSpace="pre-wrap" color={'brand.clear_black'} fontSize={{base: '1.5em',sm:'2em', md: '2em', lg: '2.5em' }} mt='10px'  fontWeight={'medium'}  >
                  {AIAIFirst1Title}
                </Text>
                <Text mt='10px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
                    {AIAIFirst1Text}
                </Text>
                </Box>

                <Box  borderRadius={'1rem'} overflow={'hidden'} flex={{base:'auto',md:'2'}}width={{ base: '80%', md: '40%', lg: '30%' }}  height="auto" flexShrink="0">
                    <Image src={'/images/chip.png'}/>
                </Box>
            </Flex> 
        </Flex>

        {/*TICKETS PENDIENTES*/} 
        <Flex mt={{ base: "7vh", md: "7vh", lg: "8vh", xl: "10vh" }} width="100vw" color="black" justifyContent="center" >
            <Flex  width="100%" maxW="1200px"gap={{ base: "30px", md: "20px",lg: "70px", xl: "100px" }} justifyContent={{ md: 'space-between' }} px={{ base: '20px', sm: '30px', md: '50px' }} flexDirection={{ base: 'column-reverse', md: 'row' }}>
                <Box   borderRadius={'1rem'} overflow={'hidden'} flex={{base:'auto',md:'2'}} width={{ base: '80%', md: '40%', lg: '30%' }}  height="auto" flexShrink="0">
                    <Image src={'/images/yellow-chat.png'}/>
                </Box>
                <Box flex={{base:'auto',md:'4'}} >
            
                <Text  mt='10px' overflowWrap="break-word" whiteSpace="pre-wrap" color={'brand.clear_black'} fontSize={{base: '1.5em',sm:'2em', md: '2em', lg: '2.5em' }}  fontWeight={'medium'}  >
                  {AIAIFirst2Title}
                </Text>
                <Text mt='10px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
                    {AIAIFirst2Text}
                </Text>
                </Box>
            </Flex>
        </Flex>

             {/*HISTORIAL*/} 
        <Flex mt={{ base: "7vh", md: "7vh", lg: "8vh", xl: "10vh" }}  width="100vw" color="black" justifyContent="center" >
          <Flex  width="100%" maxW="1200px"gap={{ base: "30px", md: "20px",lg: "70px", xl: "100px" }} justifyContent={{ md: 'space-between' }} px={{ base: '20px', sm: '30px', md: '50px' }} flexDirection={{ base: 'column', md: 'row' }}>
                <Box flex={{base:'auto',md:'4'}} width={{ base: '100%', md: 'auto' }}>
                
                <Text overflowWrap="break-word" whiteSpace="pre-wrap" color={'brand.clear_black'} fontSize={{base: '1.5em',sm:'2em', md: '2em', lg: '2.5em' }} mt='10px'  fontWeight={'medium'}  >
                   {AIAIFirst3Title}
                </Text>
                <Text mt='10px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
                    {AIAIFirst3Text}
                </Text>
                </Box>

                <Box  borderRadius={'1rem'} overflow={'hidden'} flex={{base:'auto',md:'2'}} width={{ base: '80%', md: '40%', lg: '30%' }}  height="auto" flexShrink="0">
                    <Image src={'/images/first.png'}/>
                </Box>
            </Flex> 
        </Flex>

        {/*TICKETS PENDIENTES*/} 
        <Flex mt={{ base: "7vh", md: "7vh", lg: "8vh", xl: "10vh" }} width="100vw" color="black" justifyContent="center" >
            <Flex  width="100%" maxW="1200px"gap={{ base: "30px", md: "20px",lg: "70px", xl: "100px" }} justifyContent={{ md: 'space-between' }} px={{ base: '20px', sm: '30px', md: '50px' }} flexDirection={{ base: 'column-reverse', md: 'row' }}>
                <Box   borderRadius={'1rem'} overflow={'hidden'} flex={{base:'auto',md:'2'}} width={{ base: '80%', md: '40%', lg: '30%' }}  height="auto" flexShrink="0">
                    <Image src={'/images/ai-first.png'}/>
                </Box>
                <Box flex={{base:'auto',md:'4'}} width={{ base: '100%', md: 'auto' }}>
            
                <Text  mt='10px' overflowWrap="break-word" whiteSpace="pre-wrap" color={'brand.clear_black'} fontSize={{base: '1.5em',sm:'2em', md: '2em', lg: '2.5em' }}  fontWeight={'medium'}  >
                  {AIAIFirst4Title}
                </Text>
                <Text mt='10px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
                    {AIAIFirst4Text}
                </Text>
                </Box>
            </Flex>
        </Flex>

        </Box> 
 
    
  {/*PROBLEMAS*/} 
  <Box  bg='gray.50' py={{ base: "5vh", md: "5vh", lg: "7vh", xl: "10vh" }}> 
      <Box width={'100%'}  mt='10vh' position='absolute' zIndex={1} height={'30vh'} bg='linear-gradient(to right, rgba(0, 123, 255,0.8), rgba(33, 180, 253,0.7))' clipPath= 'polygon(0 0, 100% 30%, 100% 100%, 0 70%)'/>
  
          <Flex  width="100vw" justifyContent="center" zIndex="98" >
            <Flex width="100%" maxW="1200px" gap='50px' justifyContent={{ md: 'space-between' }} px={{ base: '20px', sm: '30px', md: '50px' }} flexDirection={{ base: 'column', md: 'row' }}>
                <Grid  templateColumns={{ base: "repeat(1, 1fr)",lg: "repeat(2, 1fr)" }} gap={'50px'} width="100%">
                    {CanalesList.map((element, index) => (
                    <Flex zIndex={10} p='40px' key={index}  bg='gray.50' borderRadius={'1.5rem'} boxShadow={'0 0 10px 1px rgba(0, 0, 0, 0.15)'} >
                        <Box> 
                          <Flex gap='20px' alignItems={'center'}> 
                            <Box> 
                              <Box borderRadius={'10rem'} width={'55px'} height={'55px'} p='15px' bg='brand.blue'> 
                                <Icon color='gray.200' as={element.icon} height='25px' width={'25px'} />
                              </Box>
                              <Box borderRadius={'10rem'} width={'55px'} height={'5px'} mt='10px' bg='brand.blue'/> 
                             </Box>
                            <Text  color={'brand.clear_black'} fontSize={{base: '1.3em',sm:'1.5em', md: '2em', lg: '2.2em' }}  fontWeight={'medium'} >{element.canal}</Text>
                          </Flex>
                          {element.text.map((text, index)=>(
                            <Flex key={`IA-${index}`} alignItems={'center'} gap='20px' mt='30px'> 
                              <Icon color='rgba(0, 123, 255,0.8)' as={FaCheck}/>
                              <Text color={'brand.gray'} fontSize='1.1em' fontWeight={'medium'}  >{text}</Text>
                            </Flex>
                          ))}
                          </Box>
                    </Flex>
                    ))}
                </Grid>
            </Flex>
          </Flex>
 
      </Box>
      {/*CONTACTO*/} 
      <Contact/>
      <Footer/>
      </Box>
    
      </>)
}

export default Main
