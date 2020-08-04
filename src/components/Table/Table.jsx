import React, { useContext } from 'react';
import Dice from '../Dice/Dice';
import { Context } from '../../context/gameContext';
import GameControls from '../GameControls/GameControls';
import tablebg from '../../assets/images/table-bg.jpg';

function Table() {
  const {
    diceValues,
    lockedDices,
  } = useContext(Context);

  const diceComponents = diceValues.map((value, index) => {
    const isLocked = lockedDices[index];
    return <Dice key={index} diceId={index} value={value} isLocked={isLocked} />;
  });

  return (
    <div className='row' style={{ backgroundImage: `url(${tablebg})` }}>
      <div className='col p-4 p-md-2'>
        <div className='row no-gutters'>
          {diceComponents}
        </div>
        <div className='row pt-3'>
          <GameControls />
        </div>
      </div>
    </div>
  );
}

export default Table;
