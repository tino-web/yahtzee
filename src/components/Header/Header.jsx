import React from 'react';
import VolumeControl from '../VolumeControl/VolumeControl';

function Header() {
  return (
    <header className='px-0 d-block'>
      <nav className='navbar navbar-expand-md navbar-light bg-light'>
        <div className='container'>
          <a className='navbar-brand' href='localhost:3000'>
            YAHTZEE!
          </a>
          <VolumeControl />
          <button
            className='navbar-toggler order-md-2'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item active'>
                <a className='nav-link' href='localhost:3000'>
                  Play Yahtzee
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='localhost:3000'>
                  High Scores
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
