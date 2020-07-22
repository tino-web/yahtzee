import React from 'react';
import PropTypes from 'prop-types';

function Splasher({ imgUrl, title, mark }) {
  return (
    <div className='mx-3 rounded splasher' style={{ backgroundImage: `url(${imgUrl})` }}>
      <div className='text-white'>
        {title}
        <h2>{mark}</h2>
      </div>
    </div>
  );
}

export default Splasher;

Splasher.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  mark: PropTypes.string.isRequired,
};
