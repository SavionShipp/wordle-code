import { useState } from "react";

export function WordlePage() {
  // console.log("Welcome to Wordle!")
  const words = ["Flame"];
  const wordOfDay = words[0];
  const [guess1, setGuess1] = useState("");
  let guess1Split;

  if (guess1 == wordOfDay) {
    console.log("Congratulations!");
  } else {
    console.log("Try Again!");
    // console.log(guess1.split(""));
    guess1Split = guess1.split("");
    console.log(guess1Split);
    console.log(guess1Split[0]);
  }

  return (
    <main>
      <h1>Welcome to Wordle!</h1>
      <form action="">
        Guess 1:
        <input type="text"
        name="guess1"
        maxLength={5}
        onChange={(event) => setGuess1(event.target.value)}/>
      </form>
      <h3>{guess1}</h3>
    </main>
  )
}