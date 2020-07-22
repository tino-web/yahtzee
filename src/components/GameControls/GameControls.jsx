import React, { useContext } from 'react';
import { Context } from '../../context/gameContext';
import RollButton from '../RollButton/RollButton';
import GameStats from '../GameStats/GameStats';
import Splasher from '../Splasher/Splasher';

function GameControls() {
  const {
    reset,
    gameEnded,
    cheater,
    yahtzeeRolled,
  } = useContext(Context);

  function displaySwitch() {
    if (yahtzeeRolled) {
      const imgUrl = 'https://media.giphy.com/media/cqw80XStn460U/giphy.gif';
      const title = 'You finished your game of...';
      const mark = 'YAHTZEE!';
      return <Splasher imgUrl={imgUrl} title={title} mark={mark} />;
    }
    if (gameEnded) {
      const imgUrl = 'https://media.giphy.com/media/26tOZ42Mg6pbTUPHW/giphy.gif';
      const title = 'You rolled a...';
      const mark = 'YAHTZEE!';
      return <Splasher imgUrl={imgUrl} title={title} mark={mark} />;
    }
    return <RollButton />;
  }

  return (
    <div className='col'>
      <div className='row'>
        <div className='col d-flex pt-2 justify-content-center'>
          {displaySwitch()}
        </div>
      </div>

      <div className='row pt-3'>
        <div className='col'>
          {!gameEnded && <GameStats />}
        </div>
      </div>

      <div className='row'>
        <div className='col'>
          <button
            className='btn btn-danger btn-sm'
            type='button'
            onClick={() => reset('game')}
          >
            New Game
          </button>
          <button
            className='btn btn-secondary btn-sm'
            type='button'
            onClick={() => cheater([5, 5, 5, 5, 5])}
          >
            Yahtzee Cheater
          </button>
        </div>
      </div>
    </div>
  );
}

export default GameControls;
