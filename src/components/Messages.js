import React, { Component } from 'react';
import { Entity } from 'aframe-react';

const Messages = (props) => {
  const message1 = 'turn around to choose your answer'
  const message2 = 'Are you ready?'
  return (
    <Entity>
      <Entity
        text={{ text: message1 }}
        material={{ color: 'green' }}
        position={[-(message1.length / 5.7), 3, -3]}
        rotation={[20, 0, 0]}
        visible="true">
      </Entity>

      <Entity
        bmfont-text={{ text: message2, color: 'white' }}
        position={[-(message2.length / 5.7), 0, 4]} >
        <a-animation
          begin="2000"
          easing="ease-in"
          attribute="visible"
          fill="forwards"
          from="true"
          to="false" />
      </Entity>
    </Entity>
  )
}

export default Messages;
