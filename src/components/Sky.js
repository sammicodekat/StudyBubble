import {Entity} from 'aframe-react';
import React from 'react';
import Cloud from './Cloud'

export default props => (
  <Entity
    geometry={{primitive: 'sphere', radius: 100}}
    material={{shader: 'flat', color: '#aaf3ff'}}
    scale="1 1 -2">

    <Cloud />

  </Entity>
);
