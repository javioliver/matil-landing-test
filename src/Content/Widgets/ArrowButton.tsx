import React, {useState} from 'react'

import { Flex, Text, Box, Icon } from '@chakra-ui/react'
import {IoIosArrowForward} from 'react-icons/io'


const ArrowButton = ({onClick, text, isDisabled=false}:{onClick:any, text:string, isDisabled?:boolean}) =>{

    const [isHoveringButton, setIsHoveringButton] = useState(false)
    return(
    <Flex gap='16px' maxW={'max-content'} justifyContent={'center'}  onClick={onClick} onMouseEnter={()=>{setIsHoveringButton(true)}} onMouseLeave={()=>{setIsHoveringButton(false)}} bg={isDisabled?'linear-gradient(to right, rgba(0, 73, 255,0.5), rgba(33, 150, 253,0.5))':isHoveringButton?'linear-gradient(to right, rgba(0, 73, 255), rgba(33, 150, 253))':'linear-gradient(to right, rgba(0, 123, 255), rgba(33, 180, 253))'} py='5px' px='15px' borderRadius={'1rem'} cursor='pointer' alignItems={'center'} color='white'  > 
        <Text   fontWeight={'medium'}>{text}</Text>
        <Flex alignItems={'center'}  > 
            <Box position="absolute" height="2px" backgroundColor="white" width={isHoveringButton ? "8px" : "0"} marginLeft='-10px' transition="width 0.1s ease-in-out" />
            <Icon  position="absolute" as={IoIosArrowForward} boxSize={'16px'} transition="margin-left 0.1s ease-in-out"  marginLeft={isHoveringButton ? "-11px" : "-15px"} />
        </Flex>
    </Flex>
    )
}

export default ArrowButton