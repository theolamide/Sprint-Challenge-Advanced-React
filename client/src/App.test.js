import React from 'react';
import {render} from '@testing-library/react'
import App from './App';
import FetchPlayer from './Components/FetchPlayers';

test('renders without crashing', () => {  
  render(<App />); 
});

test('This displays the page title Player Cards', () => {  
  const container = render(<App />); 
  container.getByText('Player Cards')
});

test('This displays the page title Player Cards', () => {  
  const container = render(<App />); 
  container.getByText('Toggle Mode')
});

