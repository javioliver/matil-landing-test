//NEXT
import Head from 'next/head'    
import { GetStaticPropsContext } from 'next'
//TRANSALATION
import { useTranslations } from 'next-intl'

import { Flex, Box, Text, Image, Icon, Button, Grid, SliderMark, Slider, SliderFilledTrack, SliderTrack, SliderThumb } from '@chakra-ui/react'
import Footer from '../Content/Components/footer'
import FAQS from '../Content/Components/faqs'
import { FaCheckCircle } from "react-icons/fa"


import { TbCurrencyDollarOff } from "react-icons/tb";
import { MdIntegrationInstructions, MdOutlineDoubleArrow } from "react-icons/md"

import { useState } from 'react'
import { IconType } from 'react-icons'
import { FaPiggyBank } from "react-icons/fa6";

export async function getStaticProps({locale}:GetStaticPropsContext) {return {props: {messages: require(`../lang/${locale}.json`)}}}


const Pricing =()=>{

    //TRANSLATED TEXT
    const t = useTranslations('Pricing')

    //ANNUAL OR MONTHLY PAYMENT
    const [paymentMethod, setPaymentMethod] = useState<number>(0)

    //SELECTED PRICES 
    const startTicketPrice = 0.18
    const AITicketPrice = 0.7
    const TicketMinutes = 8
    const AverageSalary = 14

    const [matildaPercentage, setMatildaPercentage] = useState<number>(50)
    const [selectedInterval, setSelectedInterval] = useState<{start:number, end:number, index:number}>({start:0, end:100, index:0})

     const handledTicketsIntervals = [
        {start:0, end:100},
        {start:101, end:250},
        {start:251, end:400},
        {start:401, end:600},
        {start:601, end:800},
        {start:901, end:1000},
        {start:1001, end:1500},
        {start:1501, end:2000},
        {start:2001, end:3000},
        {start:3001, end:4000},
        {start:4001, end:5000},
        {start:5001, end:-1},
    ]

    
    //PRICES LIST
    const plansNames = [t('Plan_1'), t('Plan_2'), t('Plan_3'), t('Plan_4')]
    const plansDescriptions = [t('Plan_1_Description'), t('Plan_2_Description'), t('Plan_3_Description'), t('Plan_4_Description')]

    //PLANS FEATURES
    const plansFeatures = [t('Feature_1'), t('Feature_2'), t('Feature_3'), t('Feature_4'), t('Feature_5'), t('Feature_6'), t('Feature_7'), t('Feature_8'), t('Feature_9')]
    const plansNumbers = [[600, 2000 , 5000, 'inf'], [3, 5, 10, 'inf'], [], [], [], ['', 2, 4, 'x']]
    const plansCut = [5, 8, 9, 10]
 
    //FAQS LIST
    const faqsList = [[t('FAQ_1'), t('FAQ_ANSWER_1')], [t('FAQ_2'), t('FAQ_ANSWER_2')], [t('FAQ_3'), t('FAQ_ANSWER_3')], [t('FAQ_4'), t('FAQ_ANSWER_4')], [t('FAQ_5'), t('FAQ_ANSWER_5')]]

    const IntegrationComponent = ({icon, title, description}:{icon:IconType, title:string, description:string}) => {
        return(  
        <Flex flex='1' gap='10px' mt='5vh'>
            <Icon color='brand.text_blue' boxSize={'25px'} mt='.2em' as={icon}/>
            <Box>
                <Text>{title}</Text>
                <Text  fontWeight={300} fontSize={{ base: '.7em',sm:'.7em', md: '.75em', lg: '.8em' }}color="gray.600"  overflowWrap="break-word" whiteSpace="pre-wrap">{description}</Text>
            </Box>
        </Flex>)
    }

    return(<> 

    <Head>
        <title>MATIL</title>
        <meta name="description" content="Impulsa tu negocio con soluciones de IA. Mejora la atención al cliente, aumenta las ventas proactivas y envía correos masivos personalizados con nuestra tecnología innovadora. Descubre cómo la inteligencia artificial puede transformar tu empresa."/>
    </Head>

    <Flex flexDir='column' width={'100vw'} alignItems={'center'}  bg='white'>
        
        <Flex px='4vw' width={'100vw'}  justifyContent={'center'} bgGradient="linear(to-r, #89f7fe, #66a6ff)" >
            <Box width="100%"  textAlign={'center'}  py={{ base: "10vh", md: "10vh", lg: "12vh", xl: "12vh" }}  maxW="1200px" >
                <Text color='black'fontWeight={'medium'} fontSize={{base: '1.2em',sm:'1.3em', md: '1.4em', lg: '1.5em' }} >{t('PreTitle')}</Text> 
                <Text mt='10px' fontSize={{ base: '2.2em',sm:'2.5em', md: '2.8em', lg: '3em' }} fontWeight="medium" overflowWrap="break-word" whiteSpace="pre-wrap" color={'brand.clear_black'} >
                    {t('Title')}
                </Text>
                <Text mt='30px' mb='30px'  fontWeight={300} fontSize={{base: '1em',sm:'1.1em', md: '1.2em', lg: '1.3em' }} color="brand.gray"  overflowWrap="break-word" whiteSpace="pre-wrap">
                    {t('SubTitle')}
                </Text>
            </Box>
        </Flex>

        <Box width="100%" py={{ base: "1vh", md: "1vh", lg: "2vh", xl: "2vh" }} mt={{ base: "2vh", md: "2vh", lg: "3vh", xl: "4vh" }}  maxW="1200px" >
            <Text color='blue.500' fontWeight={500}>{t('Step')} 1</Text>
            <Text fontSize={'1.2em'} fontWeight={400}>{t('EstimateTickets')}</Text>
        </Box>
        <Flex px='4vw'alignItems={'center'} flexDir={'column'} >
 
            <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}   gap={'20px'} width="100%" maxW={'1200px'}>
                {plansNames.map((element, index) => (
                    <Box shadow={'md'}  textAlign={'center'} borderColor={'gray.200'} borderWidth={'1px'} p='20px' borderRadius={'1em'}>
                        <Text fontSize={{base: '1em',sm:'1.2em', md: '1.3em', lg: '1.4em' }} >{element}</Text>
                        <Text  minH="90px" mt='20px' fontWeight={300} color={'gray.600'} fontSize={{ base: '.7em',sm:'.7em', md: '.75em', lg: '.8em' }}>{plansDescriptions[index]}</Text>

                        <Box minH="60px"> 
         
                            {Array.from(Array(3).keys()).map((planIndex:number) => {
                                
                                const intervalIndex = planIndex + index * 3
                                return (
                                <Flex cursor={'pointer'} onClick={() => setSelectedInterval({...handledTicketsIntervals[intervalIndex], index:intervalIndex})} justifyContent={'space-between'} alignItems={'center'} p='10px' borderColor={'gray.300'} borderWidth={'1px'} borderRadius={'.5em'} mt='20px'> 
                                    <Box> 
                                    <Text fontSize={'.9em'}>{handledTicketsIntervals[intervalIndex].end === -1 ?'+':''}{handledTicketsIntervals[intervalIndex].start} {handledTicketsIntervals[intervalIndex].end === -1 ?'':'-'} {handledTicketsIntervals[intervalIndex].end === -1 ?'':handledTicketsIntervals[intervalIndex].end }</Text>
                                    <Text>tickets</Text>
                                    </Box>
                                    {handledTicketsIntervals[intervalIndex].end === -1 ?
                                    <Button size='sm' fontWeight={400} color='white' bg='brand.blue' _hover={{bg:'brand.blue'}} borderRadius={'1rem'}>{t('Contact')}</Button>
                                                          :
                                    <Flex alignItems={'center'} justifyContent={'center'} gap='10px'>  
                                        <Text fontSize={{ base: '1.4em',sm:'1.6em', md: '1.8em', lg: '2em' }} >{Math.round(handledTicketsIntervals[intervalIndex].end * (startTicketPrice - (intervalIndex) * 0.01))}</Text>
                                        <Box textAlign={'start'} fontSize={{ base: '.75em',sm:'.8em', md: '.85em', lg: '.9em' }} >
                                            <Text>EUR</Text>
                                            <Text>/{t('Month')}</Text>
                                        </Box>
                                    </Flex>}
                                </Flex>)
                            })}
                           
                         </Box>
                      
                    </Box>
                ))}
            </Grid>

        </Flex>  

        <Box width="100%" py={{ base: "1vh", md: "1vh", lg: "2vh", xl: "2vh" }} mt={{ base: "2vh", md: "2vh", lg: "3vh", xl: "4vh" }}  maxW="1200px" >
            <Text color='blue.500' fontWeight={500}>{t('Step')} 2</Text>
            <Text fontSize={'1.2em'} fontWeight={400}>{t('EstimateMatildaPercentage')}</Text>
        </Box>
        <Box shadow={'lg'} width="100%" alignItems={'center'} flexDir={{ base: 'column',sm:'column', md: 'row' }} textAlign={'start'}  p='30px 30px 90px 30px' bg='gray.50' borderRadius={'1rem'}  borderWidth={'1px'} maxW="1200px" >
            <Text fontSize={'1.2em'} mb='2vh'>{t('TicketsByMatildaNum1')} <span style={{background:'#BEE3F8', borderRadius:'10rem', fontWeight:500, padding:'5px 11px 5px 11px'}}>{matildaPercentage}%</span> {t('TicketsByMatildaNum2')}</Text>
            <Slider defaultValue={matildaPercentage} mb='1vh' mt='5vh' aria-label='slider-ex' onChange={(value) => setMatildaPercentage(value)} min={20} max={100}>
                {Array.from(Array(9).keys()).map((markIndex:number) => (
                    <SliderMark ml='-2' value={markIndex * 10 + 20} mt='-35px' color='gray.600' fontSize={'.8em'}>{markIndex * 10 + 20}%</SliderMark>
                  ))} 
                <SliderMark whiteSpace={'nowrap'} ml='-9' borderRadius={'.7rem'} value={matildaPercentage} textAlign='center' fontWeight={500}  bg='#222' py='5px' px='22px' color='white' mt='4' >
                    {matildaPercentage} %
                </SliderMark>
                <SliderTrack height={'8px'} borderRadius={'10rem'}>
                    <SliderFilledTrack   bg='brand.text_blue'/>
                </SliderTrack>
                <SliderThumb />
            </Slider>
        </Box>

        <Box width="100%" py={{ base: "1vh", md: "1vh", lg: "2vh", xl: "2vh" }} mt={{ base: "2vh", md: "2vh", lg: "3vh", xl: "4vh" }}  maxW="1200px" >
            <Text color='blue.500' fontWeight={500}>{t('Step')} 3</Text>
            <Text fontSize={'1.2em'} fontWeight={400}>{t('EstimatedPrice')}</Text>
        </Box>
        <Flex fontSize={'.9em'} borderRadius={'2em'} p='.2em' bg='gray.200' display={'inline-flex'}>    
            <Flex cursor='pointer' p='10px' borderRadius={'1.8em'}bg={paymentMethod === 0 ? 'white':'transparent'} onClick={() => setPaymentMethod(0)}>
                <Text>{t('Pay_1')}</Text>
            </Flex> 
            <Flex position={'relative'} cursor='pointer' p='10px' borderRadius={'1.8em'} bg={paymentMethod === 1 ? 'white':'transparent'} onClick={() => setPaymentMethod(1)}>
                <Flex position={'absolute'} right={'0px'} top={'-10px'} px='5px' borderRadius={'1em'} bg='blue.100' color={'blue.600'} >
                    <Text fontSize={'.8em'} fontWeight={300}>{t('Save_Plan')}</Text>
                </Flex> 
                <Text>{t('Pay_2')}</Text>
            </Flex> 
        </Flex>
        
        <Box width="100%" alignItems={'center'} flexDir={{ base: 'column',sm:'column', md: 'row' }} textAlign={'start'}  p='30px' bg={'rgb(5, 102, 255, 0.2)'}  borderRadius={'1rem'} mt={{ base: "1vh", md: "1vh", lg: "2vh", xl: "2vh" }} borderColor={'brand.text_blue'} borderWidth={'1px'} maxW="1200px" >
            <Text fontSize={'1.2em'} mb='2vh'>{t('CurrentPrice1')} <span style={{background:'#BEE3F8', borderRadius:'10rem', fontWeight:500, padding:'5px 11px 5px 11px'}}>{selectedInterval.end}</span> {t('CurrentPrice2')} <span style={{background:'#BEE3F8', borderRadius:'10rem', fontWeight:500, padding:'5px 11px 5px 11px'}}>{Math.round(0.01 * matildaPercentage * (selectedInterval.start + (selectedInterval.end - selectedInterval.start)/2))}</span> {t('CurrentPrice3')} </Text>
            <Box height={'1px'} width={'100%'} bg='brand.text_blue' mt='10px' mb='20px'/>
            <Flex gap='10vw' p='20px'borderRadius={'.7rem'} borderColor={'gray.300'} borderWidth={'1px'}>
                <Box> 
                    <Text>{t('MonthlyROI')}</Text>
                    <Flex mt='20px' gap='2vw'>
                        <Box> 
                            <Text>{t('SavedTime')}:</Text>
                            <Flex alignItems={'end'} gap='10px'>  
                                <Text whiteSpace={'nowrap'}  fontSize={{ base: '1.4em',sm:'1.6em', md: '1.8em', lg: '2em' }} >{Math.round((0.01 * matildaPercentage * (selectedInterval.start + (selectedInterval.end - selectedInterval.start)/2))*TicketMinutes / 60)}</Text>
                                <Box textAlign={'start'} fontSize={{ base: '.75em',sm:'.8em', md: '.85em', lg: '.9em' }} >
                                    <Text>{t('Hours')}</Text>
                                    <Text>/{t('Month')}</Text>
                                </Box>
                            </Flex>
                        </Box>
                        <Box> 
                            <Text>{t('ROI')}:</Text>
                            <Flex  alignItems={'end'} gap='10px'>  
                                <Text whiteSpace={'nowrap'} fontSize={{ base: '1.4em',sm:'1.6em', md: '1.8em', lg: '2em' }} >{Math.round((0.01 * matildaPercentage * (selectedInterval.start + (selectedInterval.end - selectedInterval.start)/2))*TicketMinutes / 60 * AverageSalary)}</Text>
                                <Box textAlign={'start'} fontSize={{ base: '.75em',sm:'.8em', md: '.85em', lg: '.9em' }} >
                                    <Text>EUR</Text>
                                    <Text>/{t('Month')}</Text>
                                </Box>
                            </Flex>
                        </Box>
                    </Flex>
                    <Box mt='30px'> 
                        <Text>{t('FinalPrice')}:</Text>
                        <Flex alignItems={'center'}  gap='10px'>  
                            <Text whiteSpace={'nowrap'}   fontSize={{ base: '1.4em',sm:'1.6em', md: '1.8em', lg: '2em' }} >{Math.round(selectedInterval.end * (startTicketPrice - (selectedInterval.index) * 0.01) + AITicketPrice * (0.01 * matildaPercentage * (selectedInterval.start + (selectedInterval.end - selectedInterval.start)/2)) * (paymentMethod === 0? 1: 0.8))}</Text>
                            <Box textAlign={'start'} fontSize={{ base: '.75em',sm:'.8em', md: '.85em', lg: '.9em' }} >
                                <Text>EUR</Text>
                                <Text>/{t('Month')}</Text>
                            </Box>
                        </Flex>
                    </Box>
                </Box>
                <Box flex='1'>
                    <Image width={'100%'} height={'200px'}/> 
                    <Button mt='30px' width={'100%'} py='25px' fontWeight={400} fontSize={'1.2em'} color='white' bg='brand.blue' _hover={{bg:'brand.blue'}} borderRadius={'1rem'}>{t('Integration_Button')}</Button>
                </Box>
            </Flex>
 
        </Box>


        <Flex px='4vw' width={'100vw'}  justifyContent={'center'}  >
            <Box width="100%" overflow={'hidden'} textAlign={'center'}  maxW="1200px" paddingBottom={{ base: "10vh", md: "10vh", lg: "12vh", xl: "12vh" }} >
                <Text fontSize={{ base: '2.2em',sm:'2.5em', md: '2.8em', lg: '3em' }} fontWeight="medium" overflowWrap="break-word" whiteSpace="pre-wrap" color={'brand.clear_black'} >
                {t('Integration_Title')}
                </Text>
                <Flex width="100%" alignItems={'center'} flexDir={{ base: 'column',sm:'column', md: 'row' }}  gap={{ base: '30px',sm:'50px', md: '80px', lg: '100px' }}  textAlign={'start'} mt={{ base: '2vh',sm:'3vh', md: '4vh', lg: '5vh' }} p='30px' bg='gray.50' borderRadius={'1rem'} borderColor={'gray.300'} borderWidth={'1px'} maxW="1200px" >
                    <Box  flex='5'> 
                        <Text fontSize={{base: '1em',sm:'1.1em', md: '1.2em', lg: '1.3em' }} whiteSpace="no-wrap">
                            {t('Integration_Title_2')}
                        </Text>
                        <Text mt='5px'  fontWeight={300} fontSize={{ base: '.7em',sm:'.7em', md: '.75em', lg: '.8em' }}color="gray.600"  overflowWrap="break-word" whiteSpace="pre-wrap">
                            {t('Integration_Subtitle')}
                        </Text>
                        <Flex>
                          <IntegrationComponent icon={TbCurrencyDollarOff} title={t('Integration_Feature_1')}  description={t('Integration_Feature_Description_1')}/>
                          <IntegrationComponent icon={MdIntegrationInstructions} title={t('Integration_Feature_2')}  description={t('Integration_Feature_Description_2')}/>
                        </Flex>
                        <Flex>
                          <IntegrationComponent icon={FaPiggyBank} title={t('Integration_Feature_3')}  description={t('Integration_Feature_Description_3')}/>
                          <IntegrationComponent icon={MdOutlineDoubleArrow} title={t('Integration_Feature_4')}  description={t('Integration_Feature_Description_4')}/>
                        </Flex>
                    </Box>
                    <Flex flexDir={'column'} alignItems={'center'} flex='1'> 
                        <Image width={'150px'} src='/images/ai-first.png'/>
                        <Button mt='30px' px='40px' py='25px' fontWeight={400} fontSize={'1.2em'} color='white' bg='brand.blue' _hover={{bg:'brand.blue'}} borderRadius={'1rem'}>{t('Integration_Button')}</Button>
                     </Flex>
                </Flex>
            </Box>

        </Flex>

        <FAQS faqsList={faqsList}/>
        <Footer/>
   
    </Flex>
    </>)
}

export default Pricing

   
  