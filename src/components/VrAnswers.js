import React, { Component } from 'react';
import { Entity } from 'aframe-react';

const VrAnswers = (props) => {
  const { answers, correct, _correctAnswer, _wrongAnswer } = props;
  let a = 3;
  let b = 1;
  let MultipleChoices = answers.map( (answer, i) => {
    if(i===1){
      a=-3;
    }else if(i===2){
      a=3;
      b=4;
    }else if(i===3){
      a=-3;
      b=4;
    }
    if(i === correct){
      return (
        <Entity key={i} onClick={_correctAnswer} geometry={{ primitive: 'box', width: 5, height: 2 }} position={[a, b, 15]} material={{ color: 'red' }} rotation="0 180 0">
          <Entity text={{ text: answer }} material={{ color: 'orange' }} position={[-1.8, 0, 0.5]} visible="false">
            <a-animation begin="3500" easing="ease-in" attribute="visible"
              fill="forwards" from="false" to="true"
              />
          </Entity>
        </Entity>
      )}
        else {
          return (
            <Entity key={i} onClick={_wrongAnswer} geometry={{ primitive: 'box', width: 5, height: 2 }} position={[a, b, 15]} material={{ color: 'red' }} rotation="0 180 0">
              <Entity text={{ text: answer }} material={{ color: 'orange' }} position={[-1.8, 0, 0.5]} visible="false">
                <a-animation begin="3500" easing="ease-in" attribute="visible"
                  fill="forwards" from="false" to="true"
                  />
              </Entity>
            </Entity>
          )
        }
      })
      return (
        <Entity>
          {MultipleChoices}
        </Entity>
      )
    }

    export default VrAnswers;
