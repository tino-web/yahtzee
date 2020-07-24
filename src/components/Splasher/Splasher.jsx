import React from 'react';
import PropTypes from 'prop-types';

function Splasher({ splasherData: { imgUrl, title, subtitle } }) {
  return (
    <div className='mx-3 rounded splasher' style={{ backgroundImage: `url(${imgUrl})` }}>
      <div className='text-white'>
        {title}
        <h2>{subtitle}</h2>
      </div>
    </div>
  );
}

export default Splasher;

Splasher.propTypes = {
  splasherData: PropTypes.shape({
    imgUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }).isRequired,
};
