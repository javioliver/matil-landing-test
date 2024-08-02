import React, { useState, useEffect } from 'react'
import { Box, Input, FormControl, Flex, Text } from '@chakra-ui/react'

const NormalInput = ({placeholder, value, setValue, field, validPattern=null, mt=null}:{placeholder:string, value:string, setValue:any, field:any, validPattern?:any, mt?:null | string}) => {
    const [error, setError] = useState(false)
    const [timer, setTimer] = useState<any>(null)
   
    useEffect(() => {
        return () => {if (timer) clearTimeout(timer)}
    }, [timer])

    const handleChange = (e:any) => {
        const value = e.target.value
        setValue(value)

        if (validPattern) {
        setError(false)
        if (timer) clearTimeout(timer) 
        const newTimer = setTimeout(() => {
            if (value === '') return
            const regex = validPattern
            if (!regex.test(value)) setError(true)
            
        }, 1000)
        setTimer(newTimer)}
    };

    return (
        <FormControl isInvalid={!!error}>
            <Flex mt={mt as string} flexDir={{base:'column',sm:'column', md:'row'}} justifyContent={{base:'space-between',md:'space-between'}}  alignItems={{base:'normal',sm:'normal', md:'center'}}>
                <Text as='label' htmlFor={`${placeholder}-input`}  color={'brand.clear_black'} fontWeight={'medium'} fontSize={'.9em'}>{field}</Text>
                <Box mt={{base:'5px',sm:'5px', md:'0'}} width={{ base:'100%',sm:'100%', md:'200px', xl:'300px'}} position="relative">
                    <Input id={`${placeholder}-input`} onChange={handleChange} value={value} placeholder={placeholder} focusBorderColor={error ? 'red.500' :'transparent'} border={'none'} size='sm' borderRadius = '.3rem' bg='gray.50' borderColor={error ? 'red.500' : 'gray.200'}/>
                </Box> 
            </Flex>
        </FormControl>
    );
};

export default NormalInput
