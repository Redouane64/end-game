import clsx from "clsx";

export default function Keyboard({ 
        guessedLetters, 
        word, 
        addGuessedLetter, 
        isGameOver
    }: { 
        guessedLetters: string[]; 
        word: string; 
        addGuessedLetter: (letter: string) => void; 
        isGameOver: boolean;
    }) {
    const alphabets = "abcdefghijklmnopqrstuvwxyz";

    return (
        <section className="keyboard">
            {Array.from(alphabets).map(
                (letter) => {
                const isGuessed = guessedLetters.includes(letter);
                const isCorrect = isGuessed && word.includes(letter);
                const isWrong = isGuessed && !word.includes(letter);

                return (
                    <button key={letter} 
                            disabled={isGameOver}
                            aria-disabled={isGameOver}
                            aria-label={`letter ${letter}`}
                            className={clsx({correct:isCorrect, wrong: isWrong})}
                            onClick={() => addGuessedLetter(letter)}>
                    {letter}
                    </button>
                )
                })
            }
        </section>
    )
}