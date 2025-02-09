export default function Words({ word, isGameLost, guessedLetters }: { word: string, isGameLost: boolean, guessedLetters: string[] }) {
    return (
        <section className='word'>
        {
            Array.from(word).map((letter, idx) => {
            if (isGameLost) {
                return (<span key={idx} style={{color: '#EC5D49'}}>{letter}</span>);
            }

            if (guessedLetters.includes(letter)) {
                return (<span key={idx}>{letter}</span>);
            }

            return (<span key={idx}></span>);
            }
        )}
        </section>
    );
}