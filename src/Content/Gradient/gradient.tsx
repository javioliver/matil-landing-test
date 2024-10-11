import React, { useEffect } from "react"
import { Gradient } from "./gradient_2.jsx"

function MeshGradientBackground({colors}:{colors:[string, string, string]}) {
  useEffect(() => {
    const gradient = new Gradient() as any
    gradient.initGradient("#gradient-canvas")
  }, [])
  return (
      <canvas id="gradient-canvas" style={{ "--gradient-color-1": colors[0] , "--gradient-color-2":colors[1], "--gradient-color-3": colors[2]} as React.CSSProperties}/>
   )
}

export default MeshGradientBackground

