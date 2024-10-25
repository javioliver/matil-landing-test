import React, { useEffect } from "react"
import { Gradient } from "./gradient_2.jsx"


function MeshGradientBackground({colors, id}:{colors:[string, string, string, string], id?:string}) {
  useEffect(() => {
    const gradient = new Gradient() as any
    gradient.initGradient("#gradient-canvas")
  }, [])
  return (
      <canvas id="gradient-canvas" style={{ position: 'absolute', height: '100%', width: '100%', background: colors[0], "--gradient-color-1": (colors[0]) , "--gradient-color-2":colors[1], "--gradient-color-3": colors[2], "--gradient-color-4": colors[3]} as React.CSSProperties}/>
   )
}

export default MeshGradientBackground

