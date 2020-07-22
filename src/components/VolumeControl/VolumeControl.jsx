import React, { useContext } from 'react';
import { Context } from '../../context/gameContext';

function VolumeControl() {
  const {
    setVolume,
    volume,
  } = useContext(Context);

  function handleChange(event) {
    setVolume(event.target.value);
  }

  let volumeIcon = null;

  if (Number(volume) === 0) {
    volumeIcon = (
      <>
        <path fillRule='evenodd' d='M10.717 3.55A.5.5 0 0 1 11 4v8a.5.5 0 0 1-.812.39L7.825 10.5H5.5A.5.5 0 0 1 5 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z' />
      </>
    );
  } else if (volume <= 0.7) {
    volumeIcon = (
      <>
        <path fillRule='evenodd' d='M8.717 3.55A.5.5 0 0 1 9 4v8a.5.5 0 0 1-.812.39L5.825 10.5H3.5A.5.5 0 0 1 3 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z' />
        <path d='M10.707 11.182A4.486 4.486 0 0 0 12.025 8a4.486 4.486 0 0 0-1.318-3.182L10 5.525A3.489 3.489 0 0 1 11.025 8c0 .966-.392 1.841-1.025 2.475l.707.707z' />
      </>
    );
  } else {
    volumeIcon = (
      <>
        <path d='M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z' />
        <path d='M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z' />
        <path d='M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707z' />
        <path fillRule='evenodd' d='M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z' />
      </>
    );
  }

  return (
    <div className='btn-group order-md-1 ml-auto'>
      <span
        data-toggle='dropdown'
        aria-haspopup='true'
        className='mr-md-0 mr-3'
        aria-expanded='false'
        type='button'
      >
        <svg
          width='2em'
          height='2em'
          viewBox='0 0 16 16'
          fill='currentColor'
          xmlns='http://www.w3.org/2000/svg'
        >
          {volumeIcon}
        </svg>
      </span>
      <div
        className='dropdown-menu volumeSlider'
      >
        <input
          type='range'
          value={volume}
          min='0'
          max='1'
          step='0.01'
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default VolumeControl;
