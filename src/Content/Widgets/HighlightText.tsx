import React from 'react'
import { Box, Text} from '@chakra-ui/react'

const HighlightText = ({ text, color1='gray.300', color2='cyan.400', bold=false, center=false }) => {
    const parts = text.split('/').map((part, index) => {
        if (index % 2 === 1) { 
          return <Text as="span" fontWeight={bold?'medium':'normal'} color={color2} key={index}>{part}</Text>
        } else {
          return <Text as="span" color={color1}  key={index}>{part}</Text>
        }
    })
    return <Box textAlign={center?'center':null}>{parts}</Box>
  }

export default HighlightText