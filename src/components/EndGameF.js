import React, { Component } from 'react';
import { Entity } from 'aframe-react';

const EndGame = (props) => {
  const { restartDeck, score } = props;
  return (
    <Entity onClick={restartDeck} geometry={{ primitive: 'box', width: 10, height: 4,depth:0.3 }} position={[0, 1, -15]} material={{ color: '#99A7AA' }}>
      <Entity text={{ text: "Restart?" }} material={{ color: 'orange' }} position={[-1.8, -0.7, 0.5]} >
      </Entity>
      <Entity text={{text: `Final Score: ${score}`}} material={{ color: 'orange' }} position={[-2.33, 0.73, 0.22]} >
      </Entity>
    </Entity>
  )
}

export default EndGame;
