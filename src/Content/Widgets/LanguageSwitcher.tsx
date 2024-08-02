//TRANSLATION
import { useTranslation } from 'react-i18next'
//REACT
import { useRef, useState, CSSProperties } from 'react'
//FRONT
import { Flex, Text, Box, Portal } from "@chakra-ui/react"
import { motion } from 'framer-motion'
//FUNCTIONS
import determineBoxStyle from './determineBoxStyle'
//ICONS
import { IoIosArrowDown } from 'react-icons/io'

const LanguageSwitcher = () => {
    const { i18n } = useTranslation()

    console.log(i18n)
    const MotionBox = motion(Box)

    const selectorRef = useRef<HTMLDivElement>(null)
    const [showList, setShowList] = useState<boolean>(false)

    const changeLanguage = (lng: string) => {
      i18n.changeLanguage(lng)
    }
  
    const [boxStyle, setBoxStyle] = useState<CSSProperties>({})
    determineBoxStyle({buttonRef:selectorRef, setBoxStyle, changeVariable:showList})


    return (
    <Box position={'relative'}>

        <Flex cursor={'pointer'} alignItems={'center'} ref={selectorRef} height={'37px'} fontSize={'.9em'}  onClick={()=> setShowList(!showList)} border={showList ? "3px solid rgb(77, 144, 254)": "1px solid #CBD5E0"} justifyContent={'space-between'} px={showList?'5px':'7px'} py={showList ? "5px" : "7px"} borderRadius='.5rem' _hover={{border:showList?'3px solid rgb(77, 144, 254)':'1px solid #CBD5E0'}}>
            <Text   whiteSpace={'nowrap'} textOverflow={'ellipsis'} overflow={'hidden'}>ES</Text>
            <IoIosArrowDown className={showList ? "rotate-icon-up" : "rotate-icon-down"}/>
        </Flex>
        
        {showList && 
            <Portal>
                <MotionBox initial={{ opacity: 0, marginTop: -10}} animate={{ opacity: 1, marginTop: 0 }}  exit={{ opacity: 0,marginTop: -10}} transition={{ duration: 0.2,  ease: [0.0, 0.9, 0.9, 1.0],   opacity: {duration: 0.2,  ease: [0.0, 0.9, 0.9, 1.0]}}}
                top={boxStyle.top} bottom={boxStyle.bottom}right={boxStyle.right} width={boxStyle.width} maxH='40vh' overflow={'scroll'} gap='10px' fontSize={'.9em'} boxShadow={'0px 0px 10px rgba(0, 0, 0, 0.2)'} bg='white' zIndex={100000}   position={'absolute'} borderRadius={'.3rem'} borderWidth={'1px'} borderColor={'gray.300'}>
                        <Flex  px='10px'   py='7px' cursor={'pointer'} justifyContent={'space-between'} alignItems={'center'}_hover={{bg:'brand.hover_gray'}} onClick={() => changeLanguage('es')}>
                            <Text>ES</Text>
                        </Flex>
                        <Flex  px='10px'   py='7px' cursor={'pointer'} justifyContent={'space-between'} alignItems={'center'}_hover={{bg:'brand.hover_gray'}} onClick={() => changeLanguage('en')}>
                            <Text>EN</Text>
                        </Flex>
                </MotionBox>
            </Portal>
        }
    </Box>)
}

export default LanguageSwitcher