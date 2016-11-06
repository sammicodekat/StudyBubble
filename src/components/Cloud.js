import {Entity} from 'aframe-react';
import React from 'react';

export default props => (
  <Entity
    geometry={{primitive: 'box', width: 10, height: 6, depth: 14}}
    material={{shader: 'flat', color: '#fff'}}
    position={[10, 50, 0]}
    animation__pos={{property: 'position',
                          dur: 20000,
                           to: '0, 1, 200'}}>



  </Entity>
);
