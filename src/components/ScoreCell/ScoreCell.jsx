import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../../context/gameContext';

function ScoreCell({ item: { id, score, locked } }) {
  const {
    takeScore,
    roundStarted,
    calcScores,
  } = useContext(Context);

  const roundScore = calcScores(id);

  if (score !== 0 || id === 'yahtzeebonus') {
    return <td>{score}</td>;
  }

  if (!locked && roundScore > 0) {
    return (
      <td>
        <button
          className='w-100 h-100 p-0 m-0 scoreButton green font-weight-bold'
          type='button'
          onClick={() => takeScore(id, roundScore)}
        >
          {roundScore}
        </button>
      </td>
    );
  }

  if (score === 0 && locked) {
    return <td>0</td>;
  }

  if (roundStarted) {
    return (
      <td>
        <button
          className='w-100 h-100 p-0 m-0 scoreButton grey font-weight-bold'
          type='button'
          onClick={() => { takeScore(id, 0); }}
        >
          0
        </button>
      </td>
    );
  }

  return <td />;
}

export default ScoreCell;

ScoreCell.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    locked: PropTypes.bool.isRequired,
    score: PropTypes.number.isRequired,
  }).isRequired,
};
