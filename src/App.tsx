import { useState } from 'react'
import './App.css'
import { languages } from './languages'

function App() {
  const [word, setWord] = useState('React');
  const alphabets = "abcdefghijklmnopqrstuvwxyz";

  return (
    <main>
      <header>
        <h1>Assembly: End Game</h1>
        <p>Guess the word in 8 attempts to keep the programming world safe from Assembly!</p>
      </header>
      <section className="game-status">
        <h2>
          You Win! 🎊
        </h2>
        <p>
          Well Done!
        </p>
      </section>
      <section className="lang-list">
        {languages.map((item, idx) => (<span key={idx} style={{backgroundColor: item.backgroundColor, color: item.color}}>{item.name}</span>))}
      </section>
      <section className='word'>
        {Array.from(word).map((letter, idx) => (<span key={idx}>{letter}</span>))}
      </section>
      <section className="keyboard">
        {Array.from(alphabets).map((letter) => <button key={letter}>{letter}</button>)}
      </section>
      <section className='new-game'>
        <button>New Game</button>
      </section>
    </main>
  )
}

export default App
