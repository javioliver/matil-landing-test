

//NEXT
import { useRouter } from 'next/router'
import Image from 'next/image'
//TRANSALATION
import { useTranslations } from 'next-intl'
//FRONT
import { Box, Flex, Text } from '@chakra-ui/react'
import ArrowButton from '../Widgets/ArrowButton'
import LanguageSwitcher from '../Widgets/LanguageSwitcher'
const Footer=()=>{

    //ROUNTING AND TRANSLATION CONSTANTS
    const router = useRouter()
    const t = useTranslations('Header')
    
    return(
        <Flex bg='white' px='4vw' flexDir={'column'} alignItems={'center'} fontSize={'sm'} pb='50px'   color='brand.clear_black' zIndex={1000} > 
            
            <Flex width={'100%'} flexDirection={{ base: 'column', sm:'column', lg: 'row' }} gap='32px'  py={{ base: '0', sm:'0', lg: '30px' }} maxW={'1000px'} alignItems={'center'} justifyContent={'space-between'} >
                <Flex alignItems={'center'} gap='7px'> 
                    <Image height={20} width={20} alt={t('AltImage1')} src='/images/matil-simple.svg'/>
                    <Text fontWeight={500}>matil</Text>
                </Flex>
                <Text textAlign={'center'} color='brand.text_gray' fontSize={'xs'} fontWeight={300}>{t('FooterCTA')}</Text>
                <Box> 
                <ArrowButton text={t('Contact')} onClick={() => router.push('/contact')} bgGradient='linear(to-br,#00299c, rgb(0, 20, 51))' color='white' hover={{color:'brand.gray_1', bg:'linear(to-br,#33299c, rgb(0, 10, 41))'}} fontSize={'xs'}/>
                </Box>
            </Flex>
         
            <Flex width="100%" py='30px'color="black" justifyContent="center" alignItems={'center'}  maxW={'1000px'} >
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
                    <Box cursor={'pointer'} onClick={() => router.push('solutions')} px='32px'>
                        <Text>{t('Solutions')}</Text>
                    </Box>
                </Flex>
            </Flex>
          
            <Flex  fontSize={'2xs'} width="100%" maxW="1000px"  alignItems="center"  >
                <LanguageSwitcher/>
                <Text textAlign="center" fontWeight={300}>  
                    <Box as="span" onClick={() => router.push('privacy-policy')} sx={{ cursor: 'pointer', _hover: { color: 'rgb(100, 116, 145)' }, mx: 2 }}>
                    {t('Privacy')}
                    </Box>
                    |
                    <Box as="span" onClick={() => router.push('cookies-policy')} sx={{ cursor: 'pointer', _hover: { color: 'rgb(100, 116, 145)' }, mx: 2 }}>
                    {t('Cookies')}
                    </Box>
                </Text>
            </Flex>
          
             
        </Flex>)
    }

export default Footer