import clsx from "clsx";

export function GameStatus({  
    isGameWon, 
    isGameLost 
}: Record<string, boolean>) {
    const isGameOver = (isGameLost || isGameWon);
    const statuses = {
        lost: isGameLost,
        won: isGameWon
    };
    return (
        <section className={clsx("game-status", isGameOver && 'game-over', statuses)}
                aria-live="polite"
                role="status">
            {isGameWon ? (
                <>
                    <h2>You win!</h2>
                    <p>Well done! 🎉</p>
                </>
            ) : (
                <>
                    <h2>Game over!</h2>
                    <p>You lose! Better start learning Assembly 😭</p>
                </>
            )}
        </section>
    )
}