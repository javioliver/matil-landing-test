import React from 'react'
import { Box, Input, FormControl, Text } from '@chakra-ui/react'

const NormalInput = ({placeholder, value, setValue, field, validPattern=null, mt=null}:{placeholder:string, value:string, setValue:any, field:any, validPattern?:any, mt?:null | string}) => {   
  
    const handleChange = (e:any) => {
        const value = e.target.value
        setValue(value)
    }

    const isNotValid = value !== '' &&  validPattern &&  !validPattern.test(value)

    return (
        <FormControl>
            <Box mt={mt as string} flexDir={{base:'column',sm:'column', md:'row'}} justifyContent={{base:'space-between',md:'space-between'}}  alignItems={{base:'normal',sm:'normal', md:'center'}}>
                <Text as='label'  htmlFor={`${placeholder}-input`}  color={'brand.clear_black'} fontWeight={'medium'} fontSize={'md'}>{field}</Text>
                <Box mt={'10px'} position="relative">
                    <Input    transition='border-bottom 0.3s ease-in-out' fontWeight={300} fontSize={'md'}  id={`${placeholder}-input`} onChange={handleChange} value={value} placeholder={placeholder}  border={'none'} px={0} borderBottom={`3px solid ${isNotValid ? 'red':'rgb(211, 219, 229)'}`} size='sm'  bg='brand.gray_1' focusBorderColor='transparent'   _focus={{border:'none', borderBottom: `3px solid ${'rgb(5, 102, 255)'}`}}/>
                </Box> 
            </Box>
        </FormControl>
    );
};

export default NormalInput
