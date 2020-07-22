import React, { useContext } from 'react';
import { Context } from '../../context/gameContext';

function GameStats() {
  const {
    turnsLeft,
    roundsLeft,
  } = useContext(Context);

  return (
    <>
      <span className='d-block'>
        <h6>
          Turns left:
          {turnsLeft}
        </h6>
      </span>
      <span className='d-block'>
        <h6>
          Rounds left:
          {roundsLeft}
        </h6>
      </span>
    </>
  );
}

export default GameStats;
