// Wikirace Randomiser v1.0

function randomNumber(lower, upper) {
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
}

function generatePoints(rounds) {
  // Create an empty array to store round points values
  let points = [];

  // Add randomly generated points value to array for number of rounds
  for (i = 0; i < rounds; i++) {
    points.push(randomNumber(1,3));
  }

  // Return the final array
  return points;
}

function modifierCheck() {
  return randomNumber(1,3) === 3 ? true : false;
}

function regularDay(rounds) {
  let points = generatePoints(rounds);

  points.forEach((point, round) => console.log(`Race ${round + 1}: ${point} points`));
}