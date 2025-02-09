import { useState } from 'react'
import clsx from 'clsx';
import './App.css'
import { languages } from './languages'
import { GameOver } from './components/game-over';

/* helper function to make sure always the word is lowercase */
function makeWord(value: string) {
  return value.toLowerCase();
}

function App() {
  const [word, setWord] = useState(makeWord('Dog'));
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const wrongGuessesCount = guessedLetters.filter((l) => !word.includes(l)).length;
  const isGameWon = word.split("").every((l) => guessedLetters.includes(l));
  const isGameLost = wrongGuessesCount >= languages.length - 1;
  const isGameOver = isGameWon || isGameLost;
  const alphabets = "abcdefghijklmnopqrstuvwxyz";

  function addGuessedLetter(letter: string) {
    setGuessedLetters((previousGuessedLetters) => {
      return previousGuessedLetters.includes(letter) ? 
        previousGuessedLetters : [...previousGuessedLetters, letter];
    });
  }

  return (
    <main>
      <header>
        <h1>Assembly: End Game</h1>
        <p>Guess the word in 8 attempts to keep the programming world safe from Assembly!</p>
      </header>
      <GameOver isGameOver={isGameOver} 
                isGameWon={isGameWon} 
                isGameLost={isGameLost} />
      <section className="lang-list">
        {
          languages.map((item, idx) => {
            const isLanguageLost = idx < wrongGuessesCount;
            const className = clsx(isLanguageLost && "lost");

            const defaultStyle = {
              backgroundColor: item.backgroundColor, 
              color: item.color
            };

            return (<span key={idx} 
                          className={className} 
                          style={defaultStyle}>{item.name}</span>)
          })
        }
      </section>
      <section className='word'>
        {
          Array.from(word).map((letter, idx) => {
            if (guessedLetters.includes(letter)) {
              return (<span key={idx}>{letter}</span>);
            }

            return (<span key={idx}></span>);
          }
        )}
      </section>
      <section className="keyboard">
        {Array.from(alphabets).map(
          (letter) => {
            const isGuessed = guessedLetters.includes(letter);
            const isCorrect = isGuessed && word.includes(letter);
            const isWrong = isGuessed && !word.includes(letter);

            return (
              <button key={letter} 
                      className={clsx({correct:isCorrect, wrong: isWrong})}
                      onClick={() => addGuessedLetter(letter)}>
                {letter}
              </button>
            )
          })
        }
      </section>
      {isGameOver && <section className='new-game'>
        <button>New Game</button>
      </section>}
    </main>
  )
}

export default App
