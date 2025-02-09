import clsx from "clsx";
import { languages } from "../languages";

export default function Languages({ wrongGuessesCount }: { wrongGuessesCount: number}) {
    return (
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
                            style={defaultStyle}>{item.name}</span>);
            })
        }
        </section>
    );
}