interface HangmanWordProps {
  word: string;
  selectedLetters: string[];
}

function HangmanWord({ word, selectedLetters }: HangmanWordProps) {
  return (
    <section className='flex gap-6'>
      {word.split('').map((letter, index) => {
        return (
          <span
            key={index}
            className='uppercase font-semibold text-5xl border-b-6 pb-2 border-black'>
            <span
              className={
                selectedLetters.includes(letter) ? 'visible' : 'invisible'
              }>
              {letter}
            </span>
          </span>
        );
      })}
    </section>
  );
}

export default HangmanWord;
