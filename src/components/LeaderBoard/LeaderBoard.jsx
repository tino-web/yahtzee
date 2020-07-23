import React from 'react';
import useHighScores from '../../hooks/useHighScores';

function LeaderBoard() {
  const [highScores, setHighScores] = useHighScores();

  function onChange(event) {
    setHighScores(event.target.value);
  }
  return (
    <>
      <h1>Leaderboard</h1>
      <input value={highScores} type='text' onChange={onChange} />
      {highScores}
    </>
  );
}

export default LeaderBoard;
