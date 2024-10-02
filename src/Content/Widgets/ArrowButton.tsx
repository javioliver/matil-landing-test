import React, {useState} from 'react'

import { Flex, Text, Box, Icon } from '@chakra-ui/react'
import {IoIosArrowForward} from 'react-icons/io'


const ArrowButton = ({onClick, text, isDisabled=false, bg, color, hover, fontSize}:{onClick:any, text:string, isDisabled?:boolean, bg:string, color:string, hover:{bg:string, color:string}, fontSize?:any}) =>{

    const [isHoveringButton, setIsHoveringButton] = useState(false)
    return(
    <Flex gap='16px'display={'inline-flex'}  alignItems={'center'} justifyContent={'center'}  onClick={onClick} onMouseEnter={()=>{setIsHoveringButton(true)}} onMouseLeave={()=>{setIsHoveringButton(false)}} color={isHoveringButton?hover.color:color}  bg={isHoveringButton?hover.bg:bg} px='12px'  py='5px'  borderRadius={'1.5rem'} cursor='pointer' > 
        <Text fontWeight={400} fontSize={fontSize}>{text}</Text>
        <Flex alignItems={'center'} mt='1px' > 
            <Icon position="absolute" as={IoIosArrowForward} boxSize={'14px'} transition="margin-left 0.1s ease-in-out"  marginLeft={isHoveringButton ? "-7px" : "-13px"} />
        </Flex>
    </Flex>
    )
}

export default ArrowButton