import { Entity } from 'aframe-react'
import React from 'react'

export default props => {
  return (
    <Entity
    text={{text: `score: ${props.score}`}}
    material={{color: 'darkgray'}}
    position={[3, 0.2, -5]}
    rotation={[0, -30, 0]}/>
  )
};
