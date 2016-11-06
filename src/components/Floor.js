import { Entity } from 'aframe-react'
import React from 'react'

export default props => (
  <Entity
    geometry={{ primitive: 'circle', radius: 10 }}
    // material={{src: props.src, repeat: '10 10'}}
    material={{ color: '#42c88a' }}
    scale={[1, 1, -1]}
    position={[0, 0, 0]}
    rotation={[-90, 0, 0]}
  />
);
