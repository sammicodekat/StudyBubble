export function correct(score) {
  return {
    type: 'CORRECT',
    payload: score,
  }
}
