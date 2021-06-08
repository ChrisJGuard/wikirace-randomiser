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
  // Create a placeholder string for our results
  results = "Today's race points are as follows:<br>";

  // Generate a random points array
  let points = generatePoints(rounds);

  // Append each points value to the results string
  points.forEach((point, round) => results += `<br><strong>Race ${round + 1}:</strong> ${point} point(s)`);

  return results;
}

function modifiedDay(rounds) {
  // Create a placeholder string for our results
  let results = "Here are today's modifications:<br>";

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
    results += `<br><strong>Cycle Day:</strong> YES.<br>Hugh scores points for ${cycledNames[0]}.<br>Hywel scores points for ${cycledNames[1]}.<br>Molly scores points for ${cycledNames[2]}.<br>`;
  } else results += `<br><strong>Cycle Day:</strong> NO.<br>`;

  // If it's a reverse day...
  if (isReverseDay) {
    results += `<br><strong>Reverse Day:</strong> YES.<br>[Reverse Race ${randomNumber(1,rounds)}]<br>`;
  } else results += `<br><strong>Reverse Day:</strong> NO.<br>`;

  // If it's a chain day...
  if (isChainDay) {
    results += `<br><strong>Chain Day:</strong> YES.<br>[Announce after Race 1]<br><br>`;
  } else results += `<br><strong>Chain Day:</strong> NO.<br><br>`;

  // Run the regularDay function to generate points for each round, and append
  results += regularDay(rounds);

  return results;
}

function woodyWoodpeckerDay(rounds) {
  // Create a placeholder string for our results
  let results = "Here are today's random rounds:<br>";

  // Generate an array of points
  let points = generatePoints(rounds);

  // Generate an array of round selections
  let roundTypes = [];

  for (i = 0; i < rounds - 1; i++) {
    roundTypes.push(randomNumber(1,5));
  }

  // Map these to outputted round types and append to the results
  roundTypes.forEach((type, round) => {
    switch (type) {
      case 1:
        results += `<br><strong>Race ${round + 1}:</strong><br> Regular Round<br>${points[round]} point(s)<br>`
        break;
      case 2:
        results += `<br><strong>Race ${round + 1}:</strong><br> Pursuit Round<br>${points[round]} point(s)<br>`
        break;
      case 3:
        results += `<br><strong>Race ${round + 1}:</strong><br> Countdown Round<br>${points[round]} point(s)<br>`
        break;
      case 4:
        results += `<br><strong>Race ${round + 1}:</strong><br> TENET Round<br>${points[round]} point(s)<br>`
        break;
      case 5:
        results += `<br><strong>Race ${round + 1}:</strong><br> Chaos Round<br>${points[round]} point(s)<br>`
        break;
    }
  })

  // Finally, add a slow round and its points to finish the day
  results += `<br><strong>Race ${rounds}:</strong><br> Slow Round<br>${points[rounds - 1]} point(s)<br>`

  return results;

}

function addResultsText(results) {
  const div = document.querySelector(".results");

  div.innerHTML = results;
}

function addButtonListeners() {
  const regular = document.querySelector("#regular")
  const modified = document.querySelector("#modified")
  const woodpecker = document.querySelector("#woodpecker")

  regular.addEventListener("mouseup", () => {
    addResultsText(regularDay(4));
  })

  modified.addEventListener("mouseup", () => {
    addResultsText(modifiedDay(4));
  })

  woodpecker.addEventListener("mouseup", () => {
    addResultsText(woodyWoodpeckerDay(4));
  })
}

addButtonListeners();