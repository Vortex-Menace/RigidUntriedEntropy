function calculateResult() {
  // Get the values of the user's answers
  let q1 = document.getElementById("q1").value;
  let q2 = document.getElementById("q2").value;

  // Set the possible results
  let result1 = "Spike Spiegel";
  let result2 = "Jet Black";
  let result3 = "Faye Valentine";
  let result4 = "Edward Wong Hau Pepelu Tivrusky IV";
  
  // Create an array of the possible results
  let results = [result1, result2, result3, result4];
  
  // Filter the results based on the user's answers
  if (q1 === "blues" && q2 === "bounty hunting") {
    results = [result1];
  }
  
  // Choose a random character from the results array
  let randomIndex = Math.floor(Math.random() * results.length);
  let chosenCharacter = results[randomIndex];
  
  // Display the chosen character
  let resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `You are ${chosenCharacter}!`;
  resultDiv.style.display = "block";
}
