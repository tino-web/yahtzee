import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ContextProvider } from '../../context/gameContext';

describe('generic features', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ContextProvider><App /></ContextProvider>, div);
  });
});
