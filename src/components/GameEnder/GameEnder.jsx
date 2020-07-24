import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Context } from '../../context/gameContext';
import Modal from '../Modal/Modal';
import Splasher from '../Splasher/Splasher';
import useModal from '../../hooks/useModal';
import useHighScores from '../../hooks/useHighScores';

function GameEnder() {
  const {
    reset,
    sectionScores,
  } = useContext(Context);

  const [nameInput, setNameInput] = useState('');
  const { toggleShow, isShowing } = useModal(true);
  const { submitHighScores } = useHighScores();
  const history = useHistory();

  const splasherData = {
    imgUrl: 'https://media.giphy.com/media/26tOZ42Mg6pbTUPHW/giphy.gif',
    title: 'You finished your game of...',
    subtitle: 'YAHTZEE!',
  };

  async function onSubmit() {
    await submitHighScores(nameInput, sectionScores.total);
    reset('game');
    history.push('/highscores');
  }

  return (
    <>
      <Modal isShowing={isShowing} toggleShow={toggleShow} onSubmit={onSubmit} onSubmitText='Submit' title='Submit your highscore'>
        <div className='form-group row'>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor='name' className='col-2 col-form-label'>Name</label>
          <div className='col-10'>
            <input id='name' name='name' className='form-control' type='text' value={nameInput} onChange={(event) => setNameInput(event.target.value)} />
          </div>
        </div>
        <div className='form-group row'>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor='score' className='col-2 col-form-label'>Score</label>
          <div className='col-10'>
            <input id='score' name='score' className='form-control-plaintext' readOnly value={sectionScores.total} />
          </div>
        </div>
      </Modal>
      <Splasher splasherData={splasherData} />
    </>
  );
}

export default GameEnder;
