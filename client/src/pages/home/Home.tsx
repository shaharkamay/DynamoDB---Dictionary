import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [word, setWord] = useState('');
  const [pos, setPos] = useState('');

  const [pos2, setPos2] = useState('');
  const [letter, setLetter] = useState('');
  return (
    <div>
      <h3>Word Search</h3>
      <label htmlFor="word">Enter word</label>
      <br />
      <input
        id="word"
        placeholder="enter word"
        onChange={(e) => setWord(e.target.value)}
      />
      <br />
      <label htmlFor="pos">Enter part of speech</label>
      <br />
      <input
        id="pos"
        placeholder="enter part of speech"
        onChange={(e) => setPos(e.target.value)}
      />
      <br />
      <button
        onClick={() => {
          navigate(`/words/${word}/${pos}`);
        }}
      >
        send
      </button>

      <br />
      <br />

      <h3>Part of Speech Search</h3>

      <label htmlFor="pos2">Enter part of speech</label>
      <br />
      <input
        id="pos2"
        placeholder="enter part of speech"
        onChange={(e) => setPos2(e.target.value)}
      />
      <br />
      <label htmlFor="letter">Enter a letter</label>
      <br />
      <input
        id="letter"
        placeholder="Enter a letter"
        onChange={(e) => setLetter(e.target.value)}
      />
      <br />
      <button
        onClick={() => {
          navigate(`/part-of-speech/${pos2}/${letter}`);
        }}
      >
        send
      </button>
    </div>
  );
};

export default Home;
