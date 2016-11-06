import { Entity } from 'aframe-react';
import React from 'react';
import Cloud from './Cloud'

export default props => (
  <Entity
    geometry={{ primitive: 'sphere', radius: 100 }}
    material={{ shader: 'flat', color: '#aaf3ff' }}
    scale="1 1 -2"
  >

    <Cloud xpos={10} ypos={70} zpos={-100} duration={60000} />
    <Cloud xpos={-40} ypos={80} zpos={-200} duration={80000} />
    <Cloud xpos={60} ypos={60} zpos={-70} duration={70000} />
    <Cloud xpos={-70} ypos={90} zpos={-140} duration={90000} />

  </Entity>
);
