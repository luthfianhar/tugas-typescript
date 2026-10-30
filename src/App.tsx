
import { useState } from "react";
import HangmanDraw from "./components/HangmanDraw";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";
import words from "../wordList.json";

function App() {
  const [currentWord] = useState<string>(() => {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex].toUpperCase();
  });

  const [selectedLetters, setSelectedLetters] = useState<string[]>([]);

  const incorrectLetters = selectedLetters.filter(
    (letter) => !currentWord.includes(letter)
  );

  const isLoser = incorrectLetters.length >= 6;

  const isWinner = currentWord
    .split("")
    .every((letter) => selectedLetters.includes(letter));

  const isGameOver = isLoser || isWinner;

  const handleSelectLetter = (letter: string) => {
    if (isGameOver || selectedLetters.includes(letter)) {
      return;
    }

    setSelectedLetters((current) => [...current, letter]);
  };

  let message = "Lose Win";
  let messageColor = "text-black";

  if (isLoser) {
    message = "Nice try, refresh and try again!";
    messageColor = "text-red-600";
  } else if (isWinner) {
    message = "You win, refresh and try again!";
    messageColor = "text-green-600";
  }

  return (
    <main className="min-h-screen flex flex-col items-center gap-10 p-6">
      <h1 className={`text-2xl font-bold text-center ${messageColor}`}>
        {message}
      </h1>

      <HangmanDraw attempt={incorrectLetters.length} />

      <HangmanWord
        word={currentWord}
        selectedLetters={selectedLetters}
        isLoser={isLoser}
        isWinner={isWinner}
      />

      <Keyboard
        selectedLetters={selectedLetters}
        onSelectLetter={handleSelectLetter}
        disabled={isGameOver}
        word={currentWord}
      />
    </main>
  );
}

export default App;
