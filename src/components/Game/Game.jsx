import React from 'react';
import Table from '../Table/Table';
import ScoreCard from '../ScoreCard/ScoreCard';

function Game() {
  return (
    <main role='main' className='row' style={{ marginRight: '0px', marginLeft: '0px' }}>
      <div className='col-12 mb-md-0 mb-3 col-md-6'>
        <Table />
      </div>
      <div className='col-12 col-md-6 px-4 px-0-md'>
        <ScoreCard />
      </div>
    </main>
  );
}

export default Game;
