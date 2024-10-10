//REACT
import { useState } from "react"
//TRANSLATION
import { useTranslations } from "next-intl"
//FRONT
import { Flex, Text, Box, Collapse } from "@chakra-ui/react"
import ScrollAnimation from "react-animate-on-scroll"
//ICONS
import { IoIosArrowDown } from "react-icons/io"
 
function parseMarkdown(text: string): (string | JSX.Element)[] {
    const boldParsed = text.split(/(\*\*[^*]+\*\*)/).map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) return <span style={{fontWeight:400}} key={index}>{part.slice(2, -2)}</span>
      return part
    })
    const lineBreakParsed: (string | JSX.Element)[] = [];
    boldParsed.forEach((part, index) => {
      if (typeof part === 'string') {
        const lines = part.split('\n')
        lines.forEach((line, i) => {
          if (i > 0) lineBreakParsed.push(<br key={`${index}-${i}`} />)
          lineBreakParsed.push(line)
        })
      } 
      else lineBreakParsed.push(part)
    })
    return lineBreakParsed
  }

const FAQS = ({faqsList}:{faqsList:string[][]}) => {

    const t = useTranslations('Sections')

    const FaqElement = ({question, answer}:{question:string, answer:string}) => {

        const [isExpanded, setIsExpanded] = useState<boolean>(false)
        return(<> 
            <Flex cursor={'pointer'}fontSize={'md'} justifyContent={'space-between'} gap='50px' color='brand.text_blue'  alignItems={'center'} py='25px' onClick={() => setIsExpanded(!isExpanded) }> 
                <Text  fontWeight="medium" overflowWrap="break-word" whiteSpace="pre-wrap" >
                {question}
                </Text>
                <IoIosArrowDown className={isExpanded ? "rotate-icon-up" : "rotate-icon-down"}/>
            </Flex>
    
            <Collapse in={isExpanded} animateOpacity >
                <Text fontWeight={300}  fontSize={'sm'} >{parseMarkdown(answer)}</Text>
            </Collapse>

        </>)
    }
    return (
           
        <Flex width={'100%'} px='4vw' justifyContent={'center'}  paddingTop={'75px'} paddingBottom={{ base:'20vh', sm: '15vh', md: '20vh' }}bg='brand.white_bg' clipPath= 'polygon(0 0, 100% 0, 100% 85%, 0 100%)'>
            <Box maxW={'700px'}>  
                <ScrollAnimation animateIn="fadeIn" animateOnce >
                    <Text textAlign={'center'} fontSize={'3xl'} mb={{ base:'2vh', sm: '3vh', md: '5vh' }} fontWeight="medium" overflowWrap="break-word" whiteSpace="pre-wrap" color={'brand.clear_black'} >
                    {t('FAQS')}
                    </Text>
                </ScrollAnimation>

                
                {faqsList.map((faq, index) => (
                    <ScrollAnimation key={`faq-${index}`} animateIn="fadeInUp" animateOnce >
                        <FaqElement question={faq[0]} answer={faq[1]}/>
                    </ScrollAnimation>
                ))}
            </Box>
        </Flex>
    )
    
}

export default FAQS