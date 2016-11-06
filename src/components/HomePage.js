import React, { Component } from 'react';
import { connect } from 'react-redux';

@connect()
export default class HomePage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='container'>
        <div className="bodySection">
          <img className="logo" src="./images/studyBubble.png" />
          <div className="theText">
            <h1>Study Bubble</h1>
            <p>A fully immersive learning environment, Study Bubble allows users to focus 100% of their attention on the subject they are studying.</p>
            <p>Our app combines a traditional web-app allowing creation and selection of study decks with a vr 'bubble' that is used for learning.</p>
            <p>Made using React, Redux, Express and A-Frame, Study Bubble is a practical and modern design that harnesses the immersive power of VR to offer a unique educational experience.</p>
            <img className="screenshot" src="./images/sb_screenshot.png" />
          </div>
        </div>
      </div>
    )
  }
}
