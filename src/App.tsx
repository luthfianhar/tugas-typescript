import { useState } from 'react';
import HangmanDraw from './components/HangmanDraw';
import HangmanWord from './components/HangmanWord';
import Keyboard from './components/Keyboard';
import words from '../wordList.json';

function App() {
  // Mengambil satu kata random di wordList.json
  const [currentWord, setCurrentWord] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  // State penampung huruf-huruf yang dipilih pemain
  const [selectedLetters, setSelectedLetters] = useState<string[]>([]);

  // Mengetahui berapa kali pemain salah menebak
  const incorrectLetters = selectedLetters.filter((letter) => {
    // jika huruf salah, maka masukkan ke dalam array
    return !currentWord.includes(letter);
  });

  return (
    <section className='flex flex-col items-center gap-10'>
      <div>Lose Win</div>

      <HangmanDraw attempt={incorrectLetters.length} />
      <HangmanWord
        word={currentWord}
        selectedLetters={selectedLetters}
      />
      <Keyboard />
    </section>
  );
}

export default App;
