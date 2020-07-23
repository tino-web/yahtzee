import React from 'react';
import { render, screen } from '@testing-library/react';
import Dice from './Dice';
import { ContextProvider } from '../../context/gameContext';

it('Dice is locked when clicked', () => {
  render(<ContextProvider><Dice key='1' diceId={1} value={5} isLocked /></ContextProvider>);
  expect(screen.getByRole('button', { id: '1' }).className).toMatch(/locked/);
});
