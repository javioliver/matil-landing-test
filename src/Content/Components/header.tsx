
//NEXT
import { useRouter } from 'next/router'
import Image from 'next/image'
//REACT
import React, { useState, useEffect, useRef } from 'react'
 //TRANSALATION
import { useTranslations } from 'next-intl'
//FRONT
import { Box, Flex, Text, Icon } from '@chakra-ui/react'
import { motion } from 'framer-motion'
//COMPONENTS
import ArrowButton from '../Widgets/ArrowButton'
//ICONS
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx"
import { FaRobot } from "react-icons/fa6"
import { IoFileTrayFull, IoPricetags, IoHeadset } from "react-icons/io5"
import Logo from '../../../public/images/matil-logos/logo-word-white.svg';
import LogoBlack from '../../../public/images/matil-logos/logo-word-gradient-black.svg'

//HEADER SECTIONS COMPONENT
const HeaderSection = ({t, router, section}:{t:any, router:any, section:'Tilda' | 'Platform' | 'Pricing' | 'Solutions' }) => {

  //BOOLEAN FOR SHOW THE SECTION BOX
  const [isHovering, setIsHovering] = useState<boolean>(false)
  return(
    <Box position='relative' mt='-2px' onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}> 
      <Flex alignItems={'center'} fontWeight={400} cursor={'pointer'}   gap='5px' opacity={isHovering?0.7:1}>
        <Text fontSize={'sm'} onClick={()=>{router.push(`/${section.toLowerCase()}`) }} >{section === 'Tilda'?section:t(section)}</Text>
      </Flex>    
    </Box>
)}

const Header = ({isComputerWidth}:{isComputerWidth:boolean | null})=>{

  //ROUNTING AND TRANSLATION CONSTANTS
  const router = useRouter()
  const t = useTranslations('Header')

  //SECTIONS THAT HAS A WHITE BACKGROUND AND THE HEADER TEXT WILL BE BLACK
  const pathname = router.pathname
  const whiteTextSections = ['/platform', '/']

  //MOTION BOX
  const MotionFlex = motion(Box)
 
  //SHOW THE MENU IF IS A MOBILE DEVICE
  const [showMenu, setShowMenu] = useState<boolean>(false)
  
  //RESIZE SCROLL LOGIC
  const headerRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
      const scrollY = window.scrollY
      const newScrollProgress = Math.min(scrollY / 200, 1)
       const headerWidth = `${Math.min(1200, window.innerWidth) * (100 - newScrollProgress * 15) * 0.01}px`

      const backgroundColor = `rgba(256, 256, 256, ${newScrollProgress/1.2})`
      const blurIntensity = Math.min(newScrollProgress * 7, 7);
      let color = 'rgb(0, 20, 51)'
      if (whiteTextSections.includes(pathname)) {
        const whiteRGB = [255, 255, 255]
        const targetRGB = [0, 20, 51]
        const progress = Math.min(newScrollProgress / 1.05, 1)
        const interpolatedColor = whiteRGB.map((start, index) => {
          const end = targetRGB[index];
          return Math.round(start + progress * (end - start))
        })
        color = `rgb(${interpolatedColor[0]}, ${interpolatedColor[1]}, ${interpolatedColor[2]})`;
      }

      const boxShadow = `2px 2px 8px rgba(0, 0, 0, ${newScrollProgress * 0.2})`
      if ( headerRef.current && logoRef.current) {
        headerRef.current.style.backgroundColor = backgroundColor
        headerRef.current.style.boxShadow = boxShadow
        headerRef.current.style.width = headerWidth
        headerRef.current.style.color = color
        headerRef.current.style.backdropFilter = `blur(${blurIntensity}px)`

        logoRef.current.style.opacity = String(Math.min(1, newScrollProgress))
      
      }
  }
  useEffect(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => {window.removeEventListener('scroll', handleScroll)}
  }, [pathname])


  return(
  <>
  {(pathname !== '/contact' && isComputerWidth !== null) && 
    <Flex width={'100vw'} justifyContent={'center'} position={isComputerWidth?'fixed':'absolute'} top={0} left={0} zIndex={1000}> 
      <Flex maxW={'1200px'}  width={'100%'} justifyContent={'center'} position={'relative'}> 
        {isComputerWidth ? 

          <Flex maxW={'1200px'} display={'inline-flex'}  ref={headerRef} top={'3vh'} bg={'transparent'} width={'calc(100%)'} position='fixed' color={whiteTextSections.includes(pathname) ?  'white':'brand.black_button' }  
          borderRadius={'10rem'} paddingRight={{ base: '10px', sm: '12px', md: '15px' }} paddingLeft={{ base: '15px', sm: '18px', md: '25px' }}  py={{ base: '5px', sm: '7px', md: '10px' }}  justifyContent='space-between' alignItems='center' transition="background-color 0.1s ease, width 0.1s ease, box-shadow 0.1s ease" > 
              
              <Flex w='90px' position={'relative'} alignItems={'center'}>
                <Flex position={'absolute'}  left={0}  zIndex={9} alignItems={'center'} onClick={()=> router.push('/') } cursor={'pointer'}  fontSize='xl' fontWeight={500} >
                  < Logo style={{ width: 90 }} />
                </Flex>
                <Flex position={'absolute'}  left={0} zIndex={10} opacity={1} ref={logoRef} alignItems={'center'} onClick={()=> router.push('/') } cursor={'pointer'}  fontSize='xl' fontWeight={500} >
                  < LogoBlack style={{ width: 90 }} />
                </Flex>
              </Flex>
              <Flex gap='3vw' alignItems={'center'}> 
                <HeaderSection t={t} router={router} section={'Tilda'}/>
                <HeaderSection t={t} router={router} section={'Platform'}/>
                <HeaderSection t={t} router={router} section={'Pricing'}/>
                <HeaderSection t={t} router={router} section={'Solutions'}/>
              </Flex>

                <Flex gap='10px' >                  
                  <ArrowButton onClick={() => router.push('contact')} text={t('Contact')} bg='transparent'  hover={{bg:'transparent', color:'brand.text_blue'}} fontSize={'xs'}/>
                  <ArrowButton onClick={() => window.open('https://app.matil.ai/', '_blank')} borderRadius={'2rem'} text={t('Sign in')} bg={ 'brand.text_blue'} color='white' hover={{bg:'rgb(5, 79, 235)', color:'brand.gray_1'}} fontSize={'xs'}/>       
                </Flex>
        </Flex>
        :
        <Flex mt={'5vh'} bg={'transparent'} width={'100%'}  color={whiteTextSections.includes(pathname)?'white':'brand.black_button'} borderRadius={'1rem'} px={{ base: '20px', sm: '30px', md: '50px' }} maxW='1200px' justifyContent='space-between' alignItems='center'  >
            <Flex gap='10px' alignItems={'center'} onClick={()=> router.push('/') } cursor={'pointer'}  fontSize='xl' fontWeight={500} >
              <Image height={25} width={25} alt={t('AltImage1')} src='/images/matil-simple.svg'/>
              <Text mt='4px' color={whiteTextSections.includes(pathname)?'white':'brand.black_button'} >matil</Text>
            </Flex>
            <Icon aria-label='menu'  color={whiteTextSections.includes(pathname)?'white':'brand.black_button'} as={RxHamburgerMenu} boxSize={10} cursor='pointer' onClick={()=>setShowMenu(true)}/>
            
            {(showMenu && !isComputerWidth) &&
              <MotionFlex display={'flex'} maxH={'96vh'} flexDir={'column'} onMouseDown={(e)=>{e.stopPropagation()}}   bg='white' boxShadow={'0 0 10px 1px rgba(0, 0, 0, 0.15)'} zIndex={10000} position={'fixed'} top={'0vh'} left={'2vw'} borderRadius={'1rem'} width={{base:'96vw', sm:'96vw',md:'60vw'}}  p='10px'  initial={{ opacity: 0 }} animate={{ opacity: 1}} exit={{ opacity: 0}} transition={{ duration: 0.5 }} >
            
              <Flex color='#000331'  p='10px'  justifyContent={'space-between'} alignItems={'center'}>
                <Logo style={{ width: 60 }} />
                <Icon as={RxCross2} onClick={()=>setShowMenu(false)} cursor={'pointer'}/>
              </Flex>

              <Box flex='1' overflow={'scroll'}  borderRadius={'.5rem'}> 
                
                  <Flex mt='10px' bg='brand.gray_1' gap='10px'  cursor={'pointer'}  onClick={()=> {router.push('/tilda');setShowMenu(false)}}  _hover={{bg:'gray.100', color:'brand.clear_black'}} p='15px' borderRadius={'1rem'} color='gray.400' > 
                    <Icon mt='3px' as={FaRobot} boxSize={'18px'} />
                    <Box> 
                      <Text color='brand.clear_black' >Tilda</Text>
                      <Text fontSize={'.8em'} fontWeight={300}>{t('Tilda_Subtitle')}</Text>
                    </Box>
                </Flex>

                <Flex mt='10px' bg='brand.gray_1' gap='10px'  cursor={'pointer'}  onClick={()=> {router.push('/platform');setShowMenu(false)}}  _hover={{bg:'gray.100', color:'brand.clear_black'}} p='15px' borderRadius={'1rem'} color='gray.400' > 
                    <Icon mt='3px' as={IoFileTrayFull} boxSize={'18px'} />
                    <Box> 
                      <Text color='brand.clear_black' >{t('Platform')}</Text>
                      <Text fontSize={'.8em'} fontWeight={300}>{t('Platform_Subtitle')}</Text>
                    </Box>
                </Flex>
                    
                <Flex mt='10px' bg='brand.gray_1' gap='10px'  cursor={'pointer'}  onClick={()=> {router.push('/pricing');;setShowMenu(false)}}  _hover={{bg:'gray.100', color:'brand.clear_black'}} p='15px' borderRadius={'1rem'} color='gray.400' > 
                    <Icon mt='3px' as={IoPricetags} boxSize={'18px'} />
                    <Box> 
                      <Text color='brand.clear_black' >{t('Pricing')}</Text>
                      <Text fontSize={'.8em'} fontWeight={300}>{t('Pricing_Subtitle')}</Text>
                    </Box>
                </Flex>
                    
                <Flex mt='10px' bg='brand.gray_1' gap='10px'  cursor={'pointer'}  onClick={()=> {router.push('/solutions');setShowMenu(false)}}  _hover={{bg:'gray.100', color:'brand.clear_black'}} p='15px' borderRadius={'1rem'} color='gray.400' > 
                    <Icon mt='3px' as={IoHeadset} boxSize={'18px'} />
                    <Box> 
                      <Text color='brand.clear_black' >{t('Solutions')}</Text>
                      <Text fontSize={'.8em'} fontWeight={300}>{t('Solutions_Subtitle')}</Text>
                    </Box>
                </Flex>

            </Box>
              </MotionFlex>
            }
        </Flex>}
      </Flex>
    </Flex>
  }
       </>)
}

export default Header

 
