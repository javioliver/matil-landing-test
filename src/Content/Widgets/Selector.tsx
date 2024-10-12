import React from 'react'
import { Box, Flex, Text, Select } from '@chakra-ui/react'

const NormalSelector = ({value, setValue, field, selectorList, mt=null}:{value:string, setValue:any, field:any, selectorList:any, mt:string | null}) => {
 
   
 
   
    return (
 
        <Flex mt={mt as string} flexDir={{base:'column',sm:'column', md:'row'}} justifyContent={{md:'space-between'}} alignItems={{sm:'normal', md:'center'}}>
            <Text as='label' htmlFor={`${field}-selector`}  color={'brand.clear_black'} fontWeight={'medium'} fontSize={'xs'}>{field}</Text>
            <Box mt={{base:'5px',sm:'5px', md:'0'}} width={{base:'100%', sm:'100%', md:'200px', xl:'300px'}}position="relative">
                <Select fontWeight={300}  id={`${field}-selector`} value={value} onChange={(e)=>{setValue(e.target.value)}} border={'none'} size='sm' borderRadius = '.3rem' bg='brand.gray_1'>
                {selectorList.map((option:any, index:number) => (
                    <option key={index} value={option}>{option}</option>
                ))}
                </Select>
            </Box> 
            </Flex>
 
    );
};

export default NormalSelector
