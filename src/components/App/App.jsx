import React from 'react';
import Header from '../Header/Header';
import Game from '../Game/Game';
import Footer from '../Footer/Footer';
import './App.css';

function App() {
  return (
    <>
      <div className='container-fluid d-flex flex-column p-0 min-vh-100'>
        <Header />
        <div className='container pt-3 d-block pb-3'>
          <Game />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
