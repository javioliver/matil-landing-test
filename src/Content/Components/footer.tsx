

//NEXT
import { useRouter } from 'next/router'
import Image from 'next/image'
//TRANSALATION
import { useTranslations } from 'next-intl'
//FRONT
import { Box, Flex, Text, Icon } from '@chakra-ui/react'
import ArrowButton from '../Widgets/ArrowButton'
import LanguageSwitcher from '../Widgets/LanguageSwitcher'
import { FaPhone } from 'react-icons/fa6'

const Footer=()=>{

    //ROUNTING AND TRANSLATION CONSTANTS
    const router = useRouter()
    const t = useTranslations('Header')
    
    return(
        <Flex bg='white' px='4vw' flexDir={'column'} alignItems={'center'} fontSize={'sm'} pb='30px'  color='brand.clear_black' zIndex={1000} > 
            
            <Flex width={'100%'} flexDirection={{ base: 'column', sm:'column', lg: 'row' }} gap='32px'  py={{ base: '0', sm:'0', lg: '30px' }} maxW={'1000px'} justifyContent={'space-between'} >
                <Flex flexDir={'column'} alignItems={{ base: 'center', sm:'center', lg: 'start' }} maxW={{ base: '100%', sm:'100%', lg: '200px' }} > 
                    <Image height={0}  width={0} style={{width:'70px'}} alt={t('AltImage1')} src='/images/matil-logos/logo-word-gradient-black.svg'/>
                    <Text  color='brand.text_gray' mt='10px' fontSize={'2xs'} fontWeight={300}>{t('FooterCTA')}</Text>
                      <Text fontSize={'2xs'}  mt='5px'>+34 656 30 63 61</Text>
                    <Text fontSize={'2xs'} >javi@matil.es</Text>
                </Flex>
                <Flex width="100%" color="black" justifyContent="center"   maxW={'1000px'} >
                    <Flex color='brand.clear_black' fontSize={'sm'} fontWeight={'500'} alignItems={{ base: 'center', sm: 'center', lg: 'start' }} width="100%" maxW="1200px" flexDirection={{ base: 'column', sm:'column', lg: 'row' }} gap='32px'  justifyContent={{ base: 'flex-start', sm: 'flex-start', lg: 'center' }}px={{ base: '20px', sm: '30px', md: '50px' }} >
                            <Box cursor={'pointer'} onClick={() => router.push('tilda')} _hover={{color:'brand.text_gray'}}  px='32px'>
                                <Text >Tilda</Text>
                            </Box>
                            <Box  cursor={'pointer'} onClick={() => router.push('platform')} _hover={{color:'brand.text_gray'}}   px='32px'>
                                <Text >{t('Platform')}</Text>
                            </Box>
                            <Box   cursor={'pointer'} onClick={() => router.push('pricing')}_hover={{color:'brand.text_gray'}} px='32px'>
                                <Text >{t('Pricing')}</Text>
                            </Box>
                            <Box cursor={'pointer'} onClick={() => router.push('solutions')} _hover={{color:'brand.text_gray'}} px='32px'>
                                <Text>{t('Solutions')}</Text>
                            </Box>
                    </Flex>
                </Flex>
            </Flex>
         
            <Flex borderTopColor={'gray.300'} mt={{ base: '30px', sm:'30px', lg: '0' }} borderTopWidth={'1px'} pt='30px' fontSize={'2xs'} width="100%" maxW="1000px"  alignItems="center"  >
                <LanguageSwitcher/>
                <Text textAlign="center" fontWeight={300}> 
                    <Box as="span" onClick={() => router.push('cookies-policy')} sx={{ cursor: 'pointer', _hover: { color: 'rgb(100, 116, 145)' }, mx: 2 }}>
                    {t('Cookies')}
                    </Box>  
                    |
                    <Box as="span" onClick={() => router.push('terms-and-conditions')} sx={{ cursor: 'pointer', _hover: { color: 'rgb(100, 116, 145)' }, mx: 2 }}>
                        {t('TermsConditions')}
                    </Box>
                </Text>
            </Flex>
          
             
        </Flex>)
    }

export default Footer