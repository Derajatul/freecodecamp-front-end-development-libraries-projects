import { useEffect, useState } from 'react';

const QuoteBox = () => {
  const [id, setId] = useState(0);
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const getQuote = async () => {
    const res = await fetch('https://dummyjson.com/quotes/random');
    const data = await res.json();
    setId(data.id);
    setQuote(data.quote);
    setAuthor(data.author);
  };
  useEffect(() => {
    getQuote();
  }, []);
  return (
    <div id='quote-box' className='max-w-md bg-dark-grayish-blue m-4 p-6 text-center rounded-lg relative flex flex-col items-center'>
        <p className='text-neon-green'>Quote Number: {id}</p>
      <h1 id='text' className='text-light-cyan font-extrabold text-2xl py-4'>
        " {quote} "
      </h1>
      <p id='author' className='py-4 text-light-cyan'>{author}</p>
      <picture>
        <source className='py-4' media="(min-width: 645px)" srcset="./pattern-divider-desktop.svg"/>
        <img src="./pattern-divider-mobile.svg" alt="pattern divider" className='py-4'/>
      </picture>
      <button id='new-quote' onClick={getQuote} className='text-dark-blue bg-neon-green p-3 rounded-full absolute -bottom-6'>
        <img src="./icon-dice.svg" alt="icon dice" />
      </button>
      <a id='tweet-quote' href={`https://twitter.com/intent/tweet?text=${quote}`} target='_blank' className='block pt-3 pb-6'>Share tweet</a>
    </div>
  );
};

export default QuoteBox;
