import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import VolumeControl from '../VolumeControl/VolumeControl';

function Header() {
  return (
    <header className='px-0 d-block'>
      <nav className='navbar navbar-expand-md navbar-light bg-light'>
        <div className='container'>
          <Link exact to='/' className='navbar-brand'>
            YAHTZEE!
          </Link>
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
              <li className='nav-item'>
                <NavLink exact to='/' className='nav-link' activeClassName='active'>
                  Play Yahtzee
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/highscores' className='nav-link' activeClassName='active'>
                  High Scores
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
