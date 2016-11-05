import { Entity } from 'aframe-react'
import React from 'react'

export default props => {
  return (
    <Entity
    text={{text: `score: ${props.score}`}}
    material={{color: '#31b0d5'}}
    position={[3, 0.2, -5]}
    bevelEnabled={true}
    rotation={[0, -30, 0]}/>
  )
};
