import React, {useState} from 'react'

import { Flex, Text, Box, Icon } from '@chakra-ui/react'
import {IoIosArrowForward} from 'react-icons/io'


const ArrowButton = ({onClick, text, isDisabled=false, bg, bgGradient, color, hover, fontSize, border, borderRadius}:{onClick:any, text:string, isDisabled?:boolean, bg?:string, bgGradient?:string,  color?:string, hover:{bg:string, color:string}, fontSize?:any, border?:string, borderRadius?:string},) =>{

    const [isHoveringButton, setIsHoveringButton] = useState(false)
    return(
    <Flex gap='16px' border={border?border:''} maxW='fit-content'alignItems={'center'} justifyContent={'center'}  onClick={onClick} onMouseEnter={()=>{setIsHoveringButton(true)}} onMouseLeave={()=>{setIsHoveringButton(false)}} color={color?isHoveringButton?hover.color:color:''} bgGradient={bgGradient?isHoveringButton?hover.bg:bgGradient:''}  bg={bg?isHoveringButton?hover.bg:bg:''} px='12px'  py='5px'  borderRadius={borderRadius?borderRadius:'.5rem'} cursor='pointer' > 
        <Text mt='-2px' fontWeight={400} fontSize={fontSize} >{text}</Text>
        <Flex alignItems={'center'} > 
            <Icon position="absolute" as={IoIosArrowForward} transition="margin-left 0.1s ease-in-out"  marginLeft={isHoveringButton ? "-7px" : "-13px"} />
        </Flex>
    </Flex>
    )
}

export default ArrowButton