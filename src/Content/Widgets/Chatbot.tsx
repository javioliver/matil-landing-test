import React, { useState, useEffect, useRef } from 'react'

import { Box, Flex, Image, Text, IconButton, Icon } from '@chakra-ui/react'
import { LuPaperclip } from "react-icons/lu";
import { FaFile, FaFolder } from "react-icons/fa"



interface Message {
    text: string
    botMessage: boolean
  }

  
function obtenerSaludo() {
    const fechaActual = new Date();
    const hora = fechaActual.getHours();

    if (hora >= 6 && hora < 12) {
        return "Buenos días"
    } else if (hora >= 12 && hora < 21) {
        return "Buenas tardes"
    } else {
        return "Buenas noches"
    }
}

interface ChatbotProps{
    currentChat:[number, Message][]
}
const Chatbot = ({ currentChat }:ChatbotProps) =>{

    //¿DÓNDE ESTÁ MI PEDIDO?
    const newMessages1: [number, Message][] = [
        [1000, { text: 'Hola, pedí unas botas hace una semana y me gustaría saber dónde están.', botMessage: false }],
        [100, { text: '¡Claro! Estaré encantado de ayudarte. Por favor, proporciona el número de tu pedido. 📝', botMessage: true }],
        [3500, { text: 'Mi número de pedido es 12345678', botMessage: false }],
        [100, { text: 'Gracias, estoy revisando los detalles de tu pedido. Un momento, por favor. 🔍', botMessage: true }],
        [4500, { text: 'He encontrado tu pedido. Las botas fueron enviadas ayer y están en camino. Puedes esperar la entrega en los próximos dos días. ¿Hay algo más en lo que pueda ayudarte hoy? 📦✨', botMessage: true }]
    ]
    //PÉRDIDAD DE CUENTA
    const newMessages2: [number, Message][] = [
        [1000, { text: 'Hola, no puedo acceder a mi cuenta y no se que ocurre', botMessage: false }],
        [100, { text: 'Por supuesto, necesito tu correo electrónico asociado a la cuenta para asistirte mejor. 📧', botMessage: true }],
        [2500, { text: 'Mi correo es ejemplo@gmail.com', botMessage: false }],
        [100, { text: 'Gracias, estoy verificando la información. Un momento, por favor. 🔍', botMessage: true }],
        [4500, { text: 'Deberías recibir un correo para establecer una nueva contraseña en breve, confirma si lo ha recibido 📬', botMessage: true }],
        [1500, { text: '¡Recibido, gracias por la ayuda!', botMessage: false }],
        [100, { text: '¡De nada! Si necesitas más ayuda, aquí estaré. ¡Que tengas un buen día! 🌟', botMessage: true }]
    ]
    
    //PROBLEMA CON PRODUCTO
    const newMessages3: [number, Message][] = [
        [1000, { text: 'Hola, estoy teniendo problemas para configurar mi nuevo termostato inteligente.', botMessage: false }],
        [100, { text: 'Entiendo, ¿puedes decirme qué problema específico estás experimentando? 🤔', botMessage: true }],
        [3500, { text: 'No logro conectarlo a mi red Wi-Fi doméstica.', botMessage: false }],
        [100, { text: 'Asegurémonos de que el termostato esté en modo de configuración. ¿Ves alguna luz parpadeante o un ícono específico en la pantalla? 💡', botMessage: true }],
        [2500, { text: 'Sí, hay una luz que parpadea azul.', botMessage: false }],
        [100, { text: 'Perfecto, eso indica que está en modo de configuración. Ahora, revisa si estás seleccionando la red Wi-Fi correcta y si la contraseña ingresada es la correcta. 🔑', botMessage: true }],
        [3000, { text: 'Voy a verificar.', botMessage: false }],
        [100, { text: 'Perfecto, espero tu respuesta. 🕒', botMessage: true }],
        [4000, { text: '¡Funcionó! Estaba ingresando una contraseña antigua. Gracias.', botMessage: false }],
        [100, { text: '¡Genial! Me alegra saber que se ha resuelto. ¿Hay algo más en lo que pueda asistirte hoy? 😊', botMessage: true }]
    ]
    
    //VENTA PROACTIVA
    const salesMessages1: [number, Message][] = [
        [1000, { text: '¡Hola! 🌟 Vi que recientemente compraste un nuevo teléfono con nosotros. Pensé que podrías estar interesado en algunos accesorios exclusivos que tenemos para tu modelo. ¿Te gustaría ver algunas opciones? 📱✨', botMessage: true }],
        [2000, { text: 'Hola, sí, me interesaría ver qué tenéis.', botMessage: false }],
        [100, { text: 'Genial, tenemos fundas de alta protección, cargadores inalámbricos y auriculares Bluetooth que serían perfectos para tu nuevo teléfono. ¿Puedo enviarte fotos y detalles? 🎧🔋', botMessage: true }],
        [1500, { text: 'Sí, por favor. Me interesan los auriculares Bluetooth.', botMessage: false }],
        [100, { text: 'Aquí tienes un par de auriculares Bluetooth de última generación, con cancelación de ruido y hasta 12 horas de reproducción continua. Normalmente cuestan 99€, pero tenemos una promoción especial para clientes como tú y te los podemos ofrecer a 79€. ¿Qué opinas? 🎶', botMessage: true }],
        [1000, { text: '/images/auriculares.png',  botMessage: true }],
        [3000, { text: 'Suena bien, añádelos a mi carrito.', botMessage: false }],
        [100, { text: '¡Hecho! Los auriculares están ahora en tu carrito. ¿Hay algo más en lo que pueda interesarte hoy? 🛒', botMessage: true }]
    ]

    //GUÍA DE COMPRA 
    const salesMessages2: [number, Message][] = [
        [1000, { text: 'Hola, ¿qué promociones tenéis actualmente?', botMessage: false }],
        [100, { text: '¡Hola! Actualmente tenemos varias promociones. Por la compra de cualquier smartphone, recibes un 15% de descuento en accesorios. También tenemos 10% de descuento en todos nuestros televisores esta semana. 📱📺', botMessage: true }],
        [3000, { text: 'Estoy interesado en los televisores. ¿Pueden enviarme más información?', botMessage: false }],
        [100, { text: 'Por supuesto, tenemos modelos desde 43 hasta 75 pulgadas con tecnología 4K y opciones inteligentes. Te enviaré el catálogo para que puedas ver todas las opciones y precios. ¿Te interesa alguna marca en particular? 🌟', botMessage: true }],
        [2000, { text: 'Me gusta la marca UltraView.', botMessage: false }],
        [100, { text: 'Excelente elección, UltraView ofrece alta calidad y rendimiento. Tengo un modelo de 55 pulgadas con HDR y tecnología Smart TV que podría interesarte. Está con un 10% de descuento, dejándolo en $450. ¿Quieres añadirlo a tu carrito? 🛒', botMessage: true }],
        [1500, { text: 'Sí, añádelo por favor.', botMessage: false }],
        [100, { text: 'Perfecto, lo he añadido a tu carrito. ¿Deseas proceder al pago o necesitas algo más? 💳', botMessage: true }]
    ]
    
    //CARRITO ABANDONADO
    const salesMessages3: [number, Message][] = [
        [1000, { text: '¡Hola! 🛒 Notamos que dejaste algunos artículos en tu carrito durante tu última visita a nuestra tienda. Queríamos recordarte que están esperando por ti. ¿Te gustaría revisarlos o necesitas ayuda para completar tu compra?', botMessage: true }],
        [2000, { text: 'Oh, sí, gracias por recordármelo. ¿Aún están disponibles esos artículos?', botMessage: false }],
        [100, { text: 'Sí, todos los artículos en tu carrito siguen disponibles. Además, uno de ellos tiene un descuento especial si completas tu compra hoy. ¿Quieres aprovechar esta oferta? 💰', botMessage: true }],
        [1500, { text: 'Sí, por favor, me gustaría ver ese descuento.', botMessage: false }],
        [100, { text: 'Genial. Te he enviado el enlace para que puedas ver tu carrito y el descuento aplicado. Si necesitas algo más o tienes preguntas, no dudes en preguntar. ¡Estoy aquí para ayudarte! ✨', botMessage: true }]
    ]
  
    //ENVÍO AUTOMÁTICO A CLIENTES
    const internalCommExample1: [number, Message][] = [
        [1000, { text: 'Hola Matilda, te voy a compartir un excel con las referencias y los mails de cada cliente. Envía una carpeta con las imágenes de cada una de sus referencias a cada cliente.', botMessage: false }],
        [150, { text: 'Hola! Claro, por favor sube el archivo Excel para que pueda extraer las referencias y las direcciones de correo electrónico de los clientes. 📂', botMessage: true }],
        [1500, { text: 'FILE-Clientes.xlsx', botMessage: false }],
        [200, { text: 'Archivo recibido. Preparando el envío de carpetas con imágenes correspondientes a las referencias de cada cliente. Esto puede tardar unos minutos. ⏳', botMessage: true }],
        [3000, { text: 'Todas las carpetas han sido enviadas exitosamente a los correos proporcionados. ¿Quieres que te envíe confirmaciones de entrega o algún reporte adicional? 📊', botMessage: true }]
    ]

    const internalCommExample2: [number, Message][] = [
        [1000, { text: 'Por favor, revisa los currículums recibidos para el puesto de Analista de Datos y envía los válidos al equipo de RRHH. 📑', botMessage: false }],
        [150, { text: 'Claro, ¿puedes enviarme la carpeta donde están almacenados los currículums? 📁', botMessage: true }],
        [2000, { text: 'FOLDER-Curriculums', botMessage: false}],
        [250, { text: 'Recibido, gracias. Estoy filtrando los currículums para encontrar candidatos con al menos 2 años de experiencia en análisis de datos y conocimientos avanzados en SQL. 🔍', botMessage: true }],
        [3000, { text: 'He filtrado los currículums y encontrado 30 candidatos que cumplen los criterios. He enviado la lista y los currículums al equipo de RRHH. ✅', botMessage: true }]
    ]
    
    const internalCommExample3: [number, Message][] = [
        [1000, { text: 'Necesitamos verificar el estado de nuestro último pedido de componentes electrónicos. ¿Puedes contactar al proveedor y confirmar la fecha de entrega? ', botMessage: false }],
        [200, { text: 'Por supuesto, estoy enviando un correo al proveedor ahora mismo para solicitar una actualización. 📧', botMessage: true }],
        [3000, { text: 'He recibido una respuesta del proveedor. Los componentes están en camino y la fecha estimada de entrega es este viernes. 🚚', botMessage: true }],
        [1500, { text: 'Excelente, muchas gracias.', botMessage: false }],
    ]
    
    
    const [messages, setMessages] = useState<any>([])
    const indexRef = useRef(0)
    const timeoutsRef = useRef<any>([])
    const [currentSeries, setCurrentSeries] = useState<any>([])
 
    const clearAllTimeouts = () => {
        timeoutsRef.current.forEach(clearTimeout)
        timeoutsRef.current = []
    }

    useEffect(() => {
        const addMessage = () => {
            if (indexRef.current >= currentSeries.length) return
            const currentMessage = currentSeries[indexRef.current];
            setMessages((prev:any) => [...prev, currentMessage[1]]);
            if (!currentMessage[1].botMessage) {
                const timeout1 = setTimeout(() => {
                    setMessages((prev:any) => [...prev, { text: 'Cargando...', botMessage: true }])
                    const timeout2 = setTimeout(() => {
                        setMessages((prev:any) => prev.filter((_:any, idx:number) => idx !== prev.length - 1))
                        continueToNextMessage();
                    }, 2000);
                    timeoutsRef.current.push(timeout2)
                }, 500)
                timeoutsRef.current.push(timeout1)
            } else {
                continueToNextMessage();
            }
        };

        const continueToNextMessage = () => {
            indexRef.current += 1;
            if (indexRef.current < currentSeries.length) {
                const timeout = setTimeout(addMessage, currentSeries[indexRef.current][0]);
                timeoutsRef.current.push(timeout);
            }
        };

        if (currentSeries.length > 0) {
            const timeout = setTimeout(addMessage, currentSeries[0][0]);
            timeoutsRef.current.push(timeout);
        }

        return clearAllTimeouts;
    }, [currentSeries]);

    useEffect(() => {
        const changeConversation = () => {
            clearAllTimeouts()
            indexRef.current = 0
            setMessages([{ text: `${obtenerSaludo()}, mi nombre es Matilda`, botMessage: true }, { text: '¿En qué puedo ayudarle?', botMessage: true }]);         
            setCurrentSeries(currentChat)
        }
        changeConversation()
    }, [currentChat])


    const scrollRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (scrollRef.current) {
            const scrollableElement = scrollRef.current;
            const maxScrollTop = scrollableElement.scrollHeight - scrollableElement.clientHeight;
            if (scrollableElement.scrollTop > maxScrollTop - 300) scrollableElement.scrollTop = scrollableElement.scrollHeight
        }
    }, [messages])
   

     
  return(<> 
        <Flex flexDir={'column'}  height={'100%'}> 
            <div style={{height:'50px', background:`linear-gradient(to right, #a7daee,#255cd1)`, display:'flex', alignItems:'center', padding:'0 4%', justifyContent:'space-between', zIndex:10}} > 
            
                <div style={{display:'flex', gap:'3%', flex:'1', alignItems:'center'}}>
                    <div style={{display:'flex', alignItems:'center', flexDirection:'row', gap:'15px', marginTop:'10px'}} >    
                        <img src='/images/Isotipo.svg' height="25px" width="25px" />
                        <span style={{color:'white', fontWeight:500,  whiteSpace: 'nowrap',textOverflow: 'ellipsis', fontSize:'1.4em' }} >MATIL</span>
                    </div>
                </div>
                    
            </div>


            <div style={{width:'100%', height:'40px', overflow:'hidden', lineHeight:0, transform:'rotate(180deg)', marginTop:'-2vh'}}>
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
                    <defs>
                        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: '#255cd1', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#a7daee', stopOpacity: 1 }} />
                        </linearGradient>
                    </defs>
                    <path d="M0,50 C150,125 350,25 500,50 L500,150 L0,150 Z" fill="url(#waveGradient)"></path>
                </svg>
            </div>
            <Box ref={scrollRef} py='30px' px='10px' flex='1' overflow={'scroll'}> 
                {messages.map((message:any, index:number)=>{

                    const isNextMessageBot = messages[index + 1] ? messages[index + 1].botMessage : false
                    const isLastMessageBot = messages[index - 1] ? messages[index - 1].botMessage : false
                    const isLastMessage = index == messages.length - 1 
                    
                    return(<>
                    <Flex fontWeight={300} fontSize={'.9em'}  gap='10px' key={index} width={'100%'}  mt = {index == 0 ? '0px' : (message.botMessage == messages[index - 1].botMessage? '3px':'15px')} alignItems={'end'} flexDir={message.botMessage ? 'row':'row-reverse'} animation = {message.botMessage ? 'expandFromLeft 0.5s ease-out' : 'expandFromRight 0.5s ease-out'}>
                        {(message.botMessage && !isNextMessageBot)&& 
                        
                        <Image src='/images/Isotipo.svg' width='20px'/>}
                        <Box  maxW='80%' ml={(message.botMessage && !isNextMessageBot)?'0':'30px'} bg={message.botMessage?'gray.100':'linear-gradient(to right, #5B88F1, #76C8DF)'} color={message.botMessage?'black':'white'} p = '8px' borderRadius = {message.botMessage ? (isNextMessageBot && isLastMessageBot)? '.2rem .7rem .7rem .2rem' : isNextMessageBot?'.7rem .7rem .7rem .2rem': isLastMessageBot ? '.2rem .7rem .7rem .7rem':'.7rem' : (!isNextMessageBot && !isLastMessageBot && !isLastMessage)? '.7rem .2rem .2rem .7rem' : (isNextMessageBot || isLastMessage)?'.7rem .2rem .7rem .7rem':'.7rem .7rem .2rem .7rem'}>
                            {message.text === 'Cargando...' ?
                            <div className="writing-animation">
                                <span className="bounce-dot"></span>
                                <span className="bounce-dot"></span>
                                <span className="bounce-dot"></span>
                            </div>:
                            <> 
                            {message.text[0] === '/' ?
                             <Image src={message.text} height={'200px'}/>:
                             <>{message.text.split('-')[0] === 'FILE'||  message.text.split('-')[0] === 'FOLDER' ? 
                             <Box>
                                <Flex gap='7px' alignItems={'center'}>
                                    <Icon as={ message.text.split('-')[0] === 'FOLDER'?FaFolder:FaFile}/>
                                    <Text>{message.text.split('-')[1]}</Text>
                                </Flex>
                                <Text fontWeight={300}  color='gray.300'>2 KB</Text>
                             </Box>:
                             <Text fontWeight={300} >{message.text}</Text>}</>}</>}
                        </Box>
                    </Flex>
                    </>)
                })}
            </Box>

        </Flex>
 
    </>)
   
}

export default Chatbot