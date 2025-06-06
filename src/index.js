import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import PlayerContextProvider from './context/PlayerContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <PlayerContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PlayerContextProvider>
  </BrowserRouter>
);

