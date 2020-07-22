import React, { useContext } from 'react';
import { Context } from '../../context/gameContext';
import rollingDicesImg from '../../assets/images/rolling-dices.svg';

function RollButton() {
  const {
    rollDices,
    lockedDices,
    roundEnded,
  } = useContext(Context);

  return (
    <>
      <button
        type='button'
        disabled={!!(roundEnded || lockedDices.every((item) => item === true))}
        className='d-block rounded diceRoller border-0'
        onClick={rollDices}
      >
        <img
          src={rollingDicesImg}
          alt=''
          className='noselect'
        />
        <h6 className='text-white'>ROLL DICES</h6>
      </button>
    </>
  );
}

export default RollButton;
