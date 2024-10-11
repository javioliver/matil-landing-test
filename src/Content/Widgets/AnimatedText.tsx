import React, { useEffect, useState } from 'react';
import { Text } from '@chakra-ui/react';
import ScrollAnimation from 'react-animate-on-scroll';

const AnimatedText = ({ text, startDelay = 0 }:{text:string, startDelay?:number}) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true);
  }, []);

  const words = text.split(' ')

  return (<> 
   
      {isClient && words.map((word, index) => (
           <span key={`fragment-${index}`} style={{ display: 'inline-block', marginRight: '0.3em' }} >
            {word}
          </span>
       ))}
 
 </>);
};

export default AnimatedText;
