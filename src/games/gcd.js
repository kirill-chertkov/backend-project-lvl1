import * as cm from '../common';
import engine from '..';


const brainGcd = () => {
  // generate two random numbers
  const firstNumber = cm.getRandomNum();
  const secondNumber = cm.getRandomNum();
  // generate question string
  const questionString = `${firstNumber} ${secondNumber}`;
  // find GCD
  const correctAnswer = cm.gcd(firstNumber, secondNumber);

  return { question: questionString, answer: correctAnswer.toString() };
};

const gameProperties = {
  name: 'Find GCD',
  fn: brainGcd,
  rules: '\nGame Rules 💭\nFind the greatest common divisor of the given numbers.\n',
};

export default () => {
  engine(gameProperties);
};
