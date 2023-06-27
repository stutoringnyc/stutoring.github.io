import React, { Component }  from 'react';
import styles from "./logo.module.css"; 


const width = 31;
const increment = 7;
const increment2 = 14;
const increment3 = 21;

const side = width/2;
const corner = side*(Math.sqrt(3))

const width2 = width-increment;
const side2 = width2/2;
const corner2 = side2*(Math.sqrt(3))

const width3 = width2-increment;
const side3 = width3/2;
const corner3 = side3*(Math.sqrt(3))

const width4 = width3-increment;
const side4 = width4/2;
const corner4 = side4*(Math.sqrt(3))

// var hex_dim = []
// for (var i=0; i<width; i+=10){
//     var side = width/2;
//     var corner = side*(Math.sqrt(3))
//     var hex = hex_dim.push(`${corner} 0, ${2*corner} ${side}, ${2*corner} ${side+width}, ${corner} ${2*width}, 0 ${side+width}, 0 ${side}`)
// }
// var hex = `${corner} 0, ${2*corner} ${side}, ${2*corner} ${side+width}, ${corner} ${2*width}, 0 ${side+width}, 0 ${side}`,
// var hex2 = `${corner2+10} 10, ${2*corner2+10} ${side2+10}, ${2*corner2+10} ${side2+width2+10}, ${corner2+10} ${2*width2+10}, 10 ${side2+width2+10}, 10 ${side2+10}`,
// var hex3 = `${corner3+increment2} ${increment2} ${2*corner3+increment2} ${side3+increment2}, ${2*corner3+increment2} ${side3+width3+increment2}, ${corner3+increment2} ${2*width3+increment2}, ${increment2} ${side3+width3+increment2}, ${increment2} ${side3+increment2}`,
// const hex4 = `${corner4+increment3} ${increment3} ${2*corner4+increment3} ${side4+increment3}, ${2*corner4+increment3} ${side4+width4+increment3}, ${corner4+increment3} ${2*width4+increment3}, ${increment3} ${side4+width4+increment3}, ${increment3} ${side4+increment3}`,
// const hex_dim = [hex.split(","), hex2.split(","), hex3.split(","), hex4.split(",")],

// const animation = `${hex_dim[choose(4)][0]}, 
//             ${hex_dim[choose(4)][1]}, 
//             ${hex_dim[choose(4)][2]}, 
//             ${hex_dim[choose(4)][3]},
//             ${hex_dim[choose(4)][4]}, 
//             ${hex_dim[choose(4)][5]}`
// console.log(animation)

function choose(max) {
    return Math.floor(Math.random() * max);
}

const LogoIcon = ({
	hex = `${corner} 0, ${2*corner} ${side}, ${2*corner} ${side+width}, ${corner} ${2*width}, 0 ${side+width}, 0 ${side}`,
    hex2 = `${corner2+increment} ${increment}, ${2*corner2+increment} ${side2+increment}, ${2*corner2+increment} ${side2+width2+increment}, ${corner2+increment} ${2*width2+increment}, ${increment} ${side2+width2+increment}, ${increment} ${side2+increment}`,
    hex3 = `${corner3+increment2} ${increment2} ${2*corner3+increment2} ${side3+increment2}, ${2*corner3+increment2} ${side3+width3+increment2}, ${corner3+increment2} ${2*width3+increment2}, ${increment2} ${side3+width3+increment2}, ${increment2} ${side3+increment2}`,
    hex4 = `${corner4+increment3} ${increment3} ${2*corner4+increment3} ${side4+increment3}, ${2*corner4+increment3} ${side4+width4+increment3}, ${corner4+increment3} ${2*width4+increment3}, ${increment3} ${side4+width4+increment3}, ${increment3} ${side4+increment3}`,
    hex_dim = [hex, hex2, hex3, hex4],
    
    origin = `${side+0.1+width/2} ${side+0.1+width/2}, ${side+width/2} ${side+width/2}, ${side+width/2} ${side+width/2}, ${side+width/2} ${side+width/2}, ${side+width/2} ${side+width/2}, ${side+width/2} ${side+width/2}`,
    // animation = `${hex_dim[choose(4)][0]}, 
    //             ${hex_dim[choose(4)][1]}, 
    //             ${hex_dim[choose(4)][2]}, 
    //             ${hex_dim[choose(4)][3]},
    //             ${hex_dim[choose(4)][4]}, 
    //             ${hex_dim[choose(4)][5]}`,
}) => (
  <svg width="4.5rem" height="4.5rem">
        <polygon points={hex} stroke="black" 
 			fill="white"  />
        <polygon points={hex2} 
 			fill="white" stroke="black" strokeWidth="1" />
        <polygon points={hex3} 
 			fill="white" stroke="black" strokeWidth="1" />
        <polygon points={hex4} 
            fill="white" stroke="black" strokeWidth="1" />
        <polygon className={styles.svg} points={hex4} />
        <polygon className={styles.svg} points={hex3} />
        <polygon className={styles.svg} points={hex2} />
        <polygon className={styles.svg} points={hex} />
   
  </svg>
);

export default LogoIcon;