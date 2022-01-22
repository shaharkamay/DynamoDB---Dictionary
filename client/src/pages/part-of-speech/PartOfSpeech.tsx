import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Word as WordType } from '../../@types/word';
import ErrorContext from '../../contexts/ErrorContext';

const PartOfSpeech = () => {
  const { pos, letter } = useParams();
  const [wordState, setWordState] = useState<WordType>();

  const errorContext = useContext(ErrorContext);
  const notyf = errorContext?.notyf;

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `/api/part-of-speech/${pos}${letter ? `?letter=${letter}` : ''}`
        );
        setWordState(res.data);
      } catch (error) {
        if (notyf) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          notyf.error(error.response.data);
        }
      }
    })();
  }, []);

  return (
    <div>
      {wordState && (
        <div>
          <h2>
            {wordState.word} {wordState.pos}
          </h2>
          <h3>Definitions</h3>
          {wordState.definitions.map((def, j) => (
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
      )}
    </div>
  );
};

export default PartOfSpeech;
