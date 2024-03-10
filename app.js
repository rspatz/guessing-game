let maxNumber = parseInt(prompt('Enter the maximum number:'));
while (!maxNumber) {
  maxNumber = parseInt(prompt('Please enter a valid number!'));
}

const targetNum = Math.floor(Math.random() * maxNumber) + 1;
console.log(targetNum);
