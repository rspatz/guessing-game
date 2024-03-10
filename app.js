let maxNumber = parseInt(prompt('Enter the maximum number:'));
while (!maxNumber) {
  maxNumber = parseInt(prompt('Please enter a valid number!'));
}

const targetNum = Math.floor(Math.random() * maxNumber) + 1;

let guess = prompt(`Enter your first guess! (Type 'q' to quit.)`);
let attempts = 1;

while (parseInt(guess) !== targetNum) {
  if (guess === 'q') break;
  guess === parseInt('guess');
  if (guess > targetNum) {
    guess = prompt('Too high! Enter a new guess!');
    attempts++;
  } else if (guess < targetNum) {
    guess = prompt('Too low! Enter a new guess!');
    attempts++;
  } else {
    guess = prompt(`Invalid guess. Please enter a number or 'q' to quit.`);
  }
}

if (guess === 'q') {
  console.log('Okay, quitting...');
} else {
  console.log(`You GOT it! It took you ${attempts} guess(es).`);
}
