import axios from 'axios';

export function addQuestion (question) {
  return {
    type: 'QUESTION_ADD',
    payload: question
  };
}

export function getQuestion() {
  return {
    type: 'QUESTION_GET'
  };
}
