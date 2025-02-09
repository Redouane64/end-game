import clsx from "clsx";

export function GameOver({ 
    isGameOver, 
    isGameWon, 
    isGameLost 
}: Record<string, boolean>) {
    return (
        <section className={clsx("game-status", isGameOver && "game-over", {
            lost: isGameLost,
            won: isGameWon
        })}>
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