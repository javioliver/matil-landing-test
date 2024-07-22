import React from 'react'

import {Flex, Text, Box } from '@chakra-ui/react'
import Footer from '../Content/Components/footer'

const Uso = () => {

    return (
    <Box position={'absolute'} >
        <Flex bg='gray.100'  py={{ base: "3vh", md: "4vh", lg: "5vh", xl: "7vh" }} justifyContent={'center'} width='100%'  px={{ base: '20px', sm: '30px', md: '5vw',lg: "10vw", xl: "15vw"  }} >
            <Box> 
            <Text mt={{ base: "3vh", md: "4vh", lg: "5vh", xl: "7vh" }} textAlign="center" overflowWrap="break-word" whiteSpace="pre-wrap" fontSize={{ base: '1.5em', sm: '2em', md: '2em', lg: '2.8em' }} fontWeight="medium"  background='linear-gradient(to right, rgba(128, 0, 255, 0.7), rgba(0, 0, 255, 0.6))' backgroundClip={'text'} >
                TÉRMINOS DE CONDICIONES Y USO
            </Text>
            
            </Box>
        </Flex>           


        {/*CONSUMIDORES*/} 
        <Flex py={{ base: "5vh", md: "5vh", lg: "7vh", xl: "10vh" }} width="100vw" color="black" justifyContent="center" >
          <Flex  width="100%" maxW="1200px"  justifyContent={{ md: 'space-between' }} px={{ base: '20px', sm: '30px', md: '50px' }} flexDirection='column'>
           
            <Text mt='50px' background='linear-gradient(to right, rgba(128, 0, 255, 0.7), rgba(0, 0, 255, 0.6))' backgroundClip={'text'} fontWeight={'medium'} fontSize={{base: '1.2em',sm:'1.3em', md: '1.4em', lg: '1.5em' }} >
            I. Aceptación de los Términos
            </Text>

            <Text mt='50px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
            Al utilizar la aplicación de atención al cliente de MATIL SL, usted acepta estos términos y condiciones. Si no está de acuerdo con algún término, absténgase de usar la aplicación.
            </Text>

            <Text mt='50px' background='linear-gradient(to right, rgba(128, 0, 255, 0.7), rgba(0, 0, 255, 0.6))' backgroundClip={'text'} fontWeight={'medium'} fontSize={{base: '1.2em',sm:'1.3em', md: '1.4em', lg: '1.5em' }} >
            II. Descripción del Servicio
            </Text>

            <Text mt='50px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
            MATIL SL ofrece una aplicación de atención al cliente que integra comunicaciones a través de Facebook, Google Business y correo electrónico para proporcionar una experiencia de soporte unificada. Esta aplicación facilita la recopilación y almacenamiento de datos de contacto de los clientes para uso exclusivo de la empresa.
            </Text>

            <Text mt='50px' background='linear-gradient(to right, rgba(128, 0, 255, 0.7), rgba(0, 0, 255, 0.6))' backgroundClip={'text'} fontWeight={'medium'} fontSize={{base: '1.2em',sm:'1.3em', md: '1.4em', lg: '1.5em' }} >
            III. Recopilación y Uso de Datos
            </Text>

            <Text mt='50px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
            La aplicación recopila datos de contacto de los clientes, como nombres, direcciones de correo electrónico y números de teléfono, exclusivamente a través de las interfaces proporcionadas por Facebook, Google Business y correos electrónicos directos. Estos datos se almacenan de manera segura y se utilizan únicamente para facilitar la comunicación entre MATIL SL y sus clientes. No compartimos estos datos con terceros sin el consentimiento explícito del usuario, excepto como se requiera por ley.
            </Text>

            <Text mt='50px' background='linear-gradient(to right, rgba(128, 0, 255, 0.7), rgba(0, 0, 255, 0.6))' backgroundClip={'text'} fontWeight={'medium'} fontSize={{base: '1.2em',sm:'1.3em', md: '1.4em', lg: '1.5em' }} >
            IV. Política de Privacidad      
           </Text>

            <Text mt='50px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
            Consulte nuestra Política de Privacidad para obtener detalles sobre cómo protegemos y manejamos los datos personales. Esta política forma parte integral de estos términos y condiciones.
            </Text>

            <Text mt='50px' background='linear-gradient(to right, rgba(128, 0, 255, 0.7), rgba(0, 0, 255, 0.6))' backgroundClip={'text'} fontWeight={'medium'} fontSize={{base: '1.2em',sm:'1.3em', md: '1.4em', lg: '1.5em' }} >
            V. Condiciones de Acceso   
            </Text>

            <Text mt='50px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
            El acceso a la aplicación está permitido solo a usuarios que hayan proporcionado su consentimiento explícito para la recopilación y el uso de sus datos personales conforme a estos términos y nuestra política de privacidad.
            </Text>

            <Text mt='50px' background='linear-gradient(to right, rgba(128, 0, 255, 0.7), rgba(0, 0, 255, 0.6))' backgroundClip={'text'} fontWeight={'medium'} fontSize={{base: '1.2em',sm:'1.3em', md: '1.4em', lg: '1.5em' }} >
            VI. Uso Prohibido      
            </Text>

            <Text mt='50px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
            El uso de la aplicación debe cumplir con todas las leyes aplicables y los términos de servicio de Facebook y Google. Queda estrictamente prohibido el uso de la aplicación para fines ilegales o no autorizados, incluyendo pero no limitado a la violación de derechos de privacidad o propiedad intelectual.
            </Text>

            <Text mt='50px' background='linear-gradient(to right, rgba(128, 0, 255, 0.7), rgba(0, 0, 255, 0.6))' backgroundClip={'text'} fontWeight={'medium'} fontSize={{base: '1.2em',sm:'1.3em', md: '1.4em', lg: '1.5em' }} >
            VII. Modificaciones del Servicio y de los Términos    
            </Text>

            <Text mt='50px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
            Nos reservamos el derecho de modificar la aplicación y estos términos y condiciones en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en nuestro sitio web. El uso continuado de la aplicación después de tales cambios implicará su aceptación de los nuevos términos.
            </Text>


            <Text mt='50px' background='linear-gradient(to right, rgba(128, 0, 255, 0.7), rgba(0, 0, 255, 0.6))' backgroundClip={'text'} fontWeight={'medium'} fontSize={{base: '1.2em',sm:'1.3em', md: '1.4em', lg: '1.5em' }} >
            VIII. Limitación de Responsabilidad    
            </Text>

            <Text mt='50px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
            MATIL SL no será responsable por pérdidas o daños surgidos del uso incorrecto de los datos de contacto o de la interrupción del servicio de la aplicación.
            </Text>

            <Text mt='50px' background='linear-gradient(to right, rgba(128, 0, 255, 0.7), rgba(0, 0, 255, 0.6))' backgroundClip={'text'} fontWeight={'medium'} fontSize={{base: '1.2em',sm:'1.3em', md: '1.4em', lg: '1.5em' }} >
            IX. Resolución de Disputas   
            </Text>

            <Text mt='50px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
            Cualquier disputa relacionada con estos términos será resuelta bajo la legislación española y los tribunales de España tendrán jurisdicción exclusiva.
            </Text>

            <Text mt='50px' background='linear-gradient(to right, rgba(128, 0, 255, 0.7), rgba(0, 0, 255, 0.6))' backgroundClip={'text'} fontWeight={'medium'} fontSize={{base: '1.2em',sm:'1.3em', md: '1.4em', lg: '1.5em' }} >
            X. Contacto   
            </Text>

            <Text mt='50px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
            Para preguntas o preocupaciones sobre estos términos, por favor contacte a MATIL SL a través del correo electrónico: pablo@matil.com.
            </Text>


          </Flex>
    </Flex>
    <Box bg='white'> 
        <Footer/>
    </Box>
    </Box>
        
    )
}

export default Uso
 
 
 
 
 