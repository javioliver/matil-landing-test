
import React, { useState } from 'react'
import { Box, Icon, Checkbox, Flex, Text } from '@chakra-ui/react'
import { IoIosArrowForward } from "react-icons/io"

import NormalInput from './Input'
import NormalSelector from './Selector'
import axios from 'axios'
import ArrowButton from './ArrowButton'


 

const ContactBox = () => {
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [tlf, setTlf] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [numWorkers, setNumWorkers] = useState('1-5')
    const [numConsults, setNumConsults] = useState('1-5')
    const [submited, setSubmited] = useState(false)
    const [isChecked, setIsChecked] = useState(false)

    const [sended, setSended] = useState(false)

    const isDisabled = name === '' || mail === '' || tlf === '' || companyName === '' || !isChecked || sended
    const handleSubmit = async (event:any) => {

      if (!isDisabled) {
        setSended(true)
        event.preventDefault()
        const formData = {
          name: name,
          mail: mail,
          phone: tlf,
          num_workers: numWorkers,
          num_consults:numConsults,
          company:companyName,
          message:''
        } 
        axios.post('https://tioye4pg5adqwyon3qtgyuc37i0vigfx.lambda-url.eu-west-3.on.aws/', formData)
        .then(response => {setSended(true);console.log('bien')})
        .catch(error => {if (error.response) {setSended(true); console.log('error')}  
        })
      }
      else setSubmited(true)
    }
    

    return(<>
       <Box boxShadow={'3px 5px 20px 3px rgba(0, 0, 0, 0.15)'} maxW='600px' flex='4' p='35px' bg ='white' borderRadius={'1rem'} width={{ base: '100%', md: 'auto' }}height="auto" flexShrink="0" >
            <Text color='brand.clear_black' fontWeight={'medium'} fontSize={'1.5em'}>¿Cómo podemos contactarte?</Text>
            <Text color='gray.500' fontSize={'1em'}>Rellena la información y te contactaremos en menos de 24h</Text>
            <NormalInput placeholder={'Javier Sánchez'} field={'Nombre y Apellidos'} value={name} setValue={setName} mt='40px'/>
            <NormalInput placeholder={'correo@ejemplo.com'} field={'Correo corporativo'} value={mail} setValue={setMail}  mt='10px'/>
            <NormalInput placeholder={'666 66 66 66'} field={'Teléfono'} value={tlf} setValue={setTlf} mt='10px'/>
            <NormalInput placeholder={'Empresa Ejemplo SL'} field={'Nombre de la empresa'} value={companyName} setValue={setCompanyName}  mt='10px'/>
            <NormalSelector  field={'Núm. trabajadores ATC.'}  selectorList={['1-5', '5-20', '20-50', '+50']} value={numWorkers} setValue={setNumWorkers} mt='10px'/>
            <NormalSelector  field={'Núm. consultas al mes'}  selectorList={['0-1000', '1000-5000', '5000-50000', '+50000']} value={numConsults} setValue={setNumConsults} mt='10px'/>
            
            <Flex justifyContent='end'  mt="30px" > 
                <Flex alignItems={'flex-start'}  gap='10px'  width={{sm:'100%', md:'200px', xl:'300px'}} > 
                <Checkbox 
                  id='myCheckbox'
                  mt='4px' 
                  size='sm' 
                  colorScheme="blue" 
                  isChecked={isChecked} 
                  onChange={() => setIsChecked(!isChecked)} 
                >
                  <Text fontSize={'.8em'} color='brand.clear_black'>
                    Acepto el envío de comunicaciones comerciales, por correo electrónico, relativas a MATIL SL
                  </Text>
                </Checkbox>
                </Flex>
            </Flex>
            
            <Flex flexDir={'row-reverse'} mt="30px" alignItems={'center'} justifyContent={'space-between'}> 
              <ArrowButton isDisabled={isDisabled} text={'Enviar'} onClick={handleSubmit}/>
              {sended ? <Text fontSize={'.8em'} color='green.500'>* Tu mensaje ha sido enviado con éxito</Text>:submited && <Text fontSize={'.7em'} color='red'>* Rellene todos los campos para eniviar el formulario</Text>}
            </Flex>
        </Box>  
          </>)
}

export default ContactBox