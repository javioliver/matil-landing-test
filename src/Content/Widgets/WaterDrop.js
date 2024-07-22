import { Box, Icon } from '@chakra-ui/react'
import { MdWaterDrop } from 'react-icons/md'

const WaterDropBox = ({ rotation = 0, color='green', icon = MdWaterDrop, iconSize = '24px' }) => {
  return (

    <Box bg={color} width="50px" height={'50px'} display="flex" alignItems="center" justifyContent="center" borderRadius="50% 50% 50% 0" transform={`rotate(${225 - rotation}deg)`}>
      <Icon  transform={`rotate(${-(225 - rotation)}deg)`} as={icon} color="white" boxSize={iconSize} />
    </Box>
  )
}

export default WaterDropBox


