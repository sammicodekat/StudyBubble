import React, { Component } from 'react';
import { Entity } from 'aframe-react';

const EndGame = (props) => {
  const { restartDeck, score } = props;
  return (
    <Entity geometry={{ primitive: 'box', width: 10, height: 4,depth:0.3 }} position={[0, 1, -15]} material={{ color: '#99A7AA' }}>
      <Entity text={{ text: "Restart?" }} onClick={restartDeck} material={{ color: 'orange' }} position={[-1.8, 1, 0.5]} >
      </Entity>
    </Entity>
  )
}

export default EndGame;
