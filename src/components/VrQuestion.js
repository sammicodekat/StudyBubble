import React, { Component } from 'react';
import { Entity } from 'aframe-react';

const VrQuestion = (props) => {
  const { question } = props;
  const { text1,text2,text3 } = question;
  return (
    <Entity geometry={{ primitive: 'box', width: 5, height: 4 }} position={[0, 1, -15]} material={{ color: 'red' }}>
      <Entity text={{ text: text1 }} material={{ color: 'orange' }} position={[-1.8, 1, 0.5]} visible="false">
        <a-animation begin="3500" easing="ease-in" attribute="visible"
          fill="forwards" from="false" to="true"
          />
      </Entity>
      <Entity text={{ text: text2 }} material={{ color: 'orange' }} position={[-1.8, 0, 0.5]} visible="false">
        <a-animation begin="3500" easing="ease-in" attribute="visible"
          fill="forwards" from="false" to="true"
          />
      </Entity>
      <Entity text={{ text: text3 }} material={{ color: 'orange' }} position={[-1.8, -1, 0.5]} visible="false">
        <a-animation begin="3500" easing="ease-in" attribute="visible"
          fill="forwards" from="false" to="true"
          />
      </Entity>
      <Entity text={{ text: 'turn around to choose your answer' }} material={{ color: 'green' }} position={[-5, 2.5, 1]} visible="false">
        <a-animation begin="5500" easing="ease-in" attribute="visible"
          fill="forwards" from="false" to="true"
          />
      </Entity>
      <Entity bmfont-text={{ text: 'Are you ready?', color: 'white' }} position={[-0.7, 0, 4]} >
        <a-animation begin="2000" easing="ease-in" attribute="visible"
          fill="forwards" from="true" to="false"
          />
      </Entity>
    </Entity>
  )
}

export default VrQuestion;
