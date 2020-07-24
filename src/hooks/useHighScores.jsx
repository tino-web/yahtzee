import { useState, useEffect } from 'react';

function useHighScores() {
  const [highScores, setHighScores] = useState(JSON.parse(localStorage.getItem('myHighScores')) || []);
  const [lastHighScore, setLastHighScore] = useState();

  function submitHighScores(name, score) {
    setHighScores((prevScores) => {
      const maxId = prevScores.reduce((id, item) => Math.max(id, item.scoreId), 0);
      setLastHighScore(maxId + 1);
      return [
        ...prevScores,
        {
          scoreId: maxId + 1,
          name,
          score: Number(score),
        },
      ];
    });
  }

  function clearHighScores() {
    setHighScores([]);
  }

  useEffect(() => {
    localStorage.setItem('myHighScores', JSON.stringify(highScores));
  }, [highScores]);

  return ({
    highScores,
    submitHighScores,
    clearHighScores,
    lastHighScore,
  });
}

export default useHighScores;
