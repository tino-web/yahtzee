import React, { useState } from 'react';
import useHighScores from '../../hooks/useHighScores';

function LeaderBoard() {
  const [fieldScore, setFieldScore] = useState('');
  const [name, setName] = useState('');
  const { submitHighScores, clearHighScores } = useHighScores();

  function handleScoreChange(event) {
    setFieldScore(event.target.value);
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  return (
    <>
      <h1>Leaderboard</h1>
      <input value={fieldScore} type='number' onChange={handleScoreChange} />
      <input value={name} type='text' onChange={handleNameChange} />
      <button type='button' onClick={() => submitHighScores(fieldScore, name)}>Submit</button>
      <button type='button' onClick={() => clearHighScores()}>Clear</button>
    </>
  );
}

export default LeaderBoard;
