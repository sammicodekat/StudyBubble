import { Entity } from 'aframe-react'
import React from 'react'

export default props => (
  <Entity
  geometry={{primitive: 'box', radius: 1}}
  material={{shader: 'standard', src: props.src}}
  scale="1 1 -2"
   />
);
