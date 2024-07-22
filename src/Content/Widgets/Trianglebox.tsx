import React from "react"

const Triangle = ({ w = 20, h = 10, direction = "right", color = "#2C5282", backgroundColor = "#FFFFFF" }:{ w?:number, h?:number, direction?:"right" | "top" | "bottom" | "left", color?:string, backgroundColor?:string}) => {
  
  const points = {
    top: [`${w / 2},0`, `0,${h}`, `${w},${h}`],
    right: [`0,0`, `0,${h}`, `${w},${h / 2}`],
    bottom: [`0,0`, `${w},0`, `${w / 2},${h}`],
    left: [`${w},0`, `${w},${h}`, `0,${h / 2}`]
  }

  const baseStart1 = points[direction][0];
  const baseEnd1 = points[direction][2];
  const baseStart2 = points[direction][2];
  const baseEnd2 = points[direction][1];

  return (<> 
     <svg width={w} height={h} >
      <polygon points={points[direction].join(" ")} fill={backgroundColor} stroke='nune'/>
      <line
        x1={baseStart1.split(",")[0]}
        y1={baseStart1.split(",")[1]}
        x2={baseEnd1.split(",")[0]}
        y2={baseEnd1.split(",")[1]}
        stroke={color} 
        strokeWidth="1"
      />
         <line
        x1={baseStart2.split(",")[0]}
        y1={baseStart2.split(",")[1]}
        x2={baseEnd2.split(",")[0]}
        y2={baseEnd2.split(",")[1]}
        stroke={color} 
        strokeWidth="1"
      />
      Sorry, your browser does not support inline SVG.
    </svg>
    </>
  );
};

export default Triangle
