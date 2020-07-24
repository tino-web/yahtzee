import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Game from '../Game/Game';
import Footer from '../Footer/Footer';
import './App.css';
import LeaderBoard from '../LeaderBoard/LeaderBoard';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='container-fluid d-flex flex-column p-0 min-vh-100'>
          <Header />
          <div className='container py-3 px-0 d-block'>
            <Switch>
              <Route exact path='/'><Game /></Route>
              <Route path='/highscores'><LeaderBoard /></Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
