import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Word as WordType } from '../../@types/word';
import ErrorContext from '../../contexts/ErrorContext';
import { Link } from 'react-router-dom';

const Word = () => {
  const { word, pos } = useParams();

  const [wordsState, setWordsState] = useState<Array<WordType>>();

  const errorContext = useContext(ErrorContext);
  const notyf = errorContext?.notyf;

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`/api/words/${word}/${pos || ''}`);
        setWordsState(res.data);
      } catch (error) {
        if (notyf) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          notyf.error(error.response.data);
        }
      }
    })();
  }, [word, pos]);

  return (
    <div>
      {wordsState &&
        wordsState.map((word, i) => (
          <div key={`div${i}`}>
            <h2 key={`word-${i}`}>
              {word.word} {word.pos}
            </h2>
            <h3 key={`definitions-${i}`}>Definitions</h3>
            {word.definitions.map((def, j) => (
              <div key={`def${j}`}>
                {def.split(' ').map((word, i) => (
                  <Link
                    to={`/words/${word.replace(/[^0-9a-z]/gi, '')}`}
                    key={`link-${i}`}
                  >
                    {word}{' '}
                  </Link>
                ))}
                <br />
                <br />
              </div>
            ))}
          </div>
        ))}
    </div>
  );
};

export default Word;
