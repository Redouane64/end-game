import { useState } from 'react'
import clsx from 'clsx';
import Confetti from 'react-confetti';
import './App.css'
import { languages } from './languages'
import { GameStatus } from './components/game-status';
import { words } from './words';
import GameHeader from './components/game-header';
import Languages from './components/languages';
import Words from './components/words';
import Keyboard from './components/keyboard';

/* helper function to make sure always the word is lowercase */
function makeWord(value: string) {
  return value.toLowerCase();
}

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)]
}

function App() {
  const [word, setWord] = useState(() => makeWord(getRandomWord()));
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const wrongGuessesCount = guessedLetters.filter((l) => !word.includes(l)).length;
  const isGameWon = word.split("").every((l) => guessedLetters.includes(l));
  const isGameLost = wrongGuessesCount >= languages.length - 1;
  const isGameOver = isGameWon || isGameLost;

  function addGuessedLetter(letter: string) {
    setGuessedLetters((previousGuessedLetters) => {
      return previousGuessedLetters.includes(letter) ? 
        previousGuessedLetters : [...previousGuessedLetters, letter];
    });
  }

  function resetGame() {
    setWord(getRandomWord());
    setGuessedLetters([])
  }

  return (
    <main>
      {
        isGameWon && <Confetti recycle={false} numberOfPieces={1000} />
      }
      <GameHeader />
      <GameStatus isGameWon={isGameWon} 
                  isGameLost={isGameLost} />
      <Languages wrongGuessesCount={wrongGuessesCount} />
      <Words word={word} 
             isGameLost={isGameLost} 
             guessedLetters={guessedLetters} />
      <Keyboard guessedLetters={guessedLetters} 
                word={word} addGuessedLetter={addGuessedLetter} 
                isGameOver={isGameOver} />
      <section className={clsx('new-game', isGameOver && 'show')}>
        {isGameOver && <button onClick={resetGame}>New Game</button>}
      </section>
    </main>
  )
}

export default App
