//NEXT
import { GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
//REACT
import { useState, useEffect } from 'react'
//TRANSALATION
import { useTranslations } from 'next-intl'
//FRONT
import { Flex, Box, Text, Icon, Button, Grid, SliderMark, Slider, SliderFilledTrack, SliderTrack, SliderThumb, Heading } from '@chakra-ui/react'
import "animate.css/animate.compat.css"
//COMPONENTS
import Footer from '../Content/Components/footer'
import FAQS from '../Content/Components/faqs'
import MeshGradientBackground from '@/Content/Gradient/gradient'
//FUNCTIONS
import HighlightText from '@/Content/Functions/HighlightText'
//ICONS
import { IconType } from 'react-icons'
import { TbCurrencyDollarOff } from "react-icons/tb";
import { FaPiggyBank, FaClock, FaShareNodes } from "react-icons/fa6"
import { BsPeopleFill } from "react-icons/bs";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { FaKey } from "react-icons/fa6";

export async function getStaticProps({locale}:GetStaticPropsContext) {return {props: {messages: require(`../lang/${locale}.json`)}}}

const Pricing =()=>{

    //TRANSLATED TEXT
    const t = useTranslations('Pricing')
    const router = useRouter()
 
    //PRICES AND INTERVALS
    const startTicketPrice = 0.18
    const AITicketPrice = 0.7
    const TicketMinutes = 8
    const AverageSalary = 14
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

    //FAQS LIST
    const faqsList = [[t('FAQ_1'), t('FAQ_ANSWER_1')], [t('FAQ_2'), t('FAQ_ANSWER_2')], [t('FAQ_3'), t('FAQ_ANSWER_3')], [t('FAQ_4'), t('FAQ_ANSWER_4')], [t('FAQ_5'), t('FAQ_ANSWER_5')]]

    //ANNUAL OR MONTHLY PAYMENT
    const [paymentMethod, setPaymentMethod] = useState<number>(1)
    const [indicatorStyle, setIndicatorStyle] = useState<{ width: number, left: number }>({ width: 0, left: 0 })
    useEffect(() => {
        const selectedButton = document.getElementById(`section-btn-${paymentMethod}`)
        if (selectedButton) {
            const { offsetWidth, offsetLeft } = selectedButton
            setIndicatorStyle({ width: offsetWidth, left: offsetLeft })
        }
    }, [paymentMethod])
   
    //ESTIMATED PERCENTAGE OF TICKETS SOVED BY TILDA AND SELECTED INTERVALS
    const [matildaPercentage, setMatildaPercentage] = useState<number>(50)
    const [selectedInterval, setSelectedInterval] = useState<{start:number, end:number, index:number}>({start:901, end:1000, index:5})
    
    //FEATURE COMPONENT
    const FeatureComponent = ({icon, title}:{icon:IconType, title:string}) => {
        return(  
            <Flex  flex='1' alignItems='center' bg='rgb(31, 68, 104)' p='15px' borderRadius={'calc(0.4rem - 4px)'} gap='10px'>
                <Icon as={icon}/>
                <Text fontWeight={400} fontSize={'sm'} color='white'>{title} </Text>
            </Flex>
            )
 
    }

    //PRINCE COMPONENT
    const PriceComponent = ({title, price}:{price:string, title:string}) => {
        return(  
        <Box  flex='1' textAlign={'center'} bg='brand.gray_1' p='15px' borderRadius={'calc(0.7rem - 5px)'}>
            <Text fontSize='3xl' fontWeight={400}>{price}</Text>
            <Text fontWeight={400}  fontSize={'sm'}> 
                <HighlightText text={title} color1='rgb(100, 116, 145)' color2='rgb(5, 102, 255)' bold />
            </Text>
        </Box>
        )
    }

    return(
    <Box bg='brand.white_bg'> 

        {/*HEAD*/}
        <NextSeo
            title="Precios - Elige el Plan que se Adapta a Ti"
            description="Descubre nuestros planes de precios flexibles y elige la mejor opción para tu negocio. Obtén soluciones de IA accesibles y efectivas."
            />

        {/*HERO*/}
        <Flex flexDir='column' width={'100vw'} alignItems={'center'}  > 
            <Box   zIndex={10} width="100%" position={'relative'} px='4vw'  textAlign={'center'} pb={{ base: "5vh", md: "6vh", lg: "7vh", xl: "8vh" }} pt={{ base: "10vh", md: "11vh", lg: "13vh", xl: "15vh" }}  maxW="1200px" >
                <Flex alignItems={'center'}  flexDir={'column'} > 
                    <Text color='brand.text_blue' fontWeight={'500'} fontSize='lg' >{t('PreTitle')}</Text> 
                    <Heading fontSize={'5xl'} fontWeight={'600'} overflowWrap="break-word" whiteSpace="pre-wrap" >{t('Title')}</Heading>   
                </Flex>
            </Box>
            <Box width={'100vw'} zIndex={1}  bg='brand.white_bg'  mt='-15vh' height={'60vh'} top={0} clipPath='polygon(0 60%, 100% 0%, 100% 40%, 0 100%)'> 
                <MeshGradientBackground colors={["#11efe3",  "#0073e6", "#00299c"]}/>
            </Box>
        </Flex>
        <Flex px='4vw' width={'100vw'} mt='-45vh'   bg='brand.white_bg' justifyContent={'center'}   >
            <Flex  zIndex={10}  maxW={'1200px'} gap={'32px'} flexDir={{ base: 'column',sm:'column', md: 'column', lg:'row' }} > 
                <Box flex='2'  bg='white' zIndex={2} boxShadow={'lg'}  flexDir={{ base: 'column',sm:'column', md: 'column', lg:'row' }}  p='4px'  borderRadius={'.4rem'}  maxW="1000px" >
                    <Flex height={'100%'}  flexDir={{ base: 'column',sm:'column', md: 'column', lg:'row' }}  >
                        <Flex flexDir={'column'}justifyContent={'space-between'}  p='20px' flex='1'> 
                            <Box flex='1'> 
                                <Text fontWeight={'400'} fontSize={'md'} whiteSpace="no-wrap">
                                    {t('Integration_Title_2')}
                                </Text>
                                <Text fontSize={'xs'} fontWeight={300}> 
                                    <HighlightText text={ t('Integration_Subtitle')} color1='rgb(100, 116, 145)' color2='rgb(5, 102, 255)'/>
                                </Text>
                                <Flex mt='15px' flex='1' alignItems='center'  gap='10px'>
                                    <Icon as={BsPeopleFill} color={'brand.text_blue'}/>
                                    <Text fontSize={'2xs'}>{t('UnlimitedUsers')} </Text>
                                </Flex>
                                <Flex mt='5px'   flex='1' alignItems='center' gap='10px'>
                                    <Icon as={FaKey} color={'brand.text_blue'}/>
                                    <Text   fontSize={'2xs'} >{t('AccessFeatures')} </Text>
                                </Flex>
                                <Flex mt='5px'   flex='1' alignItems='center' gap='10px'>
                                    <Icon as={IoChatbubbleEllipses} color={'brand.text_blue'}/>
                                    <Text  fontSize={'2xs'}>{t('AnyChannel')} </Text>
                                </Flex>
                            </Box>   
                        </Flex>

                        <Flex flexDir={'column'} justifyContent={'space-between'} gap='4px'  flex='1' >
                            <PriceComponent price={'0.7€'} title={t('SolvedTicket')}  />
                            <PriceComponent price={'0.12€'} title={t('ManagedTicket')} />
                        </Flex>
                    </Flex>

                </Box>

                <Box flex='2'  bg='brand.black_button' zIndex={2} boxShadow={'lg'}  flexDir={{ base: 'column',sm:'column', md: 'column', lg:'row' }}  p='4px'  borderRadius={'.4rem'}  maxW="1000px" >
                <Flex height={'100%'}  color='white' flexDir={{ base: 'column',sm:'column', md: 'column', lg:'row' }} >
                    <Flex flexDir={'column'} justifyContent={'space-between'}  p='20px' flex='1'> 
                        <Box flex='1'> 
                            <Text  fontSize={{base: '1em',sm:'1.1em', md: '1.2em', lg: '1.3em' }} whiteSpace="no-wrap">
                                {t('IntegrationStudie')}
                            </Text>
                            <Text fontSize={'xs'} fontWeight={300}> 
                                <HighlightText text={ t('IntegrationStudieDes')} color1='rgb(245, 247, 249)' color2='#00CFFF' />
                            </Text>
                            <Text fontSize={'xs'} fontWeight={300}> 
                                <HighlightText text={ t('IntegrationStudieDes2')} color1='rgb(245, 247, 249)' color2='#00CFFF' />
                            </Text>
                        </Box>
                        <Button size='sm' mt='20px' fontSize={'xs'} width={'100%'} fontWeight={400}  color='brand.black_button' bg='white' onClick={() => router.push('contact')} _hover={{bg:'brand.gray_1'}} borderRadius={'.5rem'}>{t('Integration_Button')}</Button>
                    </Flex>

                    <Flex flexDir={'column'} gap='4px' flex='1' >
                        <FeatureComponent icon={FaClock} title={t('Integration_Feature_4')} />
                        <FeatureComponent icon={TbCurrencyDollarOff} title={t('Integration_Feature_1')} />
                        <FeatureComponent icon={FaShareNodes} title={t('Integration_Feature_2')}  />
                        <FeatureComponent icon={FaPiggyBank} title={t('Integration_Feature_3')} />
                    </Flex>
                </Flex>

                </Box>
            </Flex>
        </Flex>

        {/*PRICING PLANS*/}    
        <Flex px='4vw' bg='brand.white_bg' alignItems={'center'} flexDir={'column'} mt={{ base: '0px',sm:'20px', md: '60px', lg:'100px' }} py={'75px'} >
            <Heading as='h2' fontSize={'3xl'} textAlign={'center'} fontWeight={600} overflowWrap="break-word" whiteSpace="pre-wrap" color={'brand.clear_black'} >
                {t('EstimateTitle')}
            </Heading>

            <Box width="100%" mt='30px' maxW="1200px" >
                <Text color='brand.text_blue' fontSize={'md'} fontWeight={500}>{t('Step')} 1</Text>
                <Text fontSize={'md'}  fontWeight={400}>{t('EstimateTickets')}</Text>
            </Box>

            <Flex position={'relative'} fontSize={'sxs'} borderRadius={'2rem'} p='4px' bg='brand.gray_2' mt={'30px'} display={'inline-flex'}>    
                
                <Flex position='absolute' height='calc(100% - 8px)' bg='white' borderRadius={'calc(2rem - 4px)'} transition={'all 0.3s ease'} style={{width: `${indicatorStyle.width}px`, left: `${indicatorStyle.left}px`}}/>
                <Flex position={'relative'}  cursor='pointer'  id={`section-btn-${0}`} p='10px'  onClick={() => setPaymentMethod(0)}>
                    <Text>{t('Pay_1')}</Text>
                </Flex> 
                <Flex   id={`section-btn-${1}`}position={'relative'} cursor='pointer' p='10px'  onClick={() => setPaymentMethod(1)}>
                    <Flex position={'absolute'} right={'0px'} top={'-10px'} px='5px' borderRadius={'1em'} bg='blue.100' color={'blue.600'} >
                        <Text fontSize={'.8em'} fontWeight={300}>{t('Save_Plan')}</Text>
                    </Flex> 
                    <Text>{t('Pay_2')}</Text>
                </Flex> 
            </Flex>

            {/*TICKETS PLANS*/}    
            <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}  mt={'30px'}   gap={'32px'} width="100%" maxW={'1200px'}>
                {plansNames.map((element, index) => (
                    <Box shadow={'md'} bg='white' textAlign={'center'} borderColor={'gray.200'} borderWidth={'1px'} p='20px' borderRadius={'1Rem'}>
                        <Text fontSize='lg' >{element}</Text>
                        <Text  mt='10px' fontWeight={300} color={'brand.text_gray'} fontSize={'2xs'}>{plansDescriptions[index]}</Text>                     
                        {Array.from(Array(3).keys()).map((planIndex:number) => {
                            const intervalIndex = planIndex + index * 3
                            return (
                            <Flex cursor={'pointer'} onClick={() => {if (handledTicketsIntervals[intervalIndex].end === -1) router.push('contact'); else setSelectedInterval({...handledTicketsIntervals[intervalIndex], index:intervalIndex})}} justifyContent={'space-between'} alignItems={'center'} p='10px' borderColor={'gray.300'} borderWidth={'1px'} borderRadius={'.5em'} mt='20px' transition={'background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out'} _hover={{shadow:'lg'}} bg={selectedInterval.index === intervalIndex?'blue.100':''}> 
                                <Box> 
                                <Text fontSize={'.9em'}>{handledTicketsIntervals[intervalIndex].end === -1 ?'+':''}{handledTicketsIntervals[intervalIndex].start} {handledTicketsIntervals[intervalIndex].end === -1 ?'':'-'} {handledTicketsIntervals[intervalIndex].end === -1 ?'':handledTicketsIntervals[intervalIndex].end }</Text>
                                <Text>tickets</Text>
                                </Box>
                                {handledTicketsIntervals[intervalIndex].end === -1 ?
                                <Button size='sm' fontSize={'xs'} fontWeight={400} color='white' bg='brand.black_button' _hover={{bg:'brand.black_button_hover'}} borderRadius={'1rem'}>{t('Contact')}</Button>
                                :
                                <Flex alignItems={'center'} justifyContent={'center'} gap='10px'>  
                                    <Text fontSize={'2xl'} fontWeight={400} >{Math.round(handledTicketsIntervals[intervalIndex].end * (startTicketPrice - (intervalIndex) * 0.01) * (paymentMethod === 0?1:0.8))}</Text>
                                    <Box textAlign={'start'} fontSize={'2xs'}>
                                        <Text>EUR</Text>
                                        <Text>/{t('Month')}</Text>
                                    </Box>
                                </Flex>}
                            </Flex>)
                        })}
                    </Box>
                ))}
            </Grid>

            {/*CONSULTS SELECTOR */}
            <Box width="100%"  mt={'75px'}  maxW="1200px" >
                <Text color='brand.text_blue'fontSize={'md'} fontWeight={500}>{t('Step')} 2</Text>
                <Text  fontSize={'md'}  fontWeight={400}>{t('EstimateMatildaPercentage')}</Text>
            </Box>
            <Box bg='white' shadow={'lg'}  mt={'30px'} width="100%" alignItems={'center'} flexDir={{ base: 'column',sm:'column', md: 'row' }} textAlign={'start'}  p='30px 30px 90px 30px'  borderRadius={'1rem'} maxW="1200px" >
                <Text fontSize='md' mb='30px'>{t('TicketsByMatildaNum1')} <span style={{background:'#BEE3F8', borderRadius:'10rem', fontWeight:500, padding:'5px 11px 5px 11px'}}>{matildaPercentage}%</span> {t('TicketsByMatildaNum2')}</Text>
                <Slider defaultValue={matildaPercentage} mb='1vh' mt='5vh' aria-label='slider-ex' onChange={(value) => setMatildaPercentage(value)} min={20} max={100}>
                    {Array.from(Array(9).keys()).map((markIndex:number) => (
                        <SliderMark ml='-2' value={markIndex * 10 + 20} mt='-35px' color='gray.600' fontSize={'.8em'}>{markIndex * 10 + 20}%</SliderMark>
                    ))} 
                    <SliderMark whiteSpace={'nowrap'} ml='-9' borderRadius={'.7rem'} value={matildaPercentage} textAlign='center' fontWeight={500}  bg='brand.black_button' py='5px' px='22px' color='white' mt='4' >
                        {matildaPercentage} %
                    </SliderMark>
                    <SliderTrack height={'8px'} borderRadius={'10rem'}>
                        <SliderFilledTrack   bg='brand.text_blue'/>
                    </SliderTrack>
                    <SliderThumb />
                </Slider>
            </Box>

            <Box width="100%"  mt={'75px'}  maxW="1200px" >
                <Text color='brand.text_blue'fontSize={'md'} fontWeight={500}>{t('Step')} 3</Text>
                <Text  fontSize={'md'}  fontWeight={400}>{t('EstimatedPrice')}</Text>
            </Box>

            <Box width="100%"   color='white'   p='30px' bg={'brand.black_button'}  borderRadius={'1rem'} shadow={'lg'}  mt={'30px'} maxW="1200px" >
                <Text  fontSize={'md'} mb='30px'>{t('CurrentPrice1')} <span style={{background:'rgb(211, 219, 229)',  color:'#222', borderRadius:'10rem', fontWeight:500, padding:'5px 11px 5px 11px'}}>{selectedInterval.end}</span> {t('CurrentPrice2')} <span style={{background:'rgb(211, 219, 229)', color:'#222', borderRadius:'10rem', fontWeight:500, padding:'5px 11px 5px 11px'}}>{Math.round(0.01 * matildaPercentage * (selectedInterval.start + (selectedInterval.end - selectedInterval.start)/2))}</span> {t('CurrentPrice3')} </Text>
                <Box height={'1px'} width={'100%'} bg='brand.gray_2' mt='10px' mb='20px'/>
                <Flex justifyContent={'space-between'} gap='32px'  flexDir={{ base: 'column-reverse',sm:'column-reverse', md: 'row' }}>
                    <Box flex='1'>
                        <Text fontSize={'xs'} >{t('SavedMoneyQuestion')}</Text>
                        <Text color='brand.gray_1' fontSize={'2xs'} fontWeight={300} >{t('SavedTimeAnswer',{minutes: TicketMinutes, total_minutes:TicketMinutes * 100})}</Text>
                        <Text color='brand.gray_1'   fontSize={'2xs'} mt='10px' fontWeight={300} >{t('SavedMoneyAnswer',{salary: AverageSalary, total_minutes:TicketMinutes * 100, total_savings:Math.round(AverageSalary * TicketMinutes * 100 / 60)})}</Text>
                    </Box> 
                    <Flex width={{ base: '100%',sm:'100%', md: '1px' }} height={{ base: '1px',sm:'1px', md: 'auto' }} bg='brand.gray_2' />

                    <Box flex={'1'} bg='rgb(5, 20, 40)' justifyContent={'space-between'} gap='10vw' p='20px'borderRadius={'.7rem'} borderColor={'brand.gray_2'} borderWidth={'1px'}>
            
                        <Text  fontSize={'lg'}  fontWeight={500}>{t('MonthlyROI')}</Text>
                        <Flex flexWrap={'wrap'} mt='20px' gap='3vw' >
                            <Box> 
                                <Text>{t('SavedTime')}:</Text>
                                <Flex alignItems={'end'} gap='10px'>  
                                    <Text whiteSpace={'nowrap'}  fontSize={'2xl'}  >{Math.round((0.01 * matildaPercentage * (selectedInterval.start + (selectedInterval.end - selectedInterval.start)/2))*TicketMinutes / 60)}</Text>
                                    <Box textAlign={'start'}  fontSize={'xs'} >
                                        <Text>{t('Hours')}</Text>
                                        <Text>/{t('Month')}</Text>
                                    </Box>
                                </Flex>
                            </Box>
                            <Box> 
                                <Text>{t('ROI')}:</Text>
                                <Flex  alignItems={'end'} gap='10px'>  
                                    <Text whiteSpace={'nowrap'}  fontSize={'2xl'}  >{Math.round((0.01 * matildaPercentage * (selectedInterval.start + (selectedInterval.end - selectedInterval.start)/2))*TicketMinutes / 60 * AverageSalary)}</Text>
                                    <Box textAlign={'start'}  fontSize={'xs'}  >
                                        <Text>EUR</Text>
                                        <Text>/{t('Month')}</Text>
                                    </Box>
                                </Flex>
                            </Box>
                            <Box> 
                                <Text>{t('FinalPrice')}:</Text>
                                <Flex alignItems={'center'}  gap='10px'>  
                                    <Text whiteSpace={'nowrap'}    fontSize={'2xl'} >{Math.round(selectedInterval.end * (startTicketPrice - (selectedInterval.index) * 0.01) + AITicketPrice * (0.01 * matildaPercentage * (selectedInterval.start + (selectedInterval.end - selectedInterval.start)/2)) * (paymentMethod === 0? 1: 0.8))}</Text>
                                    <Box textAlign={'start'}  fontSize={'xs'}>
                                        <Text>EUR</Text>
                                        <Text>/{t('Month')}</Text>
                                    </Box>
                                </Flex>
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
                <Button width={'100%'} mt='30px' bg='white' onClick={() => router.push('contact')} _hover={{bg:'brand.gray_2'}} color='#222' fontWeight={500}>{t('Integration_Button')}</Button>

            </Box>
        </Flex>  
        <Box bg='white'> 
            <FAQS faqsList={faqsList}/>
        </Box>
        <Footer/>
    </Box>)
}

export default Pricing

   
  