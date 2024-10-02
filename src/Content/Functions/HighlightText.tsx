import React from 'react'
import { Box, Text} from '@chakra-ui/react'

const HighlightText = ({ text, color1='gray.300', color2='cyan.400', fontSize, bold=false, center=false }:{ text:string, color1?:string, color2?:string,fontSize:any, bold?:boolean, center?:boolean }) => {
    
 
    return (<Text fontSize={fontSize} >
        {text.split('/').map((part, index) => {
            if (index % 2 === 1) return <span style={{fontSize:fontSize, color:color2, fontWeight:bold?500:400 }}>{part}</span>
            else return <span style={{fontSize:fontSize, color:color1}}>{part}</span>
        })}
    </Text>
    )
  }

export default HighlightText