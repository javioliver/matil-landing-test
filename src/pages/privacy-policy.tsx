import React from 'react'

import {Flex, Text, Box, Icon } from '@chakra-ui/react'
import Footer from '../Content/Components/footer'

import {FaCheckCircle} from 'react-icons/fa'

const Privacidad = () => {

    return (
    <Box position={'absolute'} >
        <Flex bg='gray.100'  py={{ base: "3vh", md: "4vh", lg: "5vh", xl: "7vh" }} justifyContent={'center'} width='100%'  px={{ base: '20px', sm: '30px', md: '5vw',lg: "10vw", xl: "15vw"  }} >
            <Box> 
            <Text mt={{ base: "3vh", md: "4vh", lg: "5vh", xl: "7vh" }} textAlign="center" overflowWrap="break-word" whiteSpace="pre-wrap" fontSize={{ base: '1.5em', sm: '2em', md: '2em', lg: '2.8em' }} fontWeight="medium"  background='linear-gradient(to right, rgba(128, 0, 255, 0.7), rgba(0, 0, 255, 0.6))' backgroundClip={'text'} >
                POLÍTICA DE PRIVACIDAD
            </Text>
            
            </Box>
        </Flex>           


        {/*CONSUMIDORES*/} 
        <Flex py={{ base: "5vh", md: "5vh", lg: "7vh", xl: "10vh" }} width="100vw" color="black" justifyContent="center" >
          <Flex  width="100%" maxW="1200px"  justifyContent={{ md: 'space-between' }} px={{ base: '20px', sm: '30px', md: '50px' }} flexDirection='column'>
           
            <Text mt='50px' background='linear-gradient(to right, rgba(128, 0, 255, 0.7), rgba(0, 0, 255, 0.6))' backgroundClip={'text'} fontWeight={'medium'} fontSize={{base: '1.2em',sm:'1.3em', md: '1.4em', lg: '1.5em' }} >
            I. POLÍTICA DE PRIVACIDAD Y PROTECCIÓN DE DATOS
            </Text>

            <Text mt='50px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
            Respetando lo establecido en la legislación vigente, MATIL (en adelante, también Sitio Web) se compromete a adoptar las medidas técnicas y organizativas necesarias, según el nivel de seguridad adecuado al riesgo de los datos recogidos.         
            </Text>

            <Text mt='50px' background='linear-gradient(to right, rgba(128, 0, 255, 0.7), rgba(0, 0, 255, 0.6))' backgroundClip={'text'} fontWeight={'medium'} fontSize={{base: '1.2em',sm:'1.3em', md: '1.4em', lg: '1.5em' }} >
            Leyes que incorpora esta política de privacidad
            </Text>

            <Text mt='50px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
            Esta política de privacidad está adaptada a la normativa española y europea vigente en materia de protección de datos personales en internet. En concreto, la misma respeta las siguientes normas:
            </Text>

            <Box ml='5vw' mt='50px'>
                <Flex gap='20px'>
                    <Icon as={FaCheckCircle} color='rgba(128, 0, 255, 0.7)' mt='5px'/>
                    <Text fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">El Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos (RGPD).</Text>
                </Flex>
                <Flex gap='20px' mt='20px'>
                    <Icon as={FaCheckCircle} color='rgba(128, 0, 255, 0.7)' mt='5px'/>
                    <Text fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">La Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPD-GDD).</Text>
                </Flex>
                <Flex gap='20px' mt='20px'>
                    <Icon as={FaCheckCircle} color='rgba(128, 0, 255, 0.7)' mt='5px'/>
                    <Text fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">El Real Decreto 1720/2007, de 21 de diciembre, por el que se aprueba el Reglamento de desarrollo de la Ley Orgánica 15/1999, de 13 de diciembre, de Protección de Datos de Carácter Personal (RDLOPD).</Text>
                </Flex>
                <Flex gap='20px' mt='20px'>
                    <Icon as={FaCheckCircle} color='rgba(128, 0, 255, 0.7)' mt='5px'/>
                    <Text fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">La Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE).</Text>
                </Flex>
            </Box>


            <Text mt='50px' background='linear-gradient(to right, rgba(128, 0, 255, 0.7), rgba(0, 0, 255, 0.6))' backgroundClip={'text'} fontWeight={'medium'} fontSize={{base: '1.2em',sm:'1.3em', md: '1.4em', lg: '1.5em' }} >
            Identidad del responsable del tratamiento de los datos personales
            </Text>

            <Text mt='50px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
            Dirección: Balcon de la Peña 61
            </Text>

            <Text mt='50px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
            Teléfono de contacto: 656306361
            </Text>

            <Text mt='50px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
            Email de contacto: j.oliver@latoksoluciones.com
            </Text>

            <Text mt='50px' background='linear-gradient(to right, rgba(128, 0, 255, 0.7), rgba(0, 0, 255, 0.6))' backgroundClip={'text'} fontWeight={'medium'} fontSize={{base: '1.2em',sm:'1.3em', md: '1.4em', lg: '1.5em' }} >
            Registro de Datos de Carácter Personal
            </Text>

            <Text mt='50px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
            En cumplimiento de lo establecido en el RGPD y la LOPD-GDD, le informamos que los datos personales recabados por MATIL, mediante los formularios extendidos en sus páginas quedarán incorporados y serán tratados en nuestro fichero con el fin de poder facilitar, agilizar y cumplir los compromisos establecidos entre MATIL y el Usuario o el mantenimiento de la relación que se establezca en los formularios que este rellene, o para atender una solicitud o consulta del mismo. Asimismo, de conformidad con lo previsto en el RGPD y la LOPD-GDD, salvo que sea de aplicación la excepción prevista en el artículo 30.5 del RGPD, se mantine un registro de actividades de tratamiento que especifica, según sus finalidades, las actividades de tratamiento llevadas a cabo y las demás circunstancias establecidas en el RGPD.
            </Text>

            <Text mt='50px' background='linear-gradient(to right, rgba(128, 0, 255, 0.7), rgba(0, 0, 255, 0.6))' backgroundClip={'text'} fontWeight={'medium'} fontSize={{base: '1.2em',sm:'1.3em', md: '1.4em', lg: '1.5em' }} >
            Principios aplicables al tratamiento de los datos personales
            </Text>

            <Box ml='5vw'  mt='50px'>
                <Flex gap='20px' >
                    <Icon as={FaCheckCircle} color='rgba(128, 0, 255, 0.7)' mt='5px'/>
                    <Text fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">Principio de licitud, lealtad y transparencia: se requerirá en todo momento el consentimiento del Usuario previa información completamente transparente de los fines para los cuales se recogen los datos personales.</Text>
                </Flex>
                <Flex gap='20px' mt='20px'>
                    <Icon as={FaCheckCircle} color='rgba(128, 0, 255, 0.7)' mt='5px'/>
                    <Text fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">Principio de limitación de la finalidad: los datos personales serán recogidos con fines determinados, explícitos y legítimos.</Text>
                </Flex>
                <Flex gap='20px' mt='20px'>
                    <Icon as={FaCheckCircle} color='rgba(128, 0, 255, 0.7)' mt='5px'/>
                    <Text fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">Principio de minimización de datos: los datos personales recogidos serán únicamente los estrictamente necesarios en relación con los fines para los que son tratados.</Text>
                </Flex>
                <Flex gap='20px' mt='20px'>
                    <Icon as={FaCheckCircle} color='rgba(128, 0, 255, 0.7)' mt='5px'/>
                    <Text fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">Principio de exactitud: los datos personales deben ser exactos y estar siempre actualizados.</Text>
                </Flex>
                <Flex gap='20px' mt='20px'>
                    <Icon as={FaCheckCircle} color='rgba(128, 0, 255, 0.7)' mt='5px'/>
                    <Text fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">Principio de limitación del plazo de conservación: los datos personales solo serán mantenidos de forma que se permita la identificación del Usuario durante el tiempo necesario para los fines de su tratamiento.</Text>
                </Flex>
                <Flex gap='20px' mt='20px'>
                    <Icon as={FaCheckCircle} color='rgba(128, 0, 255, 0.7)' mt='5px'/>
                    <Text fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">Principio de integridad y confidencialidad: los datos personales serán tratados de manera que se garantice su seguridad y confidencialidad.</Text>
                </Flex>
                <Flex gap='20px' mt='20px'>
                    <Icon as={FaCheckCircle} color='rgba(128, 0, 255, 0.7)' mt='5px'/>
                    <Text fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">Principio de responsabilidad proactiva: el Responsable del tratamiento será responsable de asegurar que los principios anteriores se cumplen.</Text>
                </Flex>
            </Box>
            
            <Text mt='50px' background='linear-gradient(to right, rgba(128, 0, 255, 0.7), rgba(0, 0, 255, 0.6))' backgroundClip={'text'} fontWeight={'medium'} fontSize={{base: '1.2em',sm:'1.3em', md: '1.4em', lg: '1.5em' }} >
            Categorías de datos personales
            </Text>
 
            <Text mt='50px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
            Las categorías de datos que se tratan en MATIL son únicamente datos identificativos. En ningún caso, se tratan categorías especiales de datos personales en el sentido del artículo 9 del RGPD.
            </Text>
            
            <Text mt='50px' background='linear-gradient(to right, rgba(128, 0, 255, 0.7), rgba(0, 0, 255, 0.6))' backgroundClip={'text'} fontWeight={'medium'} fontSize={{base: '1.2em',sm:'1.3em', md: '1.4em', lg: '1.5em' }} >
            Base legal para el tratamiento de los datos personales
            </Text>

            <Text mt='50px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
            La base legal para el tratamiento de los datos personales es el consentimiento. MATIL se compromete a recabar el consentimiento expreso y verificable del Usuario para el tratamiento de sus datos personales para uno o varios fines específicos.
            </Text>

            <Text mt='50px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
            El Usuario tendrá derecho a retirar su consentimiento en cualquier momento. Será tan fácil retirar el consentimiento como darlo. Como regla general, la retirada del consentimiento no condicionará el uso del Sitio Web.
            </Text>

            <Text mt='50px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
            En las ocasiones en las que el Usuario deba o pueda facilitar sus datos a través de formularios para realizar consultas, solicitar información o por motivos relacionados con el contenido del Sitio Web, se le informará en caso de que la cumplimentación de alguno de ellos sea obligatoria debido a que los mismos sean imprescindibles para el correcto desarrollo de la operación realizada.
            </Text>

            <Text mt='50px' background='linear-gradient(to right, rgba(128, 0, 255, 0.7), rgba(0, 0, 255, 0.6))' backgroundClip={'text'} fontWeight={'medium'} fontSize={{base: '1.2em',sm:'1.3em', md: '1.4em', lg: '1.5em' }} >
            Fines del tratamiento a que se destinan los datos personales
            </Text>

            <Text mt='50px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
            Los datos personales son recabados y gestionados por MATIL con la finalidad de poder facilitar, agilizar y cumplir los compromisos establecidos entre el Sitio Web y el Usuario o el mantenimiento de la relación que se establezca en los formularios que este último rellene o para atender una solicitud o consulta.
            </Text>

            <Text mt='50px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
            Igualmente, los datos podrán ser utilizados con una finalidad comercial de personalización, operativa y estadística, y actividades propias del objeto social de MATIL, así como para la extracción, almacenamiento de datos y estudios de marketing para adecuar el Contenido ofertado al Usuario, así como mejorar la calidad, funcionamiento y navegación por el Sitio Web.
            </Text>

            <Text mt='50px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
            En el momento en que se obtengan los datos personales, se informará al Usuario acerca del fin o fines específicos del tratamiento a que se destinarán los datos personales; es decir, del uso o usos que se dará a la información recopilada.
            </Text>
            
            <Text mt='50px' background='linear-gradient(to right, rgba(128, 0, 255, 0.7), rgba(0, 0, 255, 0.6))' backgroundClip={'text'} fontWeight={'medium'} fontSize={{base: '1.2em',sm:'1.3em', md: '1.4em', lg: '1.5em' }} >
            Períodos de retención de los datos personales
            </Text>

            <Text mt='50px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
            Los datos personales solo serán retenidos durante el tiempo mínimo necesario para los fines de su tratamiento y, en todo caso, únicamente durante el siguiente plazo: 12 meses, o hasta que el Usuario solicite su supresión.
            </Text>

            <Text mt='50px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
            En el momento en que se obtengan los datos personales, se informará al Usuario acerca del plazo durante el cual se conservarán los datos personales o, cuando eso no sea posible, los criterios utilizados para determinar este plazo.
            </Text>

            <Text mt='50px' background='linear-gradient(to right, rgba(128, 0, 255, 0.7), rgba(0, 0, 255, 0.6))' backgroundClip={'text'} fontWeight={'medium'} fontSize={{base: '1.2em',sm:'1.3em', md: '1.4em', lg: '1.5em' }} >
            Destinatarios de los datos personales
            </Text>

            <Text mt='50px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
            Los datos personales del Usuario no serán compartidos con terceros.
            </Text>

            <Text mt='50px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
            En cualquier caso, en el momento en que se obtengan los datos personales, se informará al Usuario acerca de los destinatarios o las categorías de destinatarios de los datos personales.
            </Text>

            <Text mt='50px' background='linear-gradient(to right, rgba(128, 0, 255, 0.7), rgba(0, 0, 255, 0.6))' backgroundClip={'text'} fontWeight={'medium'} fontSize={{base: '1.2em',sm:'1.3em', md: '1.4em', lg: '1.5em' }} >
            Datos personales de menores de edad
            </Text>

            <Text mt='50px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
            Respetando lo establecido en los artículos 8 del RGPD y 7 de la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales, solo los mayores de 14 años podrán otorgar su consentimiento para el tratamiento de sus datos personales de forma lícita por MATIL. Si se trata de un menor de 14 años, será necesario el consentimiento de los padres o tutores para el tratamiento, y este solo se considerará lícito en la medida en la que los mismos lo hayan autorizado.
            </Text>

            <Text mt='50px' background='linear-gradient(to right, rgba(128, 0, 255, 0.7), rgba(0, 0, 255, 0.6))' backgroundClip={'text'} fontWeight={'medium'} fontSize={{base: '1.2em',sm:'1.3em', md: '1.4em', lg: '1.5em' }} >
            Secreto y seguridad de los datos personales
            </Text>

            <Text mt='50px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
            MATIL se compromete a adoptar las medidas técnicas y organizativas necesarias, según el nivel de seguridad adecuado al riesgo de los datos recogidos, de forma que se garantice la seguridad de los datos de carácter personal y se evite la destrucción, pérdida o alteración accidental o ilícita de datos personales transmitidos, conservados o tratados de otra forma, o la comunicación o acceso no autorizados a dichos datos.
            </Text> 

            <Text mt='50px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
            El Sitio Web cuenta con un certificado SSL (Secure Socket Layer), que asegura que los datos personales se transmiten de forma segura y confidencial, al ser la transmisión de los datos entre el servidor y el Usuario, y en retroalimentación, totalmente cifrada o encriptada.
            </Text>

            <Text mt='50px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
            Sin embargo, debido a que MATIL no puede garantizar la inexpugabilidad de internet ni la ausencia total de hackers u otros que accedan de modo fraudulento a los datos personales, el Responsable del tratamiento se compromete a comunicar al Usuario sin dilación indebida cuando ocurra una violación de la seguridad de los datos personales que sea probable que entrañe un alto riesgo para los derechos y libertades de las personas físicas. Siguiendo lo establecido en el artículo 4 del RGPD, se entiende por violación de la seguridad de los datos personales toda violación de la seguridad que ocasione la destrucción, pérdida o alteración accidental o ilícita de datos personales transmitidos, conservados o tratados de otra forma, o la comunicación o acceso no autorizados a dichos datos.
            </Text>


            <Text mt='50px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
            Los datos personales serán tratados como confidenciales por el Responsable del tratamiento, quien se compromete a informar de y a garantizar por medio de una obligación legal o contractual que dicha confidencialidad sea respetada por sus empleados, asociados, y toda persona a la cual le haga accesible la información.
            </Text>


            <Text mt='50px' background='linear-gradient(to right, rgba(128, 0, 255, 0.7), rgba(0, 0, 255, 0.6))' backgroundClip={'text'} fontWeight={'medium'} fontSize={{base: '1.2em',sm:'1.3em', md: '1.4em', lg: '1.5em' }} >
            Enlaces a sitios web de terceros
            </Text>

            <Text mt='50px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
            El Sitio Web puede incluir hipervínculos o enlaces que permiten acceder a páginas web de terceros distintos de MATIL, y que por tanto no son operados por MATIL. Los titulares de dichos sitios web dispondrán de sus propias políticas de protección de datos, siendo ellos mismos, en cada caso, responsables de sus propios ficheros y de sus propias prácticas de privacidad.
            </Text>

            <Text mt='50px' background='linear-gradient(to right, rgba(128, 0, 255, 0.7), rgba(0, 0, 255, 0.6))' backgroundClip={'text'} fontWeight={'medium'} fontSize={{base: '1.2em',sm:'1.3em', md: '1.4em', lg: '1.5em' }} >
            Reclamaciones ante la autoridad de control
            </Text>

            <Text mt='50px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
            En caso de que el Usuario considere que existe un problema o infracción de la normativa vigente en la forma en la que se están tratando sus datos personales, tendrá derecho a la tutela judicial efectiva y a presentar una reclamación ante una autoridad de control, en particular, en el Estado en el que tenga su residencia habitual, lugar de trabajo o lugar de la supuesta infracción. En el caso de España, la autoridad de control es la Agencia Española de Protección de Datos (http://www.agpd.es).
            </Text>

            <Text mt='50px' background='linear-gradient(to right, rgba(128, 0, 255, 0.7), rgba(0, 0, 255, 0.6))' backgroundClip={'text'} fontWeight={'medium'} fontSize={{base: '1.2em',sm:'1.3em', md: '1.4em', lg: '1.5em' }} >
            II. ACEPTACIÓN Y CAMBIOS EN ESTA POLÍTICA DE PRIVACIDAD
            </Text>

            <Text mt='50px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
            Es necesario que el Usuario haya leído y esté conforme con las condiciones sobre la protección de datos de carácter personal contenidas en esta Política de Privacidad, así como que acepte el tratamiento de sus datos personales para que el Responsable del tratamiento pueda proceder al mismo en la forma, durante los plazos y para las finalidades indicadas. El uso del Sitio Web implicará la aceptación de la Política de Privacidad del mismo.
            </Text>

            <Text mt='50px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
            MATIL se reserva el derecho a modificar su Política de Privacidad, de acuerdo a su propio criterio, o motivado por un cambio legislativo, jurisprudencial o doctrinal de la Agencia Española de Protección de Datos. Los cambios o actualizaciones de esta Política de Privacidad no serán notificados de forma explícita al Usuario. Se recomienda al Usuario consultar esta página de forma periódica para estar al tanto de los últimos cambios o actualizaciones.
            </Text>

            <Text mt='50px' fontSize={'1.1em'}  color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
            Esta Política de Privacidad fue actualizada para adaptarse al Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos (RGPD) y a la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales.
            </Text>


          </Flex>
    </Flex>
    <Box bg='white'> 
        <Footer/>
    </Box>
    </Box>
        
    )
}

export default Privacidad
 
 