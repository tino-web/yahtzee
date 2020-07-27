import React from 'react';

function Footer() {
  return (
    <footer className='bg-light d-block py-1 mt-auto'>
      <span className='text-muted small row justify-content-center no-gutters'>
        Yahtzee! | made with
        <span role='img' aria-label='love' className='px-1'>💖</span>
        by Tino (
        <a
          href='https://github.com/tino-web/yahtzee'
          target='_blank'
          rel='noreferrer'
        >
          GitHub
        </a>
        )
      </span>
    </footer>
  );
}

export default Footer;
