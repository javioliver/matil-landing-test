import React from 'react'

import {Flex, Text, Box } from '@chakra-ui/react'
import Footer from '../Content/Components/footer'

const Cookies = () => {

    return (
    <Box position={'absolute'} >
        <Flex bg='gray.100'  py={{ base: "3vh", md: "4vh", lg: "5vh", xl: "7vh" }} justifyContent={'center'} width='100%'  px={{ base: '20px', sm: '30px', md: '5vw',lg: "10vw", xl: "15vw"  }} >
            <Box> 
            <Text mt={{ base: "3vh", md: "4vh", lg: "5vh", xl: "7vh" }} textAlign="center" overflowWrap="break-word" whiteSpace="pre-wrap" fontSize={{ base: '1.5em', sm: '2em', md: '2em', lg: '2.8em' }} fontWeight="medium"  background='linear-gradient(to right, rgba(128, 0, 255, 0.7), rgba(0, 0, 255, 0.6))' backgroundClip={'text'} >
                POLÍTICA DE COOKIES
            </Text>
            
            </Box>
        </Flex>           


        {/*CONSUMIDORES*/} 
        <Flex py={{ base: "5vh", md: "5vh", lg: "7vh", xl: "10vh" }} width="100vw" color="black" justifyContent="center" >
          <Flex  width="100%" maxW="1200px"  justifyContent={{ md: 'space-between' }} px={{ base: '20px', sm: '30px', md: '50px' }} flexDirection='column'>
           
            <Text   fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
            El acceso a este Sitio Web puede implicar la utilización de cookies. Las cookies son pequeñas cantidades de información que se almacenan en el navegador utilizado por cada Usuario —en los distintos dispositivos que pueda utilizar para navegar— para que el servidor recuerde cierta información que posteriormente y únicamente el servidor que la implementó leerá. Las cookies facilitan la navegación, la hacen más amigable, y no dañan el dispositivo de navegación.
            </Text>

            <Text mt='50px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
            Las cookies son procedimientos automáticos de recogida de información relativa a las preferencias determinadas por el Usuario durante su visita al Sitio Web con el fin de reconocerlo como Usuario, y personalizar su experiencia y el uso del Sitio Web, y pueden también, por ejemplo, ayudar a identificar y resolver errores.
            </Text>

            <Text mt='50px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
            La información recabada a través de las cookies puede incluir la fecha y hora de visitas al Sitio Web, las páginas visionadas, el tiempo que ha estado en el Sitio Web y los sitios visitados justo antes y después del mismo. Sin embargo, ninguna cookie permite que esta misma pueda contactarse con el número de teléfono del Usuario o con cualquier otro medio de contacto personal. Ninguna cookie puede extraer información del disco duro del Usuario o robar información personal. La única manera de que la información privada del Usuario forme parte del archivo Cookie es que el usuario dé personalmente esa información al servidor.
            </Text>

            <Text mt='50px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
            Las cookies que permiten identificar a una persona se consideran datos personales. Por tanto, a las mismas les será de aplicación la Política de Privacidad anteriormente descrita. En este sentido, para la utilización de las mismas será necesario el consentimiento del Usuario. Este consentimiento será comunicado, en base a una elección auténtica, ofrecido mediante una decisión afirmativa y positiva, antes del tratamiento inicial, removible y documentado.
            </Text>

            <Text mt='50px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
            Las cookies que permiten identificar a una persona se consideran datos personales. Por tanto, a las mismas les será de aplicación la Política de Privacidad anteriormente descrita. En este sentido, para la utilización de las mismas será necesario el consentimiento del Usuario. Este consentimiento será comunicado, en base a una elección auténtica, ofrecido mediante una decisión afirmativa y positiva, antes del tratamiento inicial, removible y documentado.
            </Text>

            <Text mt='50px' background='linear-gradient(to right, rgba(128, 0, 255, 0.7), rgba(0, 0, 255, 0.6))' backgroundClip={'text'} fontWeight={'medium'} fontSize={{base: '1.2em',sm:'1.3em', md: '1.4em', lg: '1.5em' }} >
            Cookies propias
            </Text>

            <Text mt='50px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
            Son aquellas cookies que son enviadas al ordenador o dispositivo del Usuario y gestionadas exclusivamente por MATIL para el mejor funcionamiento del Sitio Web. La información que se recaba se emplea para mejorar la calidad del Sitio Web y su Contenido y su experiencia como Usuario. Estas cookies permiten reconocer al Usuario como visitante recurrente del Sitio Web y adaptar el contenido para ofrecerle contenidos que se ajusten a sus preferencias.
            </Text>

            <Text mt='50px' background='linear-gradient(to right, rgba(128, 0, 255, 0.7), rgba(0, 0, 255, 0.6))' backgroundClip={'text'} fontWeight={'medium'} fontSize={{base: '1.2em',sm:'1.3em', md: '1.4em', lg: '1.5em' }} >
            Cookies de terceros
            </Text>

            <Text mt='50px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
            Son cookies utilizadas y gestionadas por entidades externas que proporcionan a MATIL servicios solicitados por este mismo para mejorar el Sitio Web y la experiencia del usuario al navegar en el Sitio Web. Los principales objetivos para los que se utilizan cookies de terceros son la obtención de estadísticas de accesos y analizar la información de la navegación, es decir, cómo interactúa el Usuario con el Sitio Web.
            </Text>

            <Text mt='50px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
            La información que se obtiene se refiere, por ejemplo, al número de páginas visitadas, el idioma, el lugar a la que la dirección IP desde el que accede el Usuario, el número de Usuarios que acceden, la frecuencia y reincidencia de las visitas, el tiempo de visita, el navegador que usan, el operador o tipo de dispositivo desde el que se realiza la visita. Esta información se utiliza para mejorar el Sitio Web, y detectar nuevas necesidades para ofrecer a los Usuarios un Contenido y/o servicio de óptima calidad. En todo caso, la información se recopila de forma anónima y se elaboran informes de tendencias del Sitio Web sin identificar a usuarios individuales.
            </Text>

            <Text mt='50px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
            Puede obtener más información sobre las cookies, la información sobre la privacidad, o consultar la descripción del tipo de cookies que se utiliza, sus principales características, periodo de expiración, etc. en el siguiente(s) enlace(s):
            </Text>

            <Text mt='50px' background='linear-gradient(to right, rgba(128, 0, 255, 0.7), rgba(0, 0, 255, 0.6))' backgroundClip={'text'} fontWeight={'medium'} fontSize={{base: '1.2em',sm:'1.3em', md: '1.4em', lg: '1.5em' }} >
            Google Analytics
            </Text>

            <Text mt='50px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
            La(s) entidad(es) encargada(s) del suministro de cookies podrá(n) ceder esta información a terceros, siempre y cuando lo exija la ley o sea un tercero el que procese esta información para dichas entidades.
            </Text>

            <Text mt='50px' background='linear-gradient(to right, rgba(128, 0, 255, 0.7), rgba(0, 0, 255, 0.6))' backgroundClip={'text'} fontWeight={'medium'} fontSize={{base: '1.2em',sm:'1.3em', md: '1.4em', lg: '1.5em' }} >
            Deshabilitar, rechazar y eliminar cookies
            </Text>

            <Text mt='50px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
            El Usuario puede deshabilitar, rechazar y eliminar las cookies —total o parcialmente— instaladas en su dispositivo mediante la configuración de su navegador (entre los que se encuentran, por ejemplo, Chrome, Firefox, Safari, Explorer). En este sentido, los procedimientos para rechazar y eliminar las cookies pueden diferir de un navegador de Internet a otro. En consecuencia, el Usuario debe acudir a las instrucciones facilitadas por el propio navegador de Internet que esté utilizando. En el supuesto de que rechace el uso de cookies —total o parcialmente— podrá seguir usando el Sitio Web, si bien podrá tener limitada la utilización de algunas de las prestaciones del mismo.
            </Text>

            <Text mt='50px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
            Este documento de Política de Cookies ha sido creado mediante el generador de plantilla de política de cookies web gratis online el día 13/04/2024.
            </Text>

          </Flex>
    </Flex>
    <Box bg='white'> 
        <Footer/>
    </Box>
    </Box>
        
    )
}

export default Cookies
 
 
 
 
 