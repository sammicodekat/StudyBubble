import { Entity } from 'aframe-react'
import React from 'react'

export default props => {
  return (
    <Entity
    text={{text: `score: ${props.score}`}}
    material={{color: '#31b0d5'}}
    position={props.position}
    bevelEnabled={true}
    bevelSize={8}
    bevelThickness={12}
    curveSegments={12}
    rotation={props.rotation}/>
  )
};
