import { useState, useEffect } from 'react'

const AnimatedText = ({ text, startDelay = 0 }: { text: string, startDelay?: number }) => {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {setIsClient(true)}, [])
  const words = text.split(' ')
  return (
    <>
      {isClient && words.map((word, index) => (
        <span  key={`fragment-${index}`}  className="animated-word"  style={{ animationDelay: `${startDelay + index * 0.1}s` }}>
          {word}
        </span>
      ))}
    </>
  )
}

export default AnimatedText
