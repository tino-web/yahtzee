import React from 'react';
import useHighScores from '../../hooks/useHighScores';

function LeaderBoard() {
  const {
    highScores,
    clearHighScores,
  } = useHighScores();

  const maxId = highScores.reduce((id, item) => Math.max(id, item.scoreId), 0);
  const rankedHighScores = highScores.sort((a, b) => b.score - a.score);
  const highScoresList = rankedHighScores.map((item, index) => (
    <tr key={item.scoreId} className={item.scoreId === maxId ? 'table-active' : ''}>
      <td>{index + 1}</td>
      <td>{item.name}</td>
      <td>{item.score}</td>
    </tr>
  ));

  return (
    <>
      <h1>Leaderboard</h1>
      <table className='table col-lg-8 table-hover'>
        <thead className='thead-light'>
          <tr>
            <th>#</th>
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
