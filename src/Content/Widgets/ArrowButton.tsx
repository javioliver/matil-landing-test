import React, {useState} from 'react'

import { Flex, Text, Icon } from '@chakra-ui/react'
import {IoIosArrowForward} from 'react-icons/io'


const ArrowButton = ({onClick, text, isDisabled=false, bg, bgGradient, color, hover, fontSize, border, borderRadius, width, shadow}:{onClick:any, text:string, isDisabled?:boolean, bg?:string, bgGradient?:string,  color?:string, hover:{bg:string, color:string}, fontSize?:any, border?:string, borderRadius?:string, width?:string, shadow?:string}) =>{

    const [isHoveringButton, setIsHoveringButton] = useState(false)
    return(
    <Flex gap='16px' shadow={shadow} border={border?border:''} maxW={width ? width:'fit-content'} width={'100%'} alignItems={'center'} justifyContent={'center'}  onClick={() => {if (!isDisabled) onClick()}} onMouseEnter={()=>{setIsHoveringButton(true)}} onMouseLeave={()=>{setIsHoveringButton(false)}} color={color?isHoveringButton?hover.color:color:''} bgGradient={bgGradient?isHoveringButton?hover.bg:bgGradient:''}  opacity={isDisabled? 0.6:1} bg={bg?isHoveringButton?hover.bg:bg:''} px={fontSize === 'lg'?'18px': '12px'}  py={fontSize === 'lg'?'8px': '5px'}   borderRadius={borderRadius?borderRadius:'.5rem'} cursor={isDisabled?'not-allowed':'pointer' }> 
        <Text mt={fontSize === 'lg' ? '-4px':'-2px'} fontWeight={400} fontSize={fontSize} >{text}</Text>
        <Flex alignItems={'center'} > 
            <Icon position="absolute" as={IoIosArrowForward}  boxSize={fontSize === 'lg' ? '20px':'14px'} transition="margin-left 0.1s ease-in-out"  marginLeft={isHoveringButton ? "-7px" : "-13px"} />
        </Flex>
    </Flex>
    )
}

export default ArrowButton