
//NEXT
import { useRouter } from 'next/router'
//REACT
import React, { useState, useEffect, useRef } from 'react'
 //TRANSALATION
import { useTranslations } from 'next-intl'
//FRONT
import { Box, Flex, Text, Icon, Image } from '@chakra-ui/react'
import { motion } from 'framer-motion'
//COMPONENTS
import ArrowButton from '../Widgets/ArrowButton'
//ICONS
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx"
import { FaRobot, FaPlug } from "react-icons/fa6"
import { FiArrowUpRight } from "react-icons/fi"
import { IoFileTrayFull, IoPricetags, IoHeadset } from "react-icons/io5"



//HEADER SECTIONS COMPONENT
const HeaderSection = ({t, router, section}:{t:any, router:any, section:'Tilda' | 'Integrations' | 'Pricing' | 'Solutions' }) => {

  //BOOLEAN FOR SHOW THE SECTION BOX
  const [isHovering, setIsHovering] = useState<boolean>(false)
  return(
    <Box position='relative' onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}> 
      <Flex alignItems={'center'} fontWeight={400} cursor={'pointer'}   gap='5px' color={isHovering?'gray.600':''}>
        <Text fontSize={{base: '.8em',sm:'.8em', md: '.9em', lg: '1em'}} onClick={()=>{router.push(`/${section.toLowerCase()}`) }} >{section === 'Tilda'?section:t(section)}</Text>
      </Flex>    
    </Box>
)}



const Header=({isComputerWidth}:{isComputerWidth:boolean})=>{

  //ROUNTING AND TRANSLATION CONSTANTS
  const router = useRouter()
  const t = useTranslations('Header')

  //SECTIONS THAT HAS A WHITE BACKGROUND AND THE HEADER TEXT WILL BE BLACK
  const pathname = router.pathname
  const blackTextSections = ['/matilda', '/super-service', '/integrations', '/channels', '/platforms', '/pricing', '/solutions']

  //MOTION BOX
  const MotionFlex = motion(Box)
 
  //SHOW THE MENU IF IS A MOBILE DEVICE
  const [showMenu, setShowMenu] = useState<boolean>(false)
  
  //RESIZE SCROLL LOGIC
  const headerRef = useRef<HTMLDivElement>(null)
  const handleScroll = () => {
      const scrollY = window.scrollY
      const newScrollProgress = Math.min(scrollY / 200, 1)
 
      const headerWidth = `${100 - newScrollProgress * 15}%`
      const backgroundColor = `rgba(256, 256, 256, ${newScrollProgress/1.1})`
      const boxShadow = `0 4px 8px rgba(0, 0, 0, ${newScrollProgress * 0.05})`

      if ( headerRef.current) {
        headerRef.current.style.backgroundColor = backgroundColor
        headerRef.current.style.boxShadow = boxShadow
        headerRef.current.style.width = headerWidth
      }
     
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {window.removeEventListener('scroll', handleScroll)}
  }, [])

  return( 
      <Flex width={'100vw'} bg='green'  justifyContent={'center'} position={'fixed'} top={0} left={0} zIndex={1000000}> 
        <Flex maxW={'1200px'} width={'100%'} justifyContent={'center'} position={'relative'}> 
          {isComputerWidth ? 

            <Flex display={'inline-flex'} ref={headerRef} top={'3vh'}bg={'transparent'} width={'100%'} position='absolute' color={blackTextSections.includes(pathname) ? 'brand.black_button' : 'white'} _hover={{color:blackTextSections.includes(pathname) ? 'brand.black_button' : 'white'}} 
            borderRadius={'10rem'} px={{ base: '10px', sm: '12px', md: '15px' }}  py={{ base: '5px', sm: '7px', md: '10px' }}  justifyContent='space-between' alignItems='center' transition="background-color 0.1s ease, width 0.1s ease, box-shadow 0.1s ease" > 
                <Flex gap='10px' alignItems={'center'} onClick={()=> router.push('/') } cursor={'pointer'}  fontSize='xl' fontWeight={500} >
                    <Image height={'25px'} src='/images/matil-simple.svg'/>
                    <Text fontSize={'1.1em'} mt='-2px'>MATIL </Text>
                </Flex>
                <Flex gap='3vw' alignItems={'center'}> 
                  <HeaderSection t={t} router={router} section={'Tilda'}/>
                  <HeaderSection t={t} router={router} section={'Integrations'}/>
                  <HeaderSection t={t} router={router} section={'Pricing'}/>
                  <HeaderSection t={t} router={router} section={'Solutions'}/>
                </Flex>

                  <Flex gap='10px' >                  
                    <ArrowButton onClick={() => router.push('contact')} text={t('Contact')} bg='transparent' color='brand.text_blue' hover={{bg:'transparent', color:'brand.text_blue'}} fontSize={{base: '.7em',sm:'.7em', md: '.8em', lg: '.9em'}}/>
                    <ArrowButton onClick={() => window.open('https://superservice.matil.es/', '_blank')} text={t('Sign in')} bg='brand.black_button' color='white' hover={{bg:'brand.black_button_hover', color:'brand.gray_1'}} fontSize={{base: '.7em',sm:'.7em', md: '.8em', lg: '.9em'}}/>       
                   </Flex>
          </Flex>
          :
          <Flex mt={'5vh'} bg={'transparent'} width={'100%'}  color={blackTextSections.includes(pathname)?'brand.black_button':'white'} borderRadius={'1rem'} px={{ base: '20px', sm: '30px', md: '50px' }} maxW='1200px' justifyContent='space-between' alignItems='center'  >
              <Flex gap='10px' alignItems={'center'} onClick={()=> router.push('/') } cursor={'pointer'}  fontSize='xl' fontWeight={500} >
                <Image height={'20px'} src='/images/matil-simple.svg'/>
                <Text mt='4px' color={blackTextSections.includes(pathname)?'':'white'}>MATIL</Text>
              </Flex>
              <Icon aria-label='menu' as={RxHamburgerMenu} boxSize={8} cursor='pointer' color={'brand.clear_black'} onClick={()=>setShowMenu(true)}/>
              
              {(showMenu && !isComputerWidth) &&
                <MotionFlex display={'flex'} maxH={'96vh'} flexDir={'column'} onMouseDown={(e)=>{e.stopPropagation()}}   bg='white' boxShadow={'0 0 10px 1px rgba(0, 0, 0, 0.15)'} zIndex={10000} position={'fixed'} top={'2vh'} left={'2vw'} borderRadius={'1rem'} width={{base:'96vw', sm:'96vw',md:'60vw'}}  p='10px'  initial={{ opacity: 0 }} animate={{ opacity: 1}} exit={{ opacity: 0}} transition={{ duration: 0.5 }} >
              
                <Flex  p='10px' color='black' justifyContent={'space-between'} alignItems={'center'}>
                  <Text>MATIL</Text>
                  <Icon as={RxCross2} onClick={()=>setShowMenu(false)} cursor={'pointer'}/>
                </Flex>

                <Box flex='1' overflow={'scroll'}  borderRadius={'.5rem'}> 
                  <Box   p='10px' mt='10px' bg='gray.50' borderRadius={'.5rem'}>
                      <Text fontWeight={'medium'}  color='brand.clear_black' >{t('Product')}</Text>
                      <Flex mt='10px' gap='10px'  cursor={'pointer'}  onClick={()=> router.push('/matilda')}  _hover={{bg:'gray.100', color:'brand.clear_black'}} p='15px' borderRadius={'1rem'} color='gray.400' > 
                          <Icon mt='3px' as={FaRobot} boxSize={'18px'} />
                          <Box> 
                            <Text color='brand.clear_black' >Matilda</Text>
                            <Text fontSize={'.8em'} fontWeight={300}>{t('Matilda_Subtitle')}</Text>
                          </Box>
                      </Flex>
                      <Flex mt='10px' gap='10px'  cursor={'pointer'}  onClick={()=> router.push('/super-service')} _hover={{bg:'gray.100', color:'brand.clear_black'}} p='15px' borderRadius={'1rem'} color='gray.400' > 
                          <Icon mt='3px' as={IoFileTrayFull} boxSize={'18px'} />
                          <Box> 
                            <Text color='brand.clear_black' >SuperService</Text>
                            <Text fontSize={'.8em'} fontWeight={300}>{t('SS_Subtitle')}</Text>
                          </Box>
                      </Flex>
                      <Flex mt='10px' gap='10px'  cursor={'pointer'} onClick={()=> router.push('/integrations')}  _hover={{bg:'gray.100', color:'brand.clear_black'}} p='15px' borderRadius={'1rem'} color='gray.400' > 
                        <Icon mt='3px' as={FaPlug} boxSize={'18px'} />
                          <Box> 
                            <Text color='brand.clear_black' >{t('Integrations')}</Text>
                            <Text fontSize={'.8em'} fontWeight={300}>{t('Integrations_Subtitle')}</Text>
                            <Flex>
                              <Flex flex='1' cursor={'pointer'} className="flex-container" alignItems={'center'}  gap='7px' color='blue.400' mt='2vh' onClick={(e) => {e.stopPropagation();router.push('/platforms')}} > 
                                <Icon as={FiArrowUpRight} mt='.4em'/>
                                <Text mt='1vh' className="underline-animation" fontWeight={300} fontSize={'.9em'} >{t('More_platforms')}</Text>
                              </Flex>
                              <Flex flex='1'  cursor={'pointer'}className="flex-container" alignItems={'center'}  gap='7px' color='blue.400' mt='2vh' onClick={(e) => {e.stopPropagation();router.push('/channels')}}> 
                                <Icon as={FiArrowUpRight} mt='.4em'/>
                                <Text mt='1vh' className="underline-animation" fontWeight={300} fontSize={'.9em'} >{t('More_channels')}</Text>
                              </Flex>
                            </Flex>
                          </Box>
                      </Flex>
                  </Box>    

                  <Box  p='10px' mt='10px' bg='gray.50' borderRadius={'.5rem'}>
                    <Text fontWeight={'medium'}  color='brand.clear_black' >{t('Pricing')}</Text>
                    <Flex mt='10px' gap='10px'  cursor={'pointer'}  onClick={()=> router.push('/pricing')}  _hover={{bg:'gray.100', color:'brand.clear_black'}} p='15px' borderRadius={'1rem'} color='gray.400' > 
                          <Icon mt='3px' as={IoPricetags} boxSize={'18px'} />
                          <Box> 
                            <Text color='brand.clear_black' >{t('Pricing')}</Text>
                            <Text fontSize={'.8em'} fontWeight={300}>{t('Pricing_Subtitle')}</Text>
                          </Box>
                      </Flex>

                  </Box>
                  <Box  p='10px' mt='10px' bg='gray.50' borderRadius={'.5rem'}>
                    <Text fontWeight={'medium'}  color='brand.clear_black' >{t('Solutions')}</Text>
                    <Flex mt='10px' gap='10px'  cursor={'pointer'}  onClick={()=> router.push('solutions')}  _hover={{bg:'gray.100', color:'brand.clear_black'}} p='15px' borderRadius={'1rem'} color='gray.400' > 
                          <Icon mt='3px' as={IoHeadset} boxSize={'18px'} />
                          <Box> 
                            <Text color='brand.clear_black' >{t('Solutions')}</Text>
                            <Text fontSize={'.8em'} fontWeight={300}>{t('Solutions_Subtitle')}</Text>
                          </Box>
                      </Flex>
                  </Box>

                </Box>
                </MotionFlex>
              }
          </Flex>}
        </Flex>
       </Flex>
    )
}

export default Header

 
