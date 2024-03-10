let maxNumber = parseInt(prompt('Enter the maximum number:'));
while (!maxNumber) {
  maxNumber = parseInt(prompt('Please enter a valid number!'));
}

const targetNum = Math.floor(Math.random() * maxNumber) + 1;

let guess = parseInt(prompt('Enter your first guess!'));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
  if (guess === 'q') break;
  attempts++;
  if (guess > targetNum) {
    guess = prompt('Too high! Enter a new guess!');
  } else {
    guess = prompt('Too low! Enter a new guess!');
  }
}

if (guess === 'q') {
  console.log('Okay, quitting...');
} else {
  console.log(`You GOT it! It took you ${attempts} guess(es).`);
}
