import React, { Component } from 'react';
import { Entity } from 'aframe-react';

const VrAnswers = (props) => {
  const { answers, correct, _correctAnswer, _wrongAnswer, wrongCount } = props;
  let a = 3;
  let b = 1;

  const MultipleChoices = answers.map((answer, i) => {
    if (i === 1) {
      a = -3;
    } else if (i === 2) {
      a = 3;
      b = 4;
    } else if (i === 3) {
      a = -3;
      b = 4;
    }
    if (i === correct) {
      return (
        <Entity key={i}
        geometry={{ primitive: 'box', width: 5, height: 2, depth: 0.1 }}
        position={[a, b, 15]}
        material={{ color: '#99a7aa' }}
        rotation="0 180 0"
        animation_correct={{property: 'material.color',
                           begin: 'click',
                          easing: 'easeInSine',
                              to: 'green',
                             dur: 500}}>
          <a-animation begin="click" easing="ease-in" attribute="material.color"
            from="green" to="gray" dur="1500"
          />
          <Entity text={{ text: answer }} material={{ color: 'orange' }} position={[-1.8, 0, 0.5]} visible="false">
            <a-animation begin="3500" easing="ease-in" attribute="visible"
              fill="forwards" from="false" to="true"
            />
          </Entity>
          <Entity onClick={() => setTimeout(_correctAnswer, 2500)} geometry={{ primitive: 'circle', radius: '0.7' }} material={{ color: 'blue' }} position={[1.65, -0.2, 0.6]} visible="true" />
        </Entity>
      ); } else {
      return (
        <Entity key={i} geometry={{ primitive: 'box', width: 5, height: 2 }} position={[a, b, 15]} material={{ color: 'gray' }} rotation="0 180 0">
          <a-animation begin="click" easing="linear" attribute="material.color"
            from="gray" to="red" dur="500"
          />
          <a-animation begin="click" easing="ease-in" attribute="material.color"
            from="red" to="gray" dur="1500"
          />
          <Entity text={{ text: answer }} material={{ color: 'orange' }} position={[-1.8, 0, 0.5]} visible="false">
            <a-animation begin="3500" easing="ease-in" attribute="visible"
              fill="forwards" from="false" to="true"
            />
          </Entity>
          <Entity onClick={() => setTimeout(_wrongAnswer, 2500)} geometry={{ primitive: 'circle', radius: '0.7' }} material={{ color: 'blue' }} position={[1.65, -0.2, 0.6]} visible="true" />
        </Entity>
      );
    }
  });
  return (
    <Entity>
      {MultipleChoices}
    </Entity>
  );
};

export default VrAnswers;
