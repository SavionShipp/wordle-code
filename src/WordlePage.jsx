export function WordlePage() {
  console.log("Welcome to Wordle!")
  const words = ["Flame"];
  const word_of_day = words[0];
  return (
    <main>
      <h1>Welcome to Wordle!</h1>
      <form action="">
        Guess 1: <input type="text" name="guess_1" onChange={}/>
      </form>
    </main>
  )
}