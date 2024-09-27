

//NEXT
import { useRouter } from 'next/router'
//TRANSALATION
import { useTranslations } from 'next-intl'
//FRONT
import { Box, Flex, Text } from '@chakra-ui/react'

const Footer=()=>{

    //ROUNTING AND TRANSLATION CONSTANTS
    const router = useRouter()
    const t = useTranslations('Header')
    
    return(
        <Box bg='white' fontSize={'sm'}  color='brand.clear_black' py='5vh' zIndex={1000} > 
            <Flex width="100vw" color="black" justifyContent="center" alignItems={'center'} >
                <Flex color='brand.clear_black' fontSize={'1.1em'}  alignItems={{ base: 'center', sm: 'center', lg: 'start' }} width="100%" maxW="1200px" flexDirection={{ base: 'column', sm:'column', lg: 'row' }}  justifyContent={{ base: 'flex-start', sm: 'flex-start', lg: 'center' }}px={{ base: '20px', sm: '30px', md: '50px' }} >
                    <Box   borderLeftWidth={'1px'} borderLeftColor={{ base: 'gray.50', sm: 'gray.50', md: 'gray.200' }}borderRightWidth={'1px'} borderRightColor={{ base: 'gray.50', sm: 'gray.50', md: 'gray.200' }} px='50px'>
                        <Text fontWeight={'bold'}>{t('Product').toUpperCase()}</Text>
                        <Box  mt='15px'  ml='10px'> 
                            <Text cursor={'pointer'} _hover={{color:'gray.500'}} mt='5px' onClick={()=>router.push('/matilda')}>Matilda</Text>
                            <Text cursor={'pointer'} _hover={{color:'gray.500'}} mt='5px' onClick={() => router.push('/super-service') }>SuperService</Text>
                            <Text cursor={'pointer'} _hover={{color:'gray.500'}} mt='5px' onClick={() => router.push('/integrations')}>{t('Integrations')}</Text>      
                            <Text cursor={'pointer'} _hover={{color:'gray.500'}} mt='5px' onClick={() => router.push('/channels')}>{t('Channels')}</Text>                       
                            <Text cursor={'pointer'} _hover={{color:'gray.500'}} mt='5px' onClick={() => router.push('/platforms')}>{t('Platforms')}</Text>                       

                        </Box>
                    </Box>
                  
                    <Box   mt={{base:'20px',sm:'20px',md:'0' }} borderRightWidth={'1px'} borderRightColor={{ base: 'gray.50', sm: 'gray.50', md: 'gray.200' }} px='50px'>
                        <Text fontWeight={'bold'}>{t('Pricing').toUpperCase()}</Text>
                        <Text  mt='15px'  ml='10px' cursor={'pointer'} _hover={{color:'gray.500'}} onClick={() => router.push('/pricing')}>{t('Pricing')}</Text>
                    </Box>
                    <Box mt={{base:'20px',sm:'20px',md:'0' }} borderRightWidth={'1px'} borderRightColor={{ base: 'gray.50', sm: 'gray.50', md: 'gray.200' }} px='50px'>
                        <Text fontWeight={'bold'}>{t('Solutions').toUpperCase()}</Text>
                        <Text  mt='15px'  ml='10px'cursor={'pointer'} _hover={{color:'gray.500'}} onClick={() => router.push('/solutions')}>{t('Solutions')}</Text>
                    </Box>
                </Flex>
            </Flex>

        <Flex width="100vw" color="black" mt="10vh" justifyContent="center" alignItems="center">
            <Flex color='brand.clear_black' fontSize={'1.1em'} width="100%" maxW="1200px" justifyContent="center" alignItems="center"  px={{ base: '20px', sm: '30px', md: '50px' }}>
            <Text textAlign="center" fontWeight={300}>  
                <Box as="span" onClick={() => router.push('privacy-policy')} sx={{ cursor: 'pointer', _hover: { color: 'gray.500' }, mx: 2 }}>
                {t('Privacy')}
                </Box>
                |
                <Box as="span" onClick={() => router.push('cookies-policy')} sx={{ cursor: 'pointer', _hover: { color: 'gray.500' }, mx: 2 }}>
                {t('Cookies')}
                </Box>
            </Text>
            </Flex>
        </Flex>
        </Box>)
    }

export default Footer