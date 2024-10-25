
//REACT
import React, { useState } from 'react'
//TRANSLATION
import { useTranslations } from 'next-intl'
//FETCH DATA
import axios from 'axios'
//FRONT
import { Box, Checkbox, Flex, Text } from '@chakra-ui/react'
//COMPONENTS
import NormalInput from './Input'
import NormalSelector from './Selector'
import ArrowButton from './ArrowButton'


const ContactBox = () => {

    //TRANSLATION
    const t = useTranslations('Sections')

    //EDIT FIELDS
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [tlf, setTlf] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [numWorkers, setNumWorkers] = useState('1-5')
    const [numConsults, setNumConsults] = useState('1-5')

    //SUBMIT BOOLEANS
    const [submited, setSubmited] = useState(false)
    const [isChecked, setIsChecked] = useState(false)
    const [sended, setSended] = useState(false)

    const isDisabled = name === '' || mail === '' || tlf === '' || companyName === '' || !isChecked || sended
    
    //SUBMITTING THE REQUEST
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
            
            <Text fontWeight={'500'} fontSize={'xl'}>{t('ContactBox_Title')}</Text>
            <Text color='brand.text_gray' fontSize={'sm'} fontWeight={300}>{t('ContactBox_Subtitle')}</Text>
            <NormalInput placeholder={'Javier Sánchez'} field={t('ContactBox_1')} value={name} setValue={setName} mt='40px'/>
            <NormalInput placeholder={'correo@ejemplo.com'} field={t('ContactBox_2')} value={mail} setValue={setMail}  mt='10px'/>
            <NormalInput placeholder={'666 66 66 66'} field={t('ContactBox_3')} value={tlf} setValue={setTlf} mt='10px'/>
            <NormalInput placeholder={'Matil SL'} field={t('ContactBox_4')} value={companyName} setValue={setCompanyName}  mt='10px'/>
            <NormalSelector  field={t('ContactBox_5')}  selectorList={['1-5', '5-10', '10-20','20-30', '30-40','40-50', '+50']} value={numWorkers} setValue={setNumWorkers} mt='10px'/>
            <NormalSelector  field={t('ContactBox_6')}  selectorList={['0-500','500-1000', '1000-2000', '2000-4000', '4000-6000','6000-8000','8000-10000',  '+10000']} value={numConsults} setValue={setNumConsults} mt='10px'/>
            
            <Flex  mt="30px" > 
                <Flex alignItems={'flex-start'}  gap='10px'  width={'100%'} > 
                  <Checkbox  id='myCheckbox' aria-labelledby="checkboxLabel" mt='4px' size='md' colorScheme="blue"  isChecked={isChecked}  onChange={() => setIsChecked(!isChecked)} />
                  <Text id="checkboxLabel"  fontSize={'2xs'} color='brand.text_gray' fontWeight={300}>{t('ContactBox_Agree')}</Text>
                </Flex>
            </Flex>
            
            <Flex flexDir={'row-reverse'} mt="30px" alignItems={'center'} justifyContent={'space-between'}>
            <ArrowButton text={t('Send')} onClick={handleSubmit}  bgGradient='linear(to-br, #58daf4, rgb(5, 102, 255))' color='white' hover={{color:'brand.gray_1', bg:'linear(to-br, #58daf4, rgb(5, 12, 255))'}}  fontSize={'sm'}/>
              {sended ? <Text fontSize={'.8em'} color='green.500'>* {t('ContactBox_Sended')}</Text>:submited && <Text fontSize={'.7em'} color='red'>* {t('ContactBox_Failed')}</Text>}
            </Flex>
        </Box>  
          </>)
}

export default ContactBox