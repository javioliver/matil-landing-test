//NEXT
import { useEffect, useState } from 'react'
import Image from 'next/image'
//FRONT
import { Flex, Box } from '@chakra-ui/react'
import "animate.css/animate.compat.css"
 
const CompaniesRiver = () => {

    //COMPANIES LOGOS LIST
    const companiesList:[string, string][] = [
        ['shopify_logo.svg', 'green.100'], ['wordpress_logo.svg', 'gray.200'], 
        ['hubspot_logo.svg', 'orange.200'],['square_logo.svg','purple.50'],
        ['slack_logo.png', 'gray.100'], ['zapier_logo.svg', 'orange.100'], 
        ['stripe_logo.webp', 'purple.100'], ['salesforce_logo.png', 'blue.100'],
        ['mailchimp_logo.svg', 'yellow.100'], ['airtable_logo.webp', 'yellow.100'],
        ['zoho_logo.png', 'white'], 
        ['jira_logo.svg', 'white'], ['sage_logo.png', 'green.100'],
        ['google_calendar_logo.webp', 'white'], ['sendgrid_logo.svg', 'blue.100'],
        ['odoo_logo.png', 'purple.100 '], ['drive_logo.png', 'white'],
        ['magento_logo.webp', 'orange.100 '], ['prestashop_logo.png', 'gray.100'],
        ['woo_logo.svg', 'purple.100 '], ['wix_logo.png', 'gray.100'],
    ]


 
    const randomize = (min:number, max:number) => Math.random() * (max - min) + min
    const generateInitialPositions = (count: number, windowHeight: number) => {
        const positions: { x: number, y: number }[] = []
        const minDistance = 15
        const isTooClose = (x1: number, y1: number, x2: number, y2: number) => {
            const dx = x1 - x2
            const dy = y1 - y2
            return Math.sqrt(dx * dx + dy * dy) < minDistance
        }
        for (let i = 0; i < count; i++) {
            let x = 0
            let y = count
            let positionValid = false
            let attempts = 0
            while (!positionValid && attempts < 100) {
                x = randomize(0, 80)
                positionValid = true
                for (const pos of positions) {
                    if (isTooClose(x, y, pos.x, pos.y)) {
                    positionValid = false
                    break
                    }
                }
                attempts++
            }
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
        <Box position="relative"  overflow={'hidden'} height="400px" width="100%">
            <Flex  position='relative' height="400px"  >
                {initialPositions.map((pos, index) => {
                    const randomScale = randomize(0.7, 0.8);
                    return (
                        <Box  animation={`moveUp 30s linear  ${index*1.5}s infinite`} left={`${pos.x}%`}   bottom={`-200px`}   position='absolute' > 
                            <Flex style={{transform: `scale(${randomScale})`}} key={index} boxShadow={'rgba(0, 0, 0, 0.1) 0px 15px 35px 0px, rgba(0, 0, 0, 0.07) 0px 3px 10px 0px'} borderRadius="50%" width="100px" height="100px" display="flex"justifyContent="center" alignItems="center"
                            backgroundColor={companiesList[index][1]} >
                                <Image src={`/images/logos/${companiesList[index][0]}`} alt={`Logo ${index}`} width={60} height={60} />
                            </Flex>
                        </Box>
                    )
                })}
            </Flex>
        </Box>
        )
}

export default CompaniesRiver