//REACT
import React, {useState, useEffect, useRef, RefObject} from 'react'
import { useRouter } from 'next/router';

//FRONT
import { Box, Flex, Text, Icon, Image } from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import Triangle from '../Widgets/Trianglebox'

import { RxHamburgerMenu } from "react-icons/rx"
import { IoIosArrowForward } from "react-icons/io"
import { IoMail, IoPerson } from "react-icons/io5"
import { FaArrowTrendUp } from "react-icons/fa6"
import { RiCustomerServiceFill } from "react-icons/ri"
import { FaPlug } from "react-icons/fa6"
import { BsChatDotsFill, BsPeopleFill } from "react-icons/bs"
import { HiPresentationChartLine } from "react-icons/hi"
import { RxCross2 } from "react-icons/rx"
import { FaRobot } from "react-icons/fa6"
import { RiComputerFill } from "react-icons/ri"

import '../../app/globals.css'


interface HeaderProps {
    isComputerWidth: boolean
}

const Header=({isComputerWidth}:HeaderProps)=>{

  const MotionBox = motion(Box)

  const [isHoveringButton,setIsHoveringButton] = useState(false)
  
  //Leer los cambios en el tamaño de la pantalla, actualizar las variables y detectar si se trata de una pantalla pequeña
  const [showMenu, setShowMenu] = useState(false)
  
  //Logica de hoverear las cajas
  const header1Ref = useRef<HTMLDivElement>(null)
  const header2Ref = useRef<HTMLDivElement>(null)
  const header3Ref = useRef<HTMLDivElement>(null)

  const [activeBox, setActiveBox] = useState(0)
  const [hoverState, setHoverState] = useState(false)
  const box1Ref = useRef<HTMLDivElement>(null)
  const box2Ref = useRef<HTMLDivElement>(null)
  const box3Ref = useRef<HTMLDivElement>(null)
  const [triangleLeft, setTriangleLeft] = useState(0)
  const [boxSize, setBoxSize] = useState<{width:number, height:number, x:number, y:number} | null>(null)
  const [lastTrianglePosition, setLastTrianglePosition] = useState(0)
  const { pathname } = useRouter()
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0)

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    if (activeBox === 1) setTriangleLeft((header1Ref?.current?.getBoundingClientRect().left || 0) + ((header1Ref?.current?.getBoundingClientRect().right || 0) - (header1Ref?.current?.getBoundingClientRect().left || 0))/2 - 10)
    else if (activeBox === 2) setTriangleLeft((header2Ref?.current?.getBoundingClientRect().left || 0) + ((header2Ref?.current?.getBoundingClientRect().right || 0) - (header2Ref?.current?.getBoundingClientRect().left || 0))/2 - 10)
    else if (activeBox === 3) setTriangleLeft((header3Ref?.current?.getBoundingClientRect().left || 0)+ ((header3Ref?.current?.getBoundingClientRect().right || 0) - (header3Ref?.current?.getBoundingClientRect().left || 0))/2 - 10)
    if (triangleLeft) setLastTrianglePosition(triangleLeft)
  }, [activeBox, triangleLeft])

  const updateBoxSize = (boxRef:RefObject<HTMLDivElement>) => {
    if (boxRef.current) {
      const { width, height, x, y } = boxRef.current.getBoundingClientRect()
      setBoxSize({ width, height, x, y })
    }}  
  
  //NAVEGAR A LAS DISTINTAS SECCIONES
  const handleClickSection = (section:string) =>{setActiveBox(0);setShowMenu(false);setHoverState(false)}
 
    
  if (typeof window !== 'undefined') window.addEventListener('scroll', ()=>{setHoverState(false); setActiveBox(0);setBoxSize(null);setWindowWidth(window.innerWidth)})


  return(<> 
      <Flex width={'100vw'} justifyContent={'center'}> 
        <Flex  px={{ base: '20px', sm: '30px', md: '50px' }} ml={`${windowWidth > 1200 ? (windowWidth - 1200)/2:0}px` }  maxW='1200px'  color={pathname == '/' ?'white':'brand.clear_black'} height='8vh' className='header' justifyContent='space-between' alignItems='center'  >
          <Flex gap='10px' alignItems={'center'} color={pathname == '/' ?'white':'brand.clear_black'} onClick={()=>{handleClickSection('')}} cursor={'pointer'}  fontSize='xl' fontWeight='bold' >
            <Image height={'20px'} src='/images/Isotipo.svg'/>
            <Text mt='4px'> MATIL </Text>
          </Flex>
          
          {isComputerWidth?<>
            <Box onMouseLeave={() => {setHoverState(false); setActiveBox(0);setBoxSize(null)}}> 

            <Flex fontWeight='medium' cursor='pointer'  paddingBottom={'10vh'} mt='10vh' > 
                <Box ref={header1Ref} _hover={{color:pathname == '/' ?'gray.200':'gray.500'}} px='2vw' onMouseEnter={() => { setActiveBox(1); setHoverState(true);setTimeout(() => updateBoxSize(box1Ref), 210)}}> 
                  <Text>Productos</Text>
                </Box>
                <Box ref={header2Ref} _hover={{color:pathname == '/' ?'gray.200':'gray.500'}} px='2vw' onMouseEnter={() => { setActiveBox(2); setHoverState(true);setTimeout(() => updateBoxSize(box2Ref), 210)}}>
                  <Text>Soluciones</Text>
                </Box>
                <Box ref={header3Ref} _hover={{color:pathname == '/' ?'gray.200':'gray.500'}} px='2vw' onMouseEnter={() => { setActiveBox(3); setHoverState(true);setTimeout(() => updateBoxSize(box3Ref), 210)}}>
                  <Text>Quienes somos</Text>
                </Box>
              
                <Box  _hover={{color:pathname == '/' ?'gray.200':'gray.500'}} px='2vw' onMouseEnter={() => { setActiveBox(0); setHoverState(false);setBoxSize(null)}} onClick={()=>{handleClickSection('contacto')}}>
                  <Text>Contacto</Text>
                </Box>
        
              <Box position={'fixed'} left={0} top={0}  > 
              {activeBox !== 0 && (
                <motion.div initial={boxSize && boxSize.width ? { left: lastTrianglePosition } : { opacity: 0 }} animate={boxSize && boxSize.width ? { left: triangleLeft } : { opacity: 1 }}transition={{ duration: 0.2, ease: "easeInOut" }}style={{ position: 'absolute', top: '8vh', left: triangleLeft,zIndex:1100 }}>
                  <Triangle direction={"top"} backgroundColor="#FFFFFF" color="#FFFFFF" />
                </motion.div>)}
                {activeBox === 1 && (
              <motion.div ref={box1Ref} onMouseEnter={() => setHoverState(true)}   initial={boxSize?{ width: boxSize.width, height: boxSize.height, x: boxSize.x, y: boxSize.y}:{ opacity: 0,  transform: `translateX(${header1Ref?.current?.getBoundingClientRect().left}px) translateY(9vh) skew(4deg, 0)`,width: '580px', height: '310px', x: triangleLeft - 100, y: '9vh' }} animate={boxSize?{opacity: 1,width: '580px', height: '310px', x: triangleLeft - 100, y: '9vh' }:{opacity: 1, transform:`translateX(${header1Ref?.current?.getBoundingClientRect().left}px) translateY(9vh) skew(0, 0)`,width: '580px', height: '310px', x: triangleLeft - 100, y: '9vh' }} transition={{ duration: .2, ease: "easeInOut" }}style={{ boxShadow:'0 0 10px 1px rgba(0, 0, 0, 0.15)', background:'white' ,position: 'absolute', overflow: 'hidden',zIndex:1000, borderRadius:'.6rem'}}>
                <Box bg='white'  color='black' p='40px'  >
                  <AnimatePresence>
                  <motion.div initial={{translateX:boxSize?'200px':'', opacity: 1 }} animate={{ translateX:'0px',   opacity: 1 }} exit={{  opacity: 0}} transition={{ duration: 0.2, ease: "easeInOut" }}>         
                    <Flex gap='40px'> 
                      <Box overflow={'hidden'} width={'250px'}> 
                        <Box height={'20px'}> 
                          <Text fontWeight={'medium'} color='gray.500' >PLATAFORMAS</Text>
                        </Box>
                        <Flex  width={'230px'} mt='10px' gap='10px'  cursor={'pointer'} _hover={{bg:'gray.50', color:'brand.clear_black'}} p='15px' borderRadius={'1rem'} color='gray.400'  onClick={()=>{handleClickSection('super-service')}}> 
                            <Icon  mt='2px' as={IoPerson} boxSize={'18px'}/>
                            <Box> 
                              <Text color='brand.clear_black' fontSize={'md'} >SuperService</Text>
                              <Text >Atención al cliente rápida y personalizada</Text>
                            </Box>
                        </Flex>
                        <Flex  width={'230px'} mt='10px' gap='10px'  cursor={'pointer'} _hover={{bg:'gray.50', color:'brand.clear_black'}} p='15px' borderRadius={'1rem'} color='gray.400'  onClick={()=>{handleClickSection('super-sale')}}> 
                            <Icon  mt='2px' as={FaArrowTrendUp} boxSize={'18px'}/>
                            <Box> 
                              <Text  color='brand.clear_black' fontSize={'md'} >SuperSale</Text>
                              <Text >Conversión y administración de leads</Text>
                            </Box>
                        </Flex>
                        </Box>   
                        <Box overflow={'hidden'}  width={'250px'}>
                          <Flex   width={'230px'} mt='30px' gap='10px'  cursor={'pointer'} _hover={{bg:'gray.50', color:'brand.clear_black'}} p='15px' borderRadius={'1rem'} color='gray.400'  onClick={()=>{handleClickSection('super-blitz')}}> 
                              <Icon  mt='2px' as={IoMail} boxSize={'18px'}/>
                              <Box> 
                                <Text color='brand.clear_black' fontSize={'md'} >SuperBlitz</Text>
                                <Text>Lanzamiento de conversaciones en masa</Text>
                              </Box>
                          </Flex>
                        </Box>
                    </Flex>
                  </motion.div>
                  </AnimatePresence>
                </Box>
                </motion.div>
                )}
                {activeBox === 2 && (
                <motion.div ref={box2Ref} initial={boxSize?{ width: boxSize.width, height: boxSize.height, x: boxSize.x, y: boxSize.y}:{ opacity: 0,  transform: `translateX(${(header2Ref.current?.getBoundingClientRect().left || 0) + ((header2Ref?.current?.getBoundingClientRect().right || 0) - (header2Ref?.current?.getBoundingClientRect().left || 0))/2 - 220}px) translateY(9vh) skew(4deg, 0)`,width: '460px', height: '290px', x: triangleLeft - 220, y: '9vh'}} animate={boxSize?{opacity: 1,width: '460px', height: '290px', x: triangleLeft - 220, y: '9vh' }:{opacity: 1, transform:`translateX(${(header2Ref?.current?.getBoundingClientRect().left || 0) + (header2Ref?.current?.getBoundingClientRect().right || 0) - (header2Ref?.current?.getBoundingClientRect().left || 0)/2 - 220}px) translateY(9vh) skew(0, 0)`,width: '460px', height: '290px', x: triangleLeft - 220, y: '9vh' }} transition={{ duration: .2, ease: "easeInOut" }}style={{ background:'white', boxShadow:'0 0 10px 1px rgba(0, 0, 0, 0.15)', position: 'absolute', overflow: 'hidden',zIndex:1000, borderRadius:'.6rem'}}>
                  <Box bg='white'  color='black' p='40px' onMouseEnter={() => setHoverState(true)} >
                  <AnimatePresence>
                  <motion.div initial={{translateX:boxSize?boxSize.x < (header1Ref?.current?.getBoundingClientRect().left || 0)?'-50px':'50px':'' }}  animate={{ translateX:'0px',   opacity: 1 }} exit={{opacity: 0}}transition={{ duration:.2, ease: "easeInOut" }}>         
                    <Flex gap='40px' > 
                      <Box > 
                          <Text fontWeight={'medium'} color='gray.500' >CASOS DE USO</Text>
                          <Flex alignItems={'center'}  gap='10px'  mt='10px' cursor={'pointer'}_hover={{bg:'gray.50', color:'brand.clear_black'}} p='15px' borderRadius={'1rem'} color='gray.400' > 
                              <Icon as={RiCustomerServiceFill} boxSize={'18px'}/>
                              <Text whiteSpace={'nowrap'} color='brand.clear_black' fontSize={'md'} onClick={()=>{handleClickSection('atención-cliente-uso')}} >Atención al cliente</Text>
                          </Flex>
                          <Flex alignItems={'center'}  gap='10px'  mt='10px' cursor={'pointer'}_hover={{bg:'gray.50', color:'brand.clear_black'}} p='15px' borderRadius={'1rem'} color='gray.400' onClick={()=>{handleClickSection('ventas-uso')}}  > 
                              <Icon as={HiPresentationChartLine} boxSize={'18px'}/>
                              <Text whiteSpace={'nowrap'}color='brand.clear_black' fontSize={'md'}  >Ventas</Text>
                          </Flex>
                      </Box>
                      <Box> 
                        <Text fontWeight={'medium'} color='gray.500'>TECNOLOGÍA</Text>
                        <Flex alignItems={'center'} gap='10px' mt='10px' cursor={'pointer'} _hover={{bg:'gray.50', color:'brand.clear_black'}} p='15px' borderRadius={'1rem'} color='gray.400' onClick={()=>{handleClickSection('integraciones')}} > 
                            <Icon as={FaPlug} boxSize={'18px'}/>
                            <Text whiteSpace={'nowrap'}  color='black' fontSize={'md'} >Integraciones</Text>
                        </Flex>
                        <Flex alignItems={'center'}  gap='10px' mt='10px' cursor={'pointer'}_hover={{bg:'gray.50', color:'brand.clear_black'}} p='15px' borderRadius={'1rem'} color='gray.400' onClick={()=>{handleClickSection('canales')}} > 
                            <Icon as={BsChatDotsFill} boxSize={'18px'}/>
                            <Text  whiteSpace={'nowrap'} color='black' fontSize={'md'}>Canales</Text>
                        </Flex>
            
                      <Flex mt='10px' gap='10px'  cursor={'pointer'}_hover={{bg:'gray.50', color:'brand.clear_black'}} p='15px' borderRadius={'1rem'} color='gray.400'  onClick={()=>{handleClickSection('matilda')}}> 
                            <Icon as={FaRobot} boxSize={'18px'}/>
                              <Text color='brand.clear_black' fontSize={'md'}  >MATILDA</Text>
                        </Flex>
                      </Box>
                      </Flex>
                    </motion.div>
                    </AnimatePresence>
                  </Box>
                </motion.div>
                )}
                {activeBox === 3 && (
                  <motion.div ref={box3Ref} initial={boxSize?{ width: boxSize.width, height: boxSize.height, x: boxSize.x, y: boxSize.y}:{ opacity: 0,  transform: `translateX(${(header3Ref?.current?.getBoundingClientRect().left || 0) + ((header3Ref?.current?.getBoundingClientRect().right || 0) - (header3Ref?.current?.getBoundingClientRect().left || 0))/2 - 120}px) translateY(9vh) skew(8deg, 0)`,width: '240px', height: '125px', x: triangleLeft - 110, y: '9vh' }} animate={boxSize?{opacity: 1,width: '240px', height: '125px', x: triangleLeft - 110, y: '9vh' }:{opacity: 1, transform:`translateX(${(header3Ref?.current?.getBoundingClientRect().left || 0) + ( (header3Ref?.current?.getBoundingClientRect().right || 0) - (header3Ref?.current?.getBoundingClientRect().left || 0))/2 - 120}px) translateY(9vh) skew(0, 0)`,width: '240px', height: '125px', x: triangleLeft - 110, y: '9vh' }} transition={{ duration: .2, ease: "easeInOut" }} style={{ background:'white', boxShadow:'0 0 10px 1px rgba(0, 0, 0, 0.15)', position: 'absolute', overflow: 'hidden',zIndex:1000, borderRadius:'.6rem'}}>
                  <Box bg='white' color='black' p='40px'  onMouseEnter={() => setHoverState(true)} >
                      <AnimatePresence>
                        <motion.div initial={{translateX:boxSize?'-50px':'' }}  animate={{ translateX:'0px',   opacity: 1 }} exit={{opacity: 0}}transition={{ duration:.2, ease: "easeInOut" }}>         
                            <Flex alignItems={'center'}  gap='10px'  cursor={'pointer'}_hover={{bg:'gray.50', color:'brand.clear_black'}} p='15px' borderRadius={'1rem'} color='gray.400'  onClick={()=>{handleClickSection('nosotros')}}> 
                                <Icon as={BsPeopleFill}  boxSize={'18px'}/>
                                <Text whiteSpace={'nowrap'}color='brand.clear_black' fontSize={'md'}  >Sobre nosotros</Text>
                            </Flex>
                        </motion.div>
                      </AnimatePresence>
                    </Box>
                  </motion.div>
        
                )}
                
              </Box>
            </Flex>
            </Box>
            <Flex gap='16px' bg={pathname == '/' ?'white':'brand.clear_black'}  py='5px' px='15px' borderRadius={'2rem'} cursor='pointer' alignItems={'center'}  _hover={{color:pathname == '/' ?'rgba(0, 123, 255)':'gray.500'}}   onClick={() => { console.log('https://delsol.matil.es')}} > 
                <Text   onMouseEnter={()=>{setIsHoveringButton(true)}} onMouseLeave={()=>{setIsHoveringButton(false)}} color={pathname == '/' ?'rgba(0, 123, 255)':'white'} fontWeight={'medium'}>Iniciar sesión</Text>
                <Flex alignItems={'center'}  > 
                  <Box position="absolute" height="2px" backgroundColor={pathname == '/' ?'rgba(0, 123, 255)':'white'} width={isHoveringButton ? "8px" : "0"} marginLeft='-10px' transition="width 0.1s ease-in-out" />
                  <Icon color={pathname == '/' ?'rgba(0, 123, 255)':'white'}  position="absolute" as={IoIosArrowForward} boxSize={'16px'} transition="margin-left 0.1s ease-in-out"  marginLeft={isHoveringButton ? "-11px" : "-15px"} />
              </Flex>
            </Flex>
            </>
          : 
          <Icon aria-label='menu' as={RxHamburgerMenu} boxSize={8} cursor='pointer' color={pathname == '/' ?'white':'brand.clear_black'}  _hover={{bg:'transparent'}} onClick={()=>setShowMenu(true)}/>}
        </Flex>
      </Flex>
      {/* DESPLEGAR CAJAS AL HOVEREAR HEADER Y SU LÓGICA */}
      {(showMenu && !isComputerWidth) &&
      <Box position={'fixed'} width={'100vw'} height={'100vh'} bg='rgba(0, 0, 0, 0.2)' backdropFilter={'blur(1px)'} onMouseDown={() => setShowMenu(false)} zIndex={10000}> 
        <MotionBox onMouseDown={(e)=>{e.stopPropagation()}}   bg='white' boxShadow={'0 0 10px 1px rgba(0, 0, 0, 0.15)'} zIndex={10000} position={'fixed'} top={'2vh'} left={'2vw'} borderRadius={'1rem'} width={{base:'96vw', sm:'96vw',md:'60vw'}}  p='10px'  initial={{ opacity: 0 }} animate={{ opacity: 1}} exit={{ opacity: 0}} transition={{ duration: 0.5 }} >
         
          <Flex p='10px'   justifyContent={'space-between'} alignItems={'center'}>
            <Text>MATIL</Text>
            <Icon as={RxCross2} onClick={()=>setShowMenu(false)} cursor={'pointer'}/>
          </Flex>

          <Box maxH='80vh' overflow={'scroll'} > 
            <Box    p='10px' mt='10x' bg='gray.50' borderRadius={'.5rem'}>
                <Text fontWeight={'medium'}  color='brand.clear_black' >PRODUCTOS</Text>
                <Text fontWeight={'medium'} color='gray.500' fontSize={'.9em'} mt='10px' >PLATAFORMAS</Text>
                <Flex mt='10px' gap='10px'  cursor={'pointer'}  onClick={()=>{handleClickSection('super-service')}}  _hover={{bg:'gray.100', color:'brand.clear_black'}} p='15px' borderRadius={'1rem'} color='gray.400' > 
                    <Icon as={IoPerson} boxSize={'18px'} />
                    <Box> 
                      <Text color='brand.clear_black' fontSize={'md'} >SuperService</Text>
                      <Text >Atención al cliente rápida y personalizada</Text>
                    </Box>
                </Flex>
                <Flex mt='10px' gap='10px'  cursor={'pointer'}  onClick={()=>{handleClickSection('super-sale')}}_hover={{bg:'gray.100', color:'brand.clear_black'}} p='15px' borderRadius={'1rem'} color='gray.400' > 
                    <Icon as={FaArrowTrendUp} boxSize={'18px'}  />
                    <Box> 
                      <Text color='brand.clear_black' fontSize={'md'} >SuperSale</Text>
                      <Text >Conversión y administración de leads</Text>
                    </Box>
                </Flex>
                <Flex mt='10px' gap='10px'  cursor={'pointer'} onClick={()=>{handleClickSection('super-blitz')}} _hover={{bg:'gray.100', color:'brand.clear_black'}} p='15px' borderRadius={'1rem'} color='gray.400' > 
                    <Icon as={IoMail} boxSize={'18px'}   />
                    <Box> 
                      <Text color='brand.clear_black' fontSize={'md'} >SuperBlitz</Text>
                      <Text >Lanzamiento de conversaciones en masa</Text>
                    </Box>
                </Flex>
            </Box>

            <Box p='10px' mt='10px'  bg='gray.50' borderRadius={'.5rem'}>
              <Text fontWeight={'medium'}  color='brand.clear_black' >QUIENES SOMOS</Text>
                  <Flex mt='10px' alignItems={'center'}  gap='10px'  cursor={'pointer'}_hover={{bg:'gray.100', color:'brand.clear_black'}} p='15px' borderRadius={'1rem'} color='gray.400'  onClick={()=>{handleClickSection('nosotros')}}> 
                      <Icon as={BsPeopleFill}  boxSize={'18px'}/>
                    <Text whiteSpace={'nowrap'}color='brand.clear_black' fontSize={'md'}  >Sobre nosotros</Text>
                </Flex>
          
              </Box>
      
              <Box p='10px' mt='10px'  bg='gray.50' borderRadius={'.5rem'}>
              <Text fontWeight={'medium'}  color='brand.clear_black' >SOLUCIONES</Text>
              <Text fontWeight={'medium'} color='gray.500' fontSize={'.9em'} mt='10px' >CASOS DE USO</Text>
              <Flex fontSize={'md'} onClick={()=>{handleClickSection('atención-cliente-uso')}}  alignItems={'center'}  gap='10px'  mt='10px' cursor={'pointer'}_hover={{bg:'gray.100', color:'brand.clear_black'}} p='15px' borderRadius={'1rem'} color='gray.400' > 
                  <Icon as={RiCustomerServiceFill} boxSize={'18px'}/>
                  <Text whiteSpace={'nowrap'} color='brand.clear_black'  >Atención al cliente</Text>
              </Flex>
              <Flex alignItems={'center'}  gap='10px'  cursor={'pointer'}_hover={{bg:'gray.100', color:'brand.clear_black'}} p='15px' borderRadius={'1rem'} color='gray.400' onClick={()=>{handleClickSection('ventas-uso')}}  > 
                  <Icon as={HiPresentationChartLine} boxSize={'18px'}/>
                  <Text whiteSpace={'nowrap'}color='brand.clear_black' fontSize={'md'}  >Ventas</Text>
              </Flex>
              <Text fontWeight={'medium'} color='gray.500'  fontSize={'.9em'} mt='10px'>TECNOLOGÍA</Text>

                <Flex  mt='10px'alignItems={'center'} gap='10px' cursor={'pointer'} _hover={{bg:'gray.100', color:'brand.clear_black'}} p='15px' borderRadius={'1rem'} color='gray.400' onClick={()=>{handleClickSection('integraciones')}} > 
                    <Icon as={FaPlug} boxSize={'18px'}/>
                    <Text whiteSpace={'nowrap'}  color='black' fontSize={'md'} >Integraciones</Text>
                </Flex>
                <Flex alignItems={'center'}  gap='10px'  cursor={'pointer'}_hover={{bg:'gray.100', color:'brand.clear_black'}} p='15px' borderRadius={'1rem'} color='gray.400' onClick={()=>{handleClickSection('canales')}} > 
                    <Icon as={BsChatDotsFill} boxSize={'18px'}/>
                    <Text  whiteSpace={'nowrap'} color='black' fontSize={'md'}>Canales</Text>
                </Flex>
                <Flex  gap='10px'  cursor={'pointer'}_hover={{bg:'gray.100', color:'brand.clear_black'}} p='15px' borderRadius={'1rem'} color='gray.400' onClick={()=>{handleClickSection('matilda')}}  > 
                      <Icon as={FaRobot} boxSize={'18px'}/>

                        <Text color='brand.clear_black' fontSize={'md'}  >MATILDA</Text>

                  </Flex>

            </Box>
          </Box>
        </MotionBox>
        </Box>}
  
    </>)
}

export default Header

 
