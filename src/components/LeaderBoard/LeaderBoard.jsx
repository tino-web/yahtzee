import React from 'react';
import useHighScores from '../../hooks/useHighScores';

function LeaderBoard() {
  const { highScores, clearHighScores } = useHighScores();

  const highScoresList = highScores.map((item) => (
    <tr key={item.scoreId}>
      <td>{item.name}</td>
      <td>{item.score}</td>
    </tr>
  ));

  return (
    <>
      <h1>Leaderboard</h1>
      <table className='table col-6'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {highScoresList}
        </tbody>
      </table>
      <button type='button' className='btn btn-danger btn-sm' onClick={() => clearHighScores()}>Clear leaderboard</button>
    </>
  );
}

export default LeaderBoard;
