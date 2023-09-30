import { useEffect, useState } from "react";

function App() {
  const [quote, setQuote] = useState("");
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://type.fit/api/quotes");
      const data = await res.json();
      setQuote(data);
      console.log(data);
    };
    getData();
  }, []);

  const handleButton = () => {
    if (index < quote.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };
  return (
    <>
      <header>
        <h1 className="text-white font-bold text-2xl mb-5 text-center">
          Random quote machine
        </h1>
      </header>
      <main
        id="quote-box"
        className="max-w-[400px] w-full pb-10 text-center bg-[#313A49] relative p-5 rounded-xl"
      >
        <p id="text" className="mb-5 text-black">
          Quote {index + 1}
        </p>
        <p id="author" className="text-white">
          {quote[index]?.author}
        </p>
        <h1 id="new-quote" className="text-slate-400 text-xl mb-5">
          {quote[index]?.text}
        </h1>
        <a
          href={`https://twitter.com/intent/tweet?text=${quote[index]?.text}`}
          id="tweet-quote"
          target="_blank"
          rel="noreferrer"
          className="bg-blue-300 px-3 py-1 inline-block rounded"
        >
          tweet
        </a>
        <button
          className="absolute -bottom-5 right-1/2 -mr-[20px] h-10 w-10 bg-slate-400 rounded-xl"
          onClick={handleButton}
        >
          new
        </button>
      </main>
    </>
  );
}

export default App;
