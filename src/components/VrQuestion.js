import React, { Component } from 'react';
import { Entity } from 'aframe-react';

const VrQuestion = (props) => {
  const { question, count } = props;
  const { text } = question;
  let z
  if (count === 0) z = -100;
  else z = -4;
  let r = 0;
  let a = -4;
  if(count % 2){
    z = 4;
    r = 180;
    a = 4
  }

  const renderQuestion = () => {
    return(
      <Entity
        geometry={{ primitive: 'box', width: 5, height: 1, depth: 0.1}}
        material={{ color: '#99a7aa' }}
        position={[0, 1, z]}
        rotation={[-20, r, 0]}
        animation__pos={{property: 'position',
          easing: 'easeOutSine',
          dur: 3000,
          from: `0, 1, ${z}`,
          to: `0, 1, ${a}`}}>

          <Entity
            text={{ text: text, size: 0.25 }}
            material={{ color: 'orange' }}
            position={[-(text.length / 13), -0.2, 0.5]}
            visible="true">
          </Entity>

        {count === 0 ? <Entity
          text={{ text: 'turn around to choose your answer' }}
          material={{ color: '#99a7aa' }}
          position={[-(text.length / 5.8), 3, -3]}
          rotation={[20, 0, 0]}
          visible="true">
        </Entity> : null}

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

  return (
    renderQuestion()
      )
    }

    export default VrQuestion;
