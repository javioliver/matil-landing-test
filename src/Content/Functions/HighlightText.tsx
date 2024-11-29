import React from 'react'
import { Box, Text} from '@chakra-ui/react'

const HighlightText = ({ text, color1='gray.300', color2='cyan.400', fontSize, bold=false, center=false, fontWeight, clickFunc }:{ text:string, color1?:string, color2?:string,fontSize?:any, bold?:boolean, center?:boolean,  fontWeight?:number,clickFunc?:any  }) => {
    
 
    return (
    <span>
        {text.split('/').map((part, index) => {
            if (index % 2 === 1) return <span key={`span-${index}`} style={{fontSize:fontSize, color:color2, fontWeight:bold?500:400, cursor:clickFunc?'pointer':'auto' }} onClick={() => {if (clickFunc) clickFunc()}} >{part}</span>
            else return <span  key={`span-${index}`} style={{fontSize:fontSize, color:color1, fontWeight:fontWeight?fontWeight:'400'}}>{part}</span>
        })}
    </span>
    )
  }

export default HighlightText