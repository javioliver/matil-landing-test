import React, { useState, useEffect } from 'react'

const AnimatedPercentage = ({start, end}:{start:number, end:number}) => {
  const [percentage, setPercentage] = useState(0)
  const [inView, setInView] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)

  // Función para manejar el scroll y verificar si el componente está en la vista
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('percentage-element')
      const rect = element?.getBoundingClientRect()
      if ((rect?.top || 0) >= 0 && (rect?.bottom || 0) <= window.innerHeight) setInView(true)
      else setInView(false)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => {window.removeEventListener('scroll', handleScroll)}
  }, [])

  // Animación de los números
  useEffect(() => {
    if (inView && !hasAnimated) {
        setHasAnimated(true)
      const duration = 2000
      const increment = end / (duration / 100)
      const interval = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(interval)
          setPercentage(end)
        } 
        else setPercentage(Math.ceil(start))
      }, 100)
    }
  }, [inView])

  return (
    <span id="percentage-element">
      {percentage}
    </span>
  )
}

export default AnimatedPercentage;
