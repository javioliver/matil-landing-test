import React, { useEffect } from "react"
import { Gradient } from "./gradient_2.jsx"

function MeshGradientBackground() {
  useEffect(() => {
    const gradient = new Gradient() as any
    gradient.initGradient("#gradient-canvas")
  }, [])
  return (
      <canvas id="gradient-canvas" style={{ "--gradient-color-1": "#11efe3", "--gradient-color-2": "#0073e6", "--gradient-color-3": "#00299c"} as React.CSSProperties}/>
   )
}

export default MeshGradientBackground