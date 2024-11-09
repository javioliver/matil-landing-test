
//REACT
import { useState } from 'react'
//FRONT
import { Box, Flex, Text, Button } from '@chakra-ui/react'
import { useTranslations } from 'next-intl';
import { GetStaticPropsContext } from 'next'

const CoockiesWarning=()=>{

  const t = useTranslations('Header')
  const [cookieAccepted, setCoockieAccepted] = useState(() => {
    if (typeof window !== 'undefined') {
      return Boolean(localStorage.getItem('cookiesAccepted'))
    }
    return false
  })
   

        return(<>
     {!cookieAccepted&& 
        <Box position='fixed' right='2vw' bottom='2vw' p='15px' borderRadius={'xl'} bg='white' color='black'  boxShadow={'0 0 10px 1px rgba(0, 0, 0, 0.15)'}  maxW={{base:'96vw',md:'500px'}}  zIndex={10000}>
          <Text fontWeight={300}  fontSize={'18px'}>{t('CookiesMessage')} <Box as="span" onClick={()=>{('/politica-de-cookies')}} fontWeight={'medium'}   sx={{ cursor: 'pointer', _hover: { color: 'gray.600'}}}>{t('CookiesMessageLink')}</Box>. </Text>
            <Flex flexDir={'row-reverse'} mt='4vh' gap='1vw'> 
              <Button  fontWeight={'medium'}  size='sm' borderRadius={'3vh'} onClick={()=>{setCoockieAccepted(true);localStorage.setItem('cookiesAccepted', 'true')}} bg='brand.clear_black' color='white' _hover={{bg:''}}>{t('Accept')}</Button>
              <Button  fontWeight={'medium'} size='sm' borderRadius={'3vh'} onClick={()=>{localStorage.setItem('cookiesAccepted', 'false')}} bg='brand.clear_black' color='white' _hover={{bg:''}}>{t('Reject')}</Button>
            </Flex>
          </Box>
          }</>)
    }

export default CoockiesWarning

export async function getStaticProps({locale}:GetStaticPropsContext) {return {props: {messages: require(`../../lang/${locale}.json`)}}}
