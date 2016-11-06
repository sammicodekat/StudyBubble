import React, { Component } from 'react';
import { Entity } from 'aframe-react';

const VrAnswers = (props) => {
  const { answers, correct, _correctAnswer, _wrongAnswer, wrongCount } = props;
  let a = 3;
  let b = 1;
  let rx = -10;
  let ry = 190;
  let rz = 0;

  const MultipleChoices = answers.map((answer, i) => {
    if (i === 1) {
      a = -3;
      rx = -10;
      ry = 170;
      rz = 0;
    } else if (i === 2) {
      a = 3;
      b = 4;
      rx = 10;
      ry = 190;
      rz = 0;
    } else if (i === 3) {
      a = -3;
      b = 4;
      rx = 10;
      ry = 170;
      rz = 0;
    }
    if (i === correct) {
      return (
        <Entity key={i} onClick={() => setTimeout(_correctAnswer, 2500)}
          position={[a, b, 5]}
          rotation={[rx, ry, rz]}>

          <Entity
            geometry={{ primitive: 'box', width: 5, height: 2, depth: 0.1 }}
            material={{ color: '#99a7aa' }}
            animation__correct={{property: 'material.color',
                              startEvents: 'click',
                                   easing: 'easeInSine',
                                       to: '#52e555',
                                      dur: 500}}
            animation__reset={{property: 'material.color',
                            startEvents: 'animation__correct-complete',
                                 easing: 'easeInSine',
                                     to: '#99a7aa',
                                    dur: 500 }}>

            <Entity
              geometry={{ primitive: 'plane', width: 5, height: 2}}
              material={{ transparent: true, opacity: 0 }}
              position={[0, 0, 0.7]}/>

            <Entity
              text={{ text: answer }}
              material={{ color: 'orange' }}
              position={[-1.8, 0, 0.5]}
              visible= {false}
              animation={{property: 'visible',
                             delay: 3500,
                            easing: 'easeOutSine',
                              from: false,
                                to: true }}>
            </Entity>
          </Entity>
        </Entity>
      ); } else {
      return (
        <Entity key={i} onClick={() => setTimeout(_wrongAnswer, 2500)}
          position={[a, b, 5]}
          rotation={[rx, ry, rz]}>

          <Entity
            geometry={{ primitive: 'box', width: 5, height: 2, depth: 0.1 }}
            material={{ color: '#99a7aa' }}
            animation__correct={{property: 'material.color',
                              startEvents: 'click',
                                   easing: 'easeInSine',
                                       to: '#e25178',
                                      dur: 500}}
            animation__reset={{property: 'material.color',
                            startEvents: 'animation__correct-complete',
                                 easing: 'easeInSine',
                                     to: '#99a7aa',
                                    dur: 500 }}>

            <Entity
              geometry={{ primitive: 'plane', width: 5, height: 2}}
              material={{ transparent: true, opacity: 0 }}
              position={[0, 0, 0.7]}/>

            <Entity
              text={{ text: answer }}
              material={{ color: 'orange' }}
              position={[-1.8, 0, 0.5]}
              visible={false}
              animation={{property: 'visible',
                             delay: 3500,
                            easing: 'easeOutSine',
                              from: false,
                                to: true }}>
            </Entity>
          </Entity>
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
