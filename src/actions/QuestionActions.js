import axios from 'axios';

export function addQuestion (question) {
  return {
    type: 'QUESTION_ADD',
    payload: question
  };
}
