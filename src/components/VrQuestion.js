import React, { Component } from 'react';
import { Entity } from 'aframe-react';

const VrQuestion = (props) => {
  const { question } = props;
  const { text } = question;
  return (
    <Entity
      geometry={{ primitive: 'box', width: 5, height: 1, depth: 0.1}}
      material={{ color: '#99a7aa' }}
      position={[0, 1, -100]}
      rotation={[-20, 0, 0]}
      animation__pos={{property: 'position',
                         easing: 'easeOutSine',
                            dur: 3000,
                             to: '0, 1, -4'}}>

      <Entity
        text={{ text: text, size: 0.25 }}
        material={{ color: 'orange' }}
        position={[-(text.length / 13), -0.2, 0.5]}
        visible="true">
      </Entity>

      <Entity
        text={{ text: 'turn around to choose your answer' }}
        material={{ color: '#99a7aa' }}
        position={[-(text.length / 5.7), 3, -3]}
        rotation={[20, 0, 0]}
        visible="true">
      </Entity>

      <Entity
        bmfont-text={{ text: 'Are you ready?', color: 'white' }}
        position={[-0.7, 0, 4]}>
        {/* <a-animation
          delay="2000"
          easing="ease-in"
          attribute="visible"
          fill="forwards"
          from="true"
          to="false" /> */}
      </Entity>

    </Entity>
  )
}

export default VrQuestion;
