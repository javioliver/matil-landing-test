
//NEXT
import { useRouter } from 'next/router'
//REACT
import React, { useState, useRef } from 'react'
 //TRANSALATION
import { useTranslations } from 'next-intl'
//FRONT
import { Box, Flex, Text, Icon, Image } from '@chakra-ui/react'
import { motion } from 'framer-motion'
//COMPONENTS
import Triangle from '../Widgets/Trianglebox'
import LanguageSwitcher from '../Widgets/LanguageSwitcher'
//ICONS
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx"
import { FaRobot, FaSalesforce, FaShopify, FaCcStripe, FaPlug } from "react-icons/fa6"
import { FiArrowUpRight } from "react-icons/fi"
import { AiFillInstagram } from "react-icons/ai"
import { IoLogoWhatsapp, IoMdMail, IoIosArrowForward, IoIosArrowDown } from "react-icons/io"
import { IoFileTrayFull, IoPricetags, IoHeadset } from "react-icons/io5"



//HEADER SECTIONS COMPONENT
const HeaderSection = ({t, router, section}:{t:any, router:any, section:'Product' | 'Pricing' | 'Solutions' | 'Contact'}) => {

  //MOTION BOX
  const MotionBox = motion(Box)

  //SECTIONS THAT HAS A WHITE BACKGROUND AND THE HEADER TEXT WILL BE BLACK
  const pathname = router.pathname
  const blackTextSections = ['/matilda', '/super-service', '/integrations', '/channels', '/platforms']

  //BOOLEAN FOR SHOW THE SECTION BOX
  const [isHovering, setIsHovering] = useState<boolean>(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const handleMouseEnter = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      setIsHovering(true)
  }
  const handleMouseLeave = () => {timeoutRef.current = setTimeout(() => {setIsHovering(false)}, 100)}


  //SECTION BOX COMPONENT
  const SectionSelect = () => {

    //PRODUCTS SECTIONS AND ICONS
    const productSections = [['Matilda', 'matilda'], ['SuperService', 'super-service'], [t('Integrations'), 'integrations'] ]
    const productSubtitles = ['Matilda_Subtitle', 'SS_Subtitle', 'Integrations_Subtitle' ]
    const iconsList = [FaRobot, IoFileTrayFull, FaPlug]

    //INTEGRATIONS AND CHANNELS LIST
    const integrationsList = [['Shopify',FaShopify], ['Salesforce', FaSalesforce], ['Stripe', FaCcStripe]]
    const channelsList = [['Whatsapp',IoLogoWhatsapp], ['Email', IoMdMail], ['Instagram', AiFillInstagram]]

    //LAST HOVERED INDEX
    const [selectedSectionIndex, setSelectedSectionIndex] = useState<number>(0)
 
    return(
      <Flex>
          <Box color='black' minW='15vw'>
            {productSections.map((product, index) => {

              const isSelected = selectedSectionIndex === index
              return (
                <Flex key={`section-${index}`} alignItems={'center'} gap='10px' p='20px' className="flex-container" cursor='pointer' onMouseEnter={() => setSelectedSectionIndex(index)} borderRadius={'.5em 0 0 .5em'} bg={isSelected?'gray.100':'white'}>
                    <Icon as={iconsList[index]} color={isSelected?'blue.400':'black'}/>
                    <Text className="underline-animation" fontWeight={isSelected?400:300}>{product[0]}</Text>
                </Flex>
              )
            })}
          </Box>
          <Box bg='gray.100' width={'700px'} minH={'480px'} p='30px' borderRadius={`${selectedSectionIndex === 0?'0':'.5em'} .5em .5em.5em`}>
              <Box bg='white' className="flex-container"  cursor={'pointer'}  borderColor={'gray.300'} borderWidth={'1px'} borderRadius={'.5em'} p='20px'>
                <Flex alignItems={'center'} gap='10px' >
                    <Icon as={iconsList[selectedSectionIndex]} color={'blue.400'}/>
                    <Text color='black'>{productSections[selectedSectionIndex][0]}</Text>
                </Flex>
                <Text mt='1vh' color='gray.600' fontWeight={300} fontSize={'.8em'} >{t(productSubtitles[selectedSectionIndex])}</Text>

                <Flex alignItems={'center'} gap='7px' color='blue.400' mt='2vh'  onClick={()=> router.push(`${productSections[selectedSectionIndex][1]}`)} > 
                  <Icon as={FiArrowUpRight} mt='.4em'/>
                  <Text mt='1vh' className="underline-animation" fontWeight={300} fontSize={'.9em'} >{t('Learn', {subject_index:selectedSectionIndex})} {productSections[selectedSectionIndex][0]}</Text>
                </Flex>
              </Box>

              {selectedSectionIndex === 0 && <Flex></Flex>}
              {selectedSectionIndex === 1 && <Flex></Flex>}
              {selectedSectionIndex === 2 && 
                <Flex mt='5vh' px='20px' color='black' fontWeight={300} >
                  <Box flex={1}>
                    <Text color='gray.600' fontSize={'.9em'} fontWeight={400}>{t('Platforms')}</Text>
                    
                    {integrationsList.map((integration, index) => (
                      <Flex key={`integration-${index}`} alignItems={'center'} gap='10px' mt='2vh'>
                        <Icon color='gray.700' boxSize={'18px'} as={integration[1]} />
                        <Text>{integration[0]}</Text>
                      </Flex>
                    ))}
                  
                  <Flex className="flex-container"cursor={'pointer'} alignItems={'center'}  gap='7px' color='blue.400' mt='2vh' onClick={()=> router.push('/platforms')} > 
                    <Icon as={FiArrowUpRight} mt='.4em'/>
                    <Text mt='1vh' className="underline-animation" fontWeight={300} fontSize={'.9em'} >{t('More_platforms')}</Text>
                  </Flex>
                  
                  </Box>
                  <Box flex={1}>
                    <Text color='gray.600' fontSize={'.9em'}>{t('Channels')}</Text>
                    {channelsList.map((integration, index) => (
                      <Flex key={`channel-${index}`} alignItems={'center'} gap='10px' mt='2vh'>
                        <Icon color='gray.700' boxSize={'18px'} as={integration[1]} />
                        <Text>{integration[0]}</Text>
                      </Flex>
                    ))}
                  
                  <Flex className="flex-container" alignItems={'center'} cursor={'pointer'} gap='7px' color='blue.400' mt='2vh'  onClick={()=> router.push('/channels')}> 
                    <Icon as={FiArrowUpRight} mt='.4em'/>
                    <Text mt='1vh' className="underline-animation" fontWeight={300} fontSize={'.9em'} >{t('More_channels')}</Text>
                  </Flex>

                  </Box>
                </Flex>}

          </Box>
      </Flex>
    )
  }

  return(
    <Box position='relative' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> 

      <Flex alignItems={'center'} fontWeight={500} cursor={'pointer'}   gap='5px' color={blackTextSections.includes(pathname) ?isHovering?'gray.600': 'black': isHovering?'gray.200':'white'}>
        <Text onClick={()=>{if (section !== 'Product') router.push(`/${section.toLowerCase()}`) }} >{t(section)}</Text>
        {section === 'Product' && <IoIosArrowDown className={isHovering ? "rotate-icon-up" : "rotate-icon-down"}/>}
      </Flex>

          {(isHovering && section === 'Product') && <>

            <MotionBox initial={{ opacity: 0, top:40 }} animate={{ opacity: 1, top:20}} exit={{ opacity: 0, top:40}}  transition={{ delay: .2, duration: 0.3,  ease: [0.0, 0.9, 0.9, 1.0],   opacity: {delay: .2, duration: 0.4}}}
             position='absolute'  zIndex={99} >
              <Triangle  direction={"top"} backgroundColor="#FFFFFF" color="#FFFFFF" />
            </MotionBox>

            <MotionBox initial={{ opacity: 0, top:70 }} animate={{ opacity: 1, top:30}}    exit={{ opacity: 0, top:70}}  transition={{ duration: 0.3,  ease: [0.0, 0.9, 0.9, 1.0],   opacity: {duration: 0.4}}}
                style={{ transformOrigin: 'top' }}  zIndex={98} position='absolute' ml='-10vw' bg='white' p='20px' boxShadow='0 0 10px 1px rgba(0, 0, 0, 0.15)'  borderRadius='.5rem' >
                <SectionSelect/>
            </MotionBox>
          </>}
 
    </Box>
)}



const Header=({isComputerWidth}:{isComputerWidth:boolean})=>{

  //ROUNTING AND TRANSLATION CONSTANTS
  const router = useRouter()
  const t = useTranslations('Header')

  //SECTIONS THAT HAS A WHITE BACKGROUND AND THE HEADER TEXT WILL BE BLACK
  const pathname = router.pathname
  const blackTextSections = ['/matilda', '/super-service', '/integrations', '/channels', '/platforms']

  //MOTION BOX
  const MotionFlex = motion(Box)
 
  
    
  //SHOW THE MENU IF IS A MOBILE DEVICE
  const [showMenu, setShowMenu] = useState<boolean>(false)
  
  return( 
      <Flex width={'100vw'} justifyContent={'center'} position={'absolute'} top={0} left={0} zIndex={1000000}> 
          <Flex color={blackTextSections.includes(pathname)?'black':'white'} px={{ base: '20px', sm: '30px', md: '50px' }}width={'100%'} maxW='1200px' height='8vh' justifyContent='space-between' alignItems='center'  >
          
              <Flex gap='10px' alignItems={'center'}onClick={()=> router.push('/') } cursor={'pointer'}  fontSize='xl' fontWeight={500} >
                  <Image height={'20px'} src='/images/Isotipo.svg'/>
                  <Text mt='4px'> MATIL </Text>
              </Flex>

              {isComputerWidth ? <>
                <Flex gap='4vw' alignItems={'center'}> 
                  <HeaderSection t={t} router={router} section={'Product'}/>
                  <HeaderSection t={t} router={router} section={'Pricing'}/>
                  <HeaderSection t={t} router={router} section={'Solutions'}/>
                  <HeaderSection t={t} router={router} section={'Contact'}/>
                </Flex>

                <Flex gap='2vw' > 
                  <Flex gap='16px' bg={blackTextSections.includes(pathname)?'black':'white'} color={blackTextSections.includes(pathname)?'white':'black'} py='5px' px='15px' borderRadius={'2rem'} cursor='pointer' alignItems={'center'}  _hover={{color:'gray.500'}}   onClick={() => window.open('https://superservice.matil.es/', '_blank')}> 
                      <Text fontWeight={400} >{t('Sign in')}</Text>
                      <Flex alignItems={'center'}  > 
                        <Icon position="absolute" as={IoIosArrowForward} boxSize={'16px'} transition="margin-left 0.1s ease-in-out"  marginLeft={"-15px"} />
                      </Flex>
                  </Flex>
                  <LanguageSwitcher/>
                </Flex></>:

              <Icon aria-label='menu' as={RxHamburgerMenu} boxSize={8} cursor='pointer' color={'brand.clear_black'} onClick={()=>setShowMenu(true)}/>
              }
            
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

        </Flex>
       </Flex>
    )
}

export default Header

 
