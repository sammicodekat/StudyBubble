import {Entity} from 'aframe-react';
import React from 'react';
import Cloud from './Cloud'

export default props => (
  <Entity
    geometry={{primitive: 'box', width: 10, height: 6, depth: 14}}
    material={{shader: 'flat', color: '#fff'}}
    position={[10, 50, 0]}>



  </Entity>
);
