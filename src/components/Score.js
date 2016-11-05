import { Entity } from 'aframe-react'
import React from 'react'

export default props => {
  return (
    <Entity
    text={{text: `score: ${props.score}`}}
    material={{color: 'darkgray'}}
    position={[0, 0.6, -3]}/>
  )
};
