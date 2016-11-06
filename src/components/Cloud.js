import {Entity} from 'aframe-react';
import React from 'react';

export default props => (
  <Entity
    geometry={{primitive: 'box', width: 16, height: 6, depth: 14}}
    material={{shader: 'flat', color: '#fff'}}
    position={[props.xpos, props.ypos, props.zpos]}
    animation__pos={{property: 'position',
                          dur: props.duration,
                           to: '0, 1, 100',
                         loop: true}}>



  </Entity>
);
