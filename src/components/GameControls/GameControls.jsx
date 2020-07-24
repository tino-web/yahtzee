import React, { useContext } from 'react';
import { Context } from '../../context/gameContext';
import RollButton from '../RollButton/RollButton';
import GameStats from '../GameStats/GameStats';
import Splasher from '../Splasher/Splasher';
import GameEnder from '../GameEnder/GameEnder';

function GameControls() {
  const {
    reset,
    gameEnded,
    cheater,
    yahtzeeRolled,
  } = useContext(Context);

  function displaySwitch() {
    if (gameEnded) {
      return <GameEnder />;
    }
    if (yahtzeeRolled) {
      const splasherData = {
        imgUrl: 'https://media.giphy.com/media/cqw80XStn460U/giphy.gif',
        title: 'You rolled a...',
        subtitle: 'YAHTZEE!',
      };
      return <Splasher splasherData={splasherData} />;
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
