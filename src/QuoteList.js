import Quote from "./Quote.js"
import { useEffect, useState } from "react";

function QuoteList() {
    const [quotes, setQuotes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const response = await fetch("https://dummyjson.com/quotes");
            const data = await response.json();
            setQuotes(data.quotes);
            setLoading(false);
        })();
    }, []);

    return (
        <>
            {loading ? <p>Loading...</p> : quotes.map(({ author, quote }, i) => (
                <Quote key={i} author={author} quote={quote} />
            ))}
        </>
    );
}

export default QuoteList;

