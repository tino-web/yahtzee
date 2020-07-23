import { useState, useEffect } from 'react';

function useHighScores() {
  const [highScores, setHighScores] = useState(
    localStorage.getItem('myHighScores') || '',
  );

  useEffect(() => {
    localStorage.setItem('myHighScores', highScores);
  }, [highScores]);

  return ([highScores, setHighScores]);
}

export default useHighScores;
