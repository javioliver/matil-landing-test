//NEXT
import { GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
//REACT
import { useState, useEffect, useRef, useCallback } from 'react'
//TRANSALATION
import { useTranslations } from 'next-intl'
//FRONT
import { Flex, Box, Text, Image, Heading } from '@chakra-ui/react'
import ScrollAnimation from "react-animate-on-scroll"
import "animate.css/animate.compat.css"
//COMPONENTS
import Footer from '../Content/Components/footer'
import FAQS from '../Content/Components/faqs'
import AnimatedText from '@/Content/Widgets/AnimatedText'

export async function getStaticProps({locale}:GetStaticPropsContext) {return {props: {messages: require(`../lang/${locale}.json`)}}}


const CustomMessages = ({index}:{index:number}) => {
    const messagesList = [
        [
            {sender:0, content:'Hola, hice un pedido hace una semana pero no he recibido nunguna notificación, me gustaría saber como va.'}, 
            {sender:1, content:'Claro, ¿Podrías porporcionarme tu número de pedido?'},
            {sender:0, content:'Sí, el número es el 502023242'}, 
            {sender:1, content:'Tu pedido nº 500088650 ya ha sido entregado en la tienda. Tienes un plazo de una semana para recogerlo. Si necesitas más ayudo, aquí estoy.'} 
        ],
        [
            {sender:0, content:'Hola, me equivoqué poniendo el mail y no puedo confirmar mi pedido, me gustaría cambiarlo'}, 
            {sender:1, content:'Sin problema, necesitaría el número de teléfono asociado al pedido para verificar tu identidad y el nuevo correo.'},
            {sender:0, content:'Vale, el número es 656 30 63 61 y quiero recibir el nuevo correo en javioliverperez@gmail.com'}, 
            {sender:1, content:'Está todo correctoJavier, ya deberías haber recibido el nuevo correo'} 
        ],
        [
            {sender:0, content:'¿El “SmartTV UHD 55" es compatible con Alexa?'}, 
            {sender:1, content:'Hola, sí que lo es y también con Google Assistant. ¿Puedo ayudarte con algo más?'},
            {sender:0, content:'¿Incluye soporte de pared?'}, 
            {sender:1, content:'No, pero con la compra del televisor tienes un 25% de descuento en cualquiero soporte.'} 
        ],
        [
            {sender:0, content:'Vivo en Gilet, Valencia, ¿Dónde puedo ir a comprar?'}, 
            {sender:1, content:'¡Claro!, La tienda más cercana se encuentra en Sagunto:\n\n- Centro Comercial Nuevo Epicentre L.129 (Sagunto)\n- Código Postal: 46000\n- Horario: lunes-jueves 10.00h-21.00h, viernes-sábados 10.00h-21.30h\n46500'},
            {sender:0, content:'Vale, muchas gracias'}, 
        ],
        [
            {sender:0, content:'Quería saber si hay alguna tienda con stock de la referencia 4739875 en Valencia'}, 
            {sender:1, content:'Para poder ayudarte mejor, ¿me podrías decir qué talla deseas consultar'},
            {sender:0, content:'La talla 42'}, 
            {sender:1, content:'He encontrado stock de la referencia 4739875 en la talla 42 en la tienda situada en C/ Colón, 17. CP: 46004, Valencia. Hay 3 unidades disponibles. Si necesitas más información, ¡dímelo!'} 
        ],
        [
            {sender:0, content:'¿El “SmartTV UHD 55" es compatible con Alexa?'}, 
            {sender:1, content:'Hola, sí que lo es y también con Google Assistant. ¿Puedo ayudarte con algo más?'},
            {sender:0, content:'¿Incluye soporte de pared?'}, 
            {sender:1, content:'No, pero con la compra del televisor tienes un 25% de descuento en cualquiero soporte.'} 
        ],
        [
            {sender:0, content:'Hola, me gustaría hacer una reserva para el próximo viernes día 15'}, 
            {sender:1, content:'Por supuesto, ¿A qué hora quieres hacer la reserva?'},
            {sender:0, content:'A las 21:30, somos 7 personas'}, 
            {sender:1, content:'Perfecto, tu reserva ha sido confirmado, te esperamos el viernes a las 21:30.'} 
        ],
        [
            {sender:0, content:'Hola, me gustarían enviar mi currículum'}, 
            {sender:1, content:'Buenas tardes, ¿En qué departamento te gustaría trabajar?'},
            {sender:0, content:'Ventas'},
            {sender:1, content:'¡Genial! Para poder contactarte en el futuro, ¿Me podrías dar tu dirección de correo electrónico, por favor?'}, 
        ],
        [
            {sender:0, content:'¿Qué documentación tengo que aportar para solicitar un crédito?'}, 
            {sender:1, content:'Debe indicar el CIF, el beneficio neto y cantidad de deuda de la empresa, el importe que desea solicitar y el plazo de devolución.'},
            {sender:0, content:'Ok, aquí los tienes: B12341234, 109.234€ de beneficio, 49.034€ de deuda, y deseo solicitar 70.000€ a devolver en 3 años.'}, 
            {sender:1, content:'Muy bien, ha superado el estudio automático inicial, por favor, proporcione un número de teléfono para ponernos en contacto con usted.'} 
        ],
       
    ]

    return (
        <Box zIndex={100} width={{ base: '100%',sm:'100%', md: '70%', lg:'40%' }} left={{ base: '0',sm:'0', md: '15%', lg:'30%' }}  bottom={'10px'} >
            {messagesList[index].map((message, index) => {
                  const lines = message.content.split('\n');

                return (
                <Flex w='100%' flexDir={message.sender?'row':'row-reverse'} key={`message-${index}`} >
                    <Box shadow={'lg'} px='10px' py='8px' mt='8px' maxW={'80%'} borderRadius={message.sender?'.2rem .7rem .7rem .7rem':'.7rem .2rem .7rem .7rem'} bg={message.sender?'brand.text_blue':'brand.gray_1'} > 
                         {lines.map((line, index2) => (
                            <Text   key={`line-${index}-${index2}`}color={message.sender?'white':'brand.clear_black'}   fontSize={'3xs'}>
                            {line}
                            {index < lines.length - 1 && <br />}
                            </Text>
                        ))}
            
                    </Box>
                </Flex>)
            })}
        </Box>
    )
}   

const UseBox = ({title, description, imageUrl, index}:{title:string, description:string, imageUrl:string, index:number}) => {
    return (<>
        <Flex color='white' gap='10px' flexDir={{ base: 'column',sm:'column', md: 'row', lg:'row' }} textAlign={{ base: 'center',sm:'center', md: 'start', lg:'start' }}>
            <Text flex='1' color='white' fontSize={'md'} fontWeight={400}>{title}</Text>
            <Text flex='1' color='brand.gray_1' fontSize={'2xs'}fontWeight={300} >{description}</Text>
        </Flex>
        <Flex justifyContent={'center'} position={'relative'} mt={'50px'}> 
            <Box position={'absolute'} bottom={'0'} width={'100%'}>
                <Box zIndex={99} bg={Math.trunc(index/3) === 1?'brand.text_blue':'brand.black_button'} opacity={Math.trunc(index/3) === 1?0.2:0.4} height={'100%'} width={'100%'} position='absolute' />
                <Image zIndex={98} src={imageUrl} width={'100%'}  mt='20px'/>
            </Box>
            <CustomMessages index={index}/>
        </Flex>
    </>)
}

const ScrollableBoxes = ({businessTypeIndex, isComputerWidth}:{businessTypeIndex:number, isComputerWidth:boolean}) => {

   
    //TRANSLATION
    const t = useTranslations('Solutions')

    //BUSINESS TYPES MAP
    const businessTypes = [ 'Online', 'Physical', 'Services']
    const imagesUrls = ['/images/ecommerce.png', '/images/store.png', '/images/service.png']
    const svgStyles = [
        {strokeWidth:'65',width:'100vw',viewBox:'0 0 1358 754', position:'right', color:'grad2', path:'m0.21,195.98l785.74-113.71s-318.14,468.95-217.16,470.99,356.52-201.54,421.77-148.69c65.25,52.86-26.19,291.81-29.52,304.62,0,0,210.18-104.18,754.9-151.56'},
        {strokeWidth:'35', width:'100vw', viewBox:'0 0 575 176', position:'left', color:'grad1', path:'M-52 0.634C0.4231 160.089 250.206 .93675 318.039 37.6594C349.457 58.315 333.251 105.715 322.993 132.976C450.088 65.591 498.847 107.182 575 107.572'},
        {strokeWidth:'65', width:'100vw', viewBox:'0 0 1140 427', position:'right', color:'grad2', path:'M0.3,241l120-127.2l78.1,250.8c0,0,637.6-369.8,688.2-319.2c50.6,50.6-151,335.1-151,335.1L1140,224.9'},
    ]

      //GET SCREEN WIDTH
      const [windowWidth, setWindowWidth] = useState(0); // Estado para almacenar el ancho de la ventana
      useEffect(() => {
          const handleResize = () => {setWindowWidth(window.innerWidth)}
          if (typeof window !== 'undefined') {
              setWindowWidth(window.innerWidth)
              window.addEventListener('resize', handleResize)
          }
          return () => {if (typeof window !== 'undefined') window.removeEventListener('resize', handleResize)}
          }, [])
  
      //SHOW SVGS LOGIC
      const containerRef = useRef<HTMLDivElement>(null)
      const svgRef = useRef(null)
      useEffect(() => {
          const path = svgRef.current ? (svgRef.current as any).querySelector('.path') : null;
  
          const activateAnimation = (entries:any, observer:any) => {
          entries.forEach((entry:any) => {
              if (entry.isIntersecting) {
              path.style.strokeDashoffset = '0'
              observer.unobserve(entry.target)
              }
           
          })
          }
          const observer = new IntersectionObserver(activateAnimation, { threshold: 0.9 })
          if (svgRef.current) observer.observe(svgRef.current)
          return () => {if (svgRef.current) observer.unobserve(svgRef.current)
  }
      }, [])
  
    const boxRef1 = useRef<HTMLDivElement>(null)
    const boxRef2 = useRef<HTMLDivElement>(null)
    const boxRef3 = useRef<HTMLDivElement>(null)
    const boxRef4 = useRef<HTMLDivElement>(null)

    const refsArrays = [boxRef1, boxRef2, boxRef3, boxRef4]

    useEffect(() => {
        let ticking = false;
    
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const windowHeight = window.innerHeight
                    let cumulativeTranslation = 0;
                    const gapHeight = 26
                    
                    refsArrays.forEach((ref, index) => {
                        if (ref.current) {
                            const itemRect = ref.current.getBoundingClientRect();
                            const distanceFromTop = itemRect.top
                            const maxShrinkDistance = windowHeight * 0.25
                            const scaleFactor = Math.max((0.85 + index * 0.03), Math.min(1, (distanceFromTop / maxShrinkDistance) * 1.3))
                            const translateY = cumulativeTranslation
                            if (index > 0) cumulativeTranslation += gapHeight * scaleFactor
                                ref.current.style.transform = `translateY(${translateY}px) scale(${scaleFactor})`
                        }
                    })
    
                    ticking = false
                })
                ticking = true
            }
        }
    
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [refsArrays])
      
    return (<>
     
    <Flex  ref={containerRef} flexDir={'column'} alignItems={'center'} position={'relative'} > 

        {isComputerWidth && 
        <Box position='absolute' top={'65vh'}  right={svgStyles[businessTypeIndex].position === 'right'?`-${windowWidth - (containerRef.current?.getBoundingClientRect().right || 0)}px`:''}  left={svgStyles[businessTypeIndex].position === 'left'?`-${containerRef.current?.getBoundingClientRect().left}px`:''}  zIndex={-1} width={svgStyles[businessTypeIndex].width} transition={'opacity 0.5s ease-in-out'}>
            <svg  xmlns="http://www.w3.org/2000/svg"  viewBox={svgStyles[businessTypeIndex].viewBox} ref={svgRef} >
                    <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(0, 102, 204, 1)" />
                        <stop offset="100%" stopColor="rgb(0, 20, 51)" />
                        </linearGradient>
                    </defs>
                    <defs>
                    <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgb(5, 142, 255)" />
                        <stop offset="100%" stopColor="rgb(5, 102, 255)" />
                    </linearGradient>
                </defs>
                    <path
                        className="path"
                        fill="transparent"
                        stroke={`url(#${svgStyles[businessTypeIndex].color})`}
                        strokeWidth={svgStyles[businessTypeIndex].strokeWidth}
                        strokeLinejoin="bevel" 
                        d={svgStyles[businessTypeIndex].path}
                        strokeDasharray="3000" 
                        strokeDashoffset="3000" 
                        style={{ transition: 'stroke-dashoffset 1.5s ease-out' }}
                    />
            </svg>
        </Box>}

        <Flex transition='transform 0.2s ease-out' ref={boxRef1}  flexDir={'column'} maxW={'800px'} textAlign={'center'}  mt={'75px'} justifyContent={'center'} position='sticky' top={'10vh'} zIndex={10}  >
            <Box> 
                <Flex display={'inline-block'} justifyContent={'center'} alignItems={'center'} bg={'brand.text_blue'} color={'white'} px='15px' py='5px' borderRadius={'2rem'}>
                    <Text fontSize={'md'} fontWeight={500}> {t(businessTypes[businessTypeIndex])}</Text>
                </Flex>
            </Box>
            <Text fontSize={'2xl'}  fontWeight="500" overflowWrap="break-word" whiteSpace="pre-wrap" color={'brand.clear_black'} >
                {t(`${businessTypes[businessTypeIndex]}Title`)}
            </Text>
            <Text mt='10px' maxW={'800px'} fontWeight={300} fontSize={'sm'}color="brand.text_gray"   overflowWrap="break-word" whiteSpace="pre-wrap">{t(`${businessTypes[businessTypeIndex]}Des`)}</Text>
        </Flex>
            {Array.from(Array(3).keys()).map((index) => (
            <Flex  flexDir={'column'} justifyContent={'space-between'} transition='transform 0.2s ease-out'  ref={refsArrays[index + 1]} mt='5vh'   className="js-stack-cards__item" p='30px 30px 0 30px' width={'100%'}  maxW={'800px'} zIndex={100 + index} top={'10vh'} bg={businessTypeIndex === 1?'brand.text_blue':'brand.black_button'}  shadow={'lg'} position={'sticky'} key={`${businessTypeIndex}-case-${index}`}  borderRadius={'1rem'}  >
                <UseBox title={t(`UseCase_${index + businessTypeIndex * 3}`)} index={index + businessTypeIndex * 3} description={t(`UseCaseDes_${index + businessTypeIndex * 3}`)} imageUrl={imagesUrls[businessTypeIndex]}/>
            </Flex>
        ))}
    
    </Flex></>)
}

const Solutions = () =>{

    //TRANSLATED TEXT
    const t = useTranslations('Solutions')
    const router = useRouter()
  
    //FAQS LIST
    const faqsList = [[t('FAQ_1'), t('FAQ_ANSWER_1')], [t('FAQ_2'), t('FAQ_ANSWER_2')], [t('FAQ_3'), t('FAQ_ANSWER_3')], [t('FAQ_4'), t('FAQ_ANSWER_4')], [t('FAQ_5'), t('FAQ_ANSWER_5')], [t('FAQ_7'), t('FAQ_ANSWER_7')]]

    //DECIDE IF THE USER IS USING A COMPUTER, FOR ADJUSTING THE HEADER
    const [isComputerWidth, setIsComputerWidth] = useState(true)
    useEffect(() => {
        if (typeof window !== 'undefined') {
        const handleResize = () => {setIsComputerWidth(window.innerWidth > 900)}
        handleResize();
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
        }
    }, [])

    return(<> 

        <NextSeo
            title="Casos de Uso - Potencia tu Negocio con IA"
            description="Explora cómo nuestras soluciones de inteligencia artificial se aplican en diversos sectores para resolver problemas reales y mejorar la eficiencia."
        />

        {isComputerWidth && <Box position='absolute' top={'10vh'}  left={0} zIndex={1} width={'70vw'}> 
            <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1358 754">
                <path 
                    className="path" 
                    fill="transparent" 
                    stroke="rgb(5, 102, 255)" 
                    strokeWidth="65" 
                    strokeLinejoin="bevel" 
                    d="m-500.21,195.98l785.74-113.71s-318.14,468.95-217.16,470.99,356.52-201.54,421.77-148.69c65.25,52.86-26.19,291.81-29.52,304.62,0,0,210.18-104.18,244.9-151.56"
                    strokeDasharray="3000" 
                    strokeDashoffset="3000">
                    <animate 
                    attributeName="stroke-dashoffset" 
                    from="3000" 
                    to="0" 
                    dur="1.5s" 
                    begin={`${(t('Title').split(' ').length * 70 + 700) / 1000}s`}
                    repeatCount="1" 
                    fill="freeze" />
                </path>
                </svg>
        </Box>}

        {/*ALL SECTION*/}
        <Flex px='4vw' zIndex={1}  flexDir='column' width={'100vw'} alignItems={'center'}  bg='white' py={{ base: '100px',sm:'100px', md: '150px' }}>
            <Flex flexDir='column' width={'100vw'} alignItems={'center'}  > 
                <Box   width="100%" position={'relative'} px='4vw' color='black' textAlign={'center'}  maxW="1200px" >
                    <Flex zIndex={2}  alignItems={'center'}  flexDir={'column'} > 
                        <ScrollAnimation animateIn="fadeIn" animateOnce >
                            <Text  zIndex={2}  color='brand.text_blue' fontWeight={'500'} fontSize={'lg'} >{t('PreTitle')}</Text> 
                        </ScrollAnimation>

                        <Heading fontSize={'5xl'} fontWeight="600" overflowWrap="break-word" whiteSpace="pre-wrap" >
                            <AnimatedText text={t('Hero')}/> 
                        </Heading>
                        
                        <ScrollAnimation animateIn="fadeInUp" animateOnce delay={t('Title').split(' ').length * 70 + 300}> 
                            <Text mt='10px' maxW={'800px'} fontWeight={300} fontSize={'sm'} color="brand.text_gray"   overflowWrap="break-word" whiteSpace="pre-wrap">
                                {t('SubTitle')}
                            </Text>
                        </ScrollAnimation>
                    </Flex>
                </Box>
            </Flex>

            <Box textAlign={'center'} mt='75px'  zIndex={10} maxWidth={'1000px'} >
                <ScrollAnimation animateIn="fadeIn" animateOnce delay={t('Title').split(' ').length * 70 + 600}> 
                    <Heading as='h2' fontSize={'2xl'} fontWeight="600" overflowWrap="break-word" whiteSpace="pre-wrap" color={'brand.clear_black'} >
                        {t('UsesCasesDes')}
                    </Heading>
                </ScrollAnimation>
            </Box>
            <Flex flexDir={'column'} alignItems={'center'} zIndex={10} opacity={1} width={'100%'} maxW={'1000px'}> 
                {Array.from(Array(3).keys()).map((index) => (
                    <ScrollAnimation key={`use-case-${index}`} style={{marginTop:index !== 0 ?'100px':''}} animateIn="fadeIn" animateOnce delay={index === 0?t('Title').split(' ').length * 70 + 800:0}>            
                        <ScrollableBoxes businessTypeIndex={index} isComputerWidth={isComputerWidth}/>
                    </ScrollAnimation>
                ))}
            </Flex>
        </Flex>  

        <FAQS faqsList={faqsList}/>
        <Footer/>
    </>)
}

export default Solutions

   
  
