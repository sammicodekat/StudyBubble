import React, { Component } from 'react';
import { Entity } from 'aframe-react';

const VrAnswers = (props) => {
  const { answers, correct, _correctAnswer, _wrongAnswer, wrongCount,count } = props;
  let a = 3;
  let b = 1;
  let z = 5;
  let r = 180;

  if (count % 2) {
    z = -5;
    r = 0;
  }

  let rx = -10;
  let ry
  r === 180 ? ry = r + 10 : ry = r - 10;
  let rz = 0;

  const MultipleChoices = answers.map((answer, i) => {
    if (i === 1) {
      a = -3;
      rx = -10;
      r === 180 ? ry = r - 10 : ry = r + 10;
    } else if (i === 2) {
      a = 3;
      b = 4;
      rx = 10;
      r === 180 ? ry = r + 10 : ry = r - 10;
    } else if (i === 3) {
      a = -3;
      b = 4;
      rx = 10;
      r === 180 ? ry = r - 10 : ry = r + 10;
    }

    if (i === correct) {
      return (
        <Entity key={i} onClick={() => setTimeout(_correctAnswer, 2500)}
          position={[a, b, z]}
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
          position={[a, b, z]}
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
