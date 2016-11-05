import { Entity } from 'aframe-react'
import React from 'react'

export default props => (
  <Entity
  geometry={{primitive: 'box', width: 20, height: 0, depth: 20}}
  material={{src: props.src, repeat: '10 10'}}
  scale={[1, 1, -1]}
  position={[0, 0, 0]}
   />
);
