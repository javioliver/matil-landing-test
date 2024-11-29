


//REACT
import React, { useState } from 'react'
//TRANSLATION
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/router'
//SEND MAIL
import emailjs from 'emailjs-com'
//FRONT
import { Box, Flex, Text, Button, Icon } from '@chakra-ui/react'
//WIDGETS
import FormInput from '../Widgets/Input'
import { FaClock, FaWrench } from 'react-icons/fa6'
import { IoFunnel, IoChatboxEllipses } from "react-icons/io5";
import { TiArrowBack } from "react-icons/ti";

import HighlightText from '../Functions/HighlightText'
import ScrollAnimation from 'react-animate-on-scroll'
const Contact = ()=>{

    //TRANSLATION
    const router = useRouter()
    const t = useTranslations('Sections')
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    
    //BULLET POINTS
    const bulletPointsIcons = [FaClock, IoFunnel, FaWrench, IoChatboxEllipses]

    //SUBMIT BOOLEANS
    const [submited, setSubmited] = useState(false)
    const [waitingSend, setWaitingSend] = useState(false)
    const [showError, setShowError] = useState(false)

    
    
    const handleSubmit = async () => {
      setWaitingSend(true)
      const templateParams = {name, mail}
      await emailjs.send('service_5g09mkk', 'template_vexfwi7', templateParams, 'd6Tm2xBuITScTerC3')
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text)
          setSubmited(true)
          setShowError(false)
         }, 
         (err) => {
          console.log('FAILED...', err)
          setShowError(true)
        }
          )      
      setWaitingSend(false)
    }

    return(<>
     <Flex width={'100vw'}  overflow={'hidden'} alignItems={'center'} position={'absolute'} height={'100vh'} bg='brand.gray_1' >
        
        <Flex flex='1' height={'100%'} px='4vw' justifyContent={'center'} alignItems={'center'}  bgRepeat="no-repeat"   bgSize="cover" bgPosition="center" bgImage={'/images/mesh.png'}>
          <Flex bg='brand.gray_1' maxW={'750px'} boxShadow={'xl'} borderRadius={'.5rem'}  p='45px' flexDir={'column'}> 
            <Text as='h2' overflowWrap="break-word" whiteSpace="pre-wrap" textAlign={{ base: 'center',sm:'center', md: 'start' }} fontSize={'4xl'}  >
              {t('Contact_Hero')}
            </Text>
            <Text mb='30px' as='h3' mt='30px' w='80%' fontSize={'md'}  color="gray.600" fontWeight={300}  overflowWrap="break-word" whiteSpace="pre-wrap">
              <HighlightText text={ t('Contact_SubHero')} color1='gray.600' color2='rgb(5, 102, 255)' bold />
            </Text>
            <Text as='h3' mt='20px' w='80%' fontSize={'md'}  color="gray.600" fontWeight={300}  overflowWrap="break-word" whiteSpace="pre-wrap">
            {t('Contact_Offer')}
            </Text>
            {bulletPointsIcons.map((icon, index) => (
              <Flex key={`point-${index}`} gap='10px' mt='30px'>
                <Icon color='brand.text_blue' boxSize={'20px'}  as={icon}/>
                <Text as='h4'  mt='-5px' color='gray.600' fontSize={'sm'}>{t(`Contact_Point_${index + 1}`)}</Text>
              </Flex>
            ))}
          </Flex>
        </Flex>

        <Flex flex='1' position={'relative'} px='4vw' justifyContent={'center'} alignItems={'center'} >
      
          <Flex  opacity={!submited ? 0 : 1} pointerEvents={!submited ? 'none' : 'all'} transition="opacity 0.3s ease-in-out"  position='absolute'  maxW={'750px'} boxShadow={'lg'} borderRadius={'.5rem'}  p='45px' flexDir={'column'}   bgRepeat="no-repeat"    bgSize="cover" bgPosition="center" bgImage={'/images/mesh.png'}> 
            
            <Box  position={'absolute'} opacity={0.7} bg='white'zIndex={1000} width={'100%'} height={'100%'} top={0} left={0}/>
            <Box zIndex={1001}> 
              <Text  overflowWrap="break-word" whiteSpace="pre-wrap" textAlign={{ base: 'center',sm:'center', md: 'start' }} fontSize={'4xl'}  >
                {t('Contact_Thanks')}
              </Text>
              <Text mt='20px' w='80%' fontSize={'md'}  color="gray.600" fontWeight={300}  overflowWrap="break-word" whiteSpace="pre-wrap">
              {t('Contact_Thanks_Message')}
              </Text>
              <Flex flexDir={'row-reverse'}  mt='40px'>
                <Button alignItems={'center'} leftIcon={<TiArrowBack/>} color={'white'}fontWeight={400}  bg='rgb(0, 20, 51)' _hover={{bg:'brand.black_button_hover'}}  size={'md'} onClick={() => router.push('/')} >{t('GoWeb')}</Button> 
              </Flex>
            </Box>

          </Flex>
 
          <Flex  position='absolute'  opacity={submited ? 0 : 1} pointerEvents={submited ? 'none' : 'all'} transition="opacity 0.3s ease-in-out"  maxW={'800px'} justifyContent={'center'} alignItems={'center'} flexDir={'column'} flex='1'>
            <FormInput placeholder={'Javier Sánchez'} field={t('ContactBox_1')} value={name} setValue={setName} />
            <FormInput  validPattern={/^[^\s@]+@[^\s@]+\.[^\s@]+$/} placeholder={'correo@ejemplo.com'} field={t('ContactBox_2')} value={mail} setValue={setMail}  mt='40px'/>   
            <Box width={'100%'}  mt='50px'>
              <Button isDisabled={ name === '' || mail === '' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)}color={'white'} width={'100%'} fontWeight={400}  bgGradient='linear(to-br, #58daf4, rgb(5, 102, 255))' _hover={{bgGradient:'linear(to-br, #58daf4, rgb(5, 12, 255))'}}  size={'lg'} onClick={handleSubmit} >{waitingSend?t('Waiting'):t('Send')}</Button> 
            </Box>
            {showError && 
            <Box w='100%' mt='20px' > 
              <Text fontWeight={300} fontSize={'xs'} color='red'>
                {t('Error')}
              </Text>
            </Box>}

            <Box mt='50px' width={'100%'}> 
            <HighlightText text={ t('ContactBox_Agree')} clickFunc={() => router.push('/terms-and-conditions')} fontWeight={300} fontSize={'xs'} color1='gray.600' color2='rgb(5, 102, 255)' />             
            </Box>
          </Flex>
        </Flex>
 
      </Flex>
    </>)
    }

export default Contact