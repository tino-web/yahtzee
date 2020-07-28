import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../../context/gameContext';

function Dice({ isLocked, diceId, value }) {
  const {
    lockToggle,
    roundStarted,
    roundEnded,
    diceValues,
  } = useContext(Context);

  const [isRolling, setIsRolling] = useState('');

  // eslint-disable-next-line global-require, import/no-dynamic-require
  const diceImg = require(`../../assets/images/dices/${value}.svg`);

  useEffect(() => {
    if (diceValues[0] !== 0) {
      setIsRolling('shake');
      setTimeout(() => {
        setIsRolling('');
      }, 500);
    }
  }, [diceValues]);

  return (
    <div className='col d-flex justify-content-center'>
      <button
        type='button'
        disabled={(!roundStarted || roundEnded)}
        className={`btn dice p-0 ${!isLocked ? isRolling : ''} ${isLocked ? 'locked' : ''}`}
        id={diceId}
        onClick={() => lockToggle(diceId)}
      >
        <img
          src={diceImg}
          alt=''
          className='diceImg'
        />
      </button>
    </div>
  );
}

export default Dice;

Dice.propTypes = {
  isLocked: PropTypes.bool.isRequired,
  diceId: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
