
interface HangmanWordProps {
  word: string;
  selectedLetters: string[];
  isLoser: boolean;
  isWinner: boolean;
}

function HangmanWord({
  word,
  selectedLetters,
  isLoser,
  isWinner,
}: HangmanWordProps) {
  return (
    <section className="flex flex-wrap justify-center gap-3">
      {word.split("").map((letter, index) => {
        const isRevealed =
          selectedLetters.includes(letter) || isLoser;

        return (
          <span
            key={index}
            className={`border-b-4 pb-2 min-w-8 text-center uppercase font-semibold text-4xl ${
              isWinner ? "text-green-600" : "text-black"
            }`}
          >
            <span className={isRevealed ? "visible" : "invisible"}>
              {letter}
            </span>
          </span>
        );
      })}
    </section>
  );
}

export default HangmanWord;
