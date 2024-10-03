import React, { useEffect } from "react"
import { Gradient } from "./gradient_2.jsx"
import { Box } from "@chakra-ui/react"
function MeshGradientBackground() {
  useEffect(() => {
    // Initialize the gradient after the component mounts
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");
  }, []);

  return (
    <Box width={'100vw'} zIndex={1} mt='-15vh' height={'60vh'} top={0} clipPath='polygon(0 0, 100% 60%, 100% 100%, 0 40%)'> 
      <canvas
        id="gradient-canvas"
        style={{ "--gradient-color-1": "#11efe3", "--gradient-color-2": "#0073e6", "--gradient-color-3": "#00299c"} as React.CSSProperties}
      />
  </Box>
  )
}

export default MeshGradientBackground