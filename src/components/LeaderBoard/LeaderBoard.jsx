import React, { useState } from 'react';
import useHighScores from '../../hooks/useHighScores';
import Modal from '../Modal/Modal';
import useModal from '../../hooks/useModal';

function LeaderBoard() {
  const [fieldScore, setFieldScore] = useState('');
  const [name, setName] = useState('');
  const { highScores, submitHighScores, clearHighScores } = useHighScores();

  function handleScoreChange(event) {
    setFieldScore(event.target.value);
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  const highScoresList = highScores.map((item) => (
    <tr key={item.scoreId}>
      <td>{item.name}</td>
      <td>{item.score}</td>
    </tr>
  ));

  const { isShowing, toggleShow } = useModal();

  return (
    <>
      <button onClick={toggleShow} type='button'>Show Modal</button>
      <Modal isShowing={isShowing} toggleShow={toggleShow} title='Submit score'>
        Hello there my love
      </Modal>
      <h1>Leaderboard</h1>
      <table className='table'>
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
      <input value={fieldScore} type='number' onChange={handleScoreChange} />
      <input value={name} type='text' onChange={handleNameChange} />
      <button type='button' onClick={() => submitHighScores(fieldScore, name)}>Submit</button>
      <button type='button' onClick={() => clearHighScores()}>Clear</button>
    </>
  );
}

export default LeaderBoard;