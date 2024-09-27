import React, {useState} from 'react'

import { Flex, Text, Box, Icon } from '@chakra-ui/react'
import {IoIosArrowForward} from 'react-icons/io'


const ArrowButton = ({onClick, text, isDisabled=false, isBlackBackground = false}:{onClick:any, text:string, isDisabled?:boolean, isBlackBackground?:boolean}) =>{

    const [isHoveringButton, setIsHoveringButton] = useState(false)
    return(
    <Flex gap='16px' maxW={'max-content'} alignItems={'center'} borderColor={isBlackBackground?'white':''} borderWidth={isBlackBackground?'1px':'0px'}  justifyContent={'center'}  onClick={onClick} onMouseEnter={()=>{setIsHoveringButton(true)}} onMouseLeave={()=>{setIsHoveringButton(false)}} bg={isBlackBackground?isHoveringButton?'RGBA(0, 0, 0, 0.2)':'transparent':isDisabled?'linear-gradient(to right, rgba(0, 73, 255,0.5), rgba(33, 150, 253,0.5))':isHoveringButton?'linear-gradient(to right, rgba(0, 73, 255), rgba(33, 150, 253))':'linear-gradient(to right, rgba(0, 123, 255), rgba(33, 180, 253))'} py='5px' px='15px' borderRadius={'.6rem'} cursor='pointer'  color='white'  > 
        <Text fontWeight={400}>{text}</Text>
        <Flex alignItems={'center'} mt='1px' > 
            <Icon position="absolute" as={IoIosArrowForward} boxSize={'14px'} transition="margin-left 0.1s ease-in-out"  marginLeft={isHoveringButton ? "-7px" : "-13px"} />
        </Flex>
    </Flex>
    )
}

export default ArrowButton