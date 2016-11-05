import { Entity } from 'aframe-react'
import React from 'react'

export default props => (
  <Entity
  geometry={{primitive: 'plane', width: 20, height: 20,}}
  material={{src: props.src, repeat: '10 10'}}
  scale={[1, 1, -1]}
  position={[0, 0, 0]}
  rotation={[-90, 0, 0]} />
);
