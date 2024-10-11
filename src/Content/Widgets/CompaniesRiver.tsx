//NEXT
import { useEffect, useState } from 'react'
//FRONT
import { Flex, Box, Image } from '@chakra-ui/react'
import "animate.css/animate.compat.css"
 
const CompaniesRiver = () => {

    //COMPANIES LOGOS LIST
    const companiesList:[string, string][] = [
        ['shopify_logo.svg', 'green.100'], ['wordpress_logo.svg', 'gray.200'], 
        ['hubspot_logo.svg', 'orange.200'],['square_logo.svg','purple.50'],
        ['slack_logo.png', 'gray.100'], ['zapier_logo.svg', 'orange.100'], 
        ['stripe_logo.webp', 'purple.100'], ['salesforce_logo.png', 'blue.100'],
        ['mailchimp_logo.svg', 'yellow.100'], ['airtable_logo.png', 'yellow.100'],
        ['zoho_logo.png', 'white'], 
        ['jira_logo.svg', 'white'], ['sage_logo.png', 'green.100'],
        ['google_calendar_logo.webp', 'white'], ['sendgrid_logo.svg', 'blue.100'],
        ['odoo_logo.png', 'purple.100 '], ['drive_logo.png', 'white'],
        ['magento_logo.png', 'orange.100 '], ['prestashop_logo.png', 'gray.100'],
        ['woo_logo.png', 'purple.100 '], ['wix_logo.png', 'gray.100'],
    ]
 
    const randomize = (min:number, max:number) => Math.random() * (max - min) + min
    const generateInitialPositions = (count: number, windowHeight: number) => {
        const positions: { x: number, y: number }[] = []
        const usedX: Set<number> = new Set()
        const usedY: Set<number> = new Set()
        for (let i = 0; i < count; i++) {
          let x, y
          do {x = randomize(0, 80)} while (usedX.has(x))
          usedX.add(x)
          do {y = randomize(0, windowHeight - 100)} while (usedY.has(y))
          usedY.add(y)
          positions.push({ x, y })
        }
        return positions
      }
    
      const [initialPositions, setInitialPositions] = useState<{ x: number, y: number }[]>([])
    
      useEffect(() => {
        const height = window.innerHeight
        const positions = generateInitialPositions(companiesList.length, height * 1.5)
        setInitialPositions(positions)
      }, [])
      
    return (
        <Box position="relative" overflow={'hidden'}  height="100%" width="100%">
            <Flex height={'150vh'}  animation="moveUp 30s linear infinite">
                {initialPositions.map((pos, index) => {
                    const randomScale = randomize(0.7, 0.8);
                    return (
                        <Flex key={index} position="absolute" boxShadow={'rgba(0, 0, 0, 0.1) 0px 15px 35px 0px, rgba(0, 0, 0, 0.07) 0px 3px 10px 0px'} borderRadius="50%" width="100px" height="100px" display="flex"justifyContent="center" alignItems="center"
                        top={`${pos.y}px`} transform={`scale(${randomScale})`} left={`${pos.x}%`} backgroundColor={companiesList[index][1]} >
                        <Image src={`/images/logos/${companiesList[index][0]}`} alt={`Logo ${index}`} width="60px" />
                        </Flex>
                    )
                })}
            </Flex>
        </Box>
        )
}

export default CompaniesRiver