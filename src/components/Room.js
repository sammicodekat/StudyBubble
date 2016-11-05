import { Entity } from 'aframe-react'
import React from 'react'

export default props => (
  <Entity
    geometry={{primitive: 'sphere'}}
    radius={2}
    position={[0, 0, 0]}
    material={{color: '#aeecfc'}}
    scale={"1 1 -1"}/>
);
