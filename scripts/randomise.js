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

function modifiedDay(rounds) {
  // Create a placeholder string for our results
  let results = "Here are today's races:";

  // Check to see what is modified
  let isCycleDay = modifierCheck();
  let isReverseDay = modifierCheck();
  let isChainDay = modifierCheck();

  // If it's a cycle day...
  if (isCycleDay) {
    // Create an empty array for our cycled names
    let cycledNames = [];

    // Randomly assign one of the two possible cycles without repetition
    randomNumber(1,2) === 1 ? cycledNames = ["Molly", "Hugh", "Hywel"] : cycledNames = ["Hywel", "Molly", "Hugh"];

    // Append to our results string
    results += `\nToday is a cycle day! Hugh scores points for ${cycledNames[0]}. Hywel scores points for ${cycledNames[1]}. Molly scores points for ${cycledNames[2]}.`;
  } else results += `\nToday is not a cycle day.`;

  // If it's a reverse day...
  if (isReverseDay) {
    results += `\nToday is a reverse day! I suggest reversing Race ${randomNumber(1,rounds)}.`;
  } else results += `\nToday is not a cycle day.`;

  // If it's a chain day...
  if (isChainDay) {
    results += `\nToday is a chain day! Don't forget to announce after the first race.`;
  } else results += `\nToday is not a chain day.`;

  return results;
}

function woodyWoodpeckerDay(rounds) {
  // Create a placeholder string for our results
  let results = "It's Woody Woodpecker Day! Here are today's random rounds and how much they're worth:";

  // Generate an array of points
  let points = generatePoints(rounds);

  // Generate an array of round selections
  let roundTypes = [];

  for (i = 0; i < rounds; i++) {
    roundTypes.push(randomNumber(1,5));
  }

  // Map these to outputted round types and append to the results
  roundTypes.forEach((type, round) => {
    switch (type) {
      case 1:
        results += `\nRound ${round + 1}: Regular Round (${points[round]} points).`
        break;
      case 2:
        results += `\nRound ${round + 1}: Pursuit Round (${points[round]} points).`
        break;
      case 3:
        results += `\nRound ${round + 1}: Countdown Round (${points[round]} points).`
        break;
      case 4:
        results += `\nRound ${round + 1}: TENET Round (${points[round]} points).`
        break;
      case 5:
        results += `\nRound ${round + 1}: Chaos Round (${points[round]} points).`
        break;
    }
  })

  return results;

}