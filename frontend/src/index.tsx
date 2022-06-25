import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './globalStyle';
import RecordProvider from './contexts/Records';
import GameProvider from './contexts/Games';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecordProvider>
        <GameProvider>
            <App/>
            <GlobalStyle/>
        </GameProvider>
    </RecordProvider>
  </React.StrictMode>
);
