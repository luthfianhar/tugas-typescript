
interface KeyboardProps {
  selectedLetters: string[];
  onSelectLetter: (letter: string) => void;
  disabled: boolean;
  word: string;
}

const KEYS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function Keyboard({
  selectedLetters,
  onSelectLetter,
  disabled,
  word,
}: KeyboardProps) {
  return (
    <section className="flex flex-wrap justify-center gap-2 max-w-xl">
      {KEYS.map((letter) => {
        const isSelected = selectedLetters.includes(letter);
        const isCorrect = word.includes(letter);

        let buttonColor =
          "bg-white text-black hover:bg-gray-200";

        if (isSelected && isCorrect) {
          buttonColor = "bg-green-500 text-white";
        } else if (isSelected && !isCorrect) {
          buttonColor = "bg-red-500 text-white";
        }

        return (
          <button
            key={letter}
            type="button"
            disabled={disabled || isSelected}
            onClick={() => onSelectLetter(letter)}
            className={`border-2 border-black rounded-md p-3 sm:p-4 font-semibold transition-colors ${buttonColor} disabled:cursor-not-allowed disabled:opacity-70`}
          >
            {letter}
          </button>
        );
      })}
    </section>
  );
}

export default Keyboard;
