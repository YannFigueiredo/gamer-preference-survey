import React from 'react';

import { RoutesApp } from './routes';
import RecordProvider from './contexts/Records';
import GameProvider from './contexts/Games';

function App() {
  return (
    <RecordProvider>
      <GameProvider>
        <RoutesApp/>
      </GameProvider>
    </RecordProvider>
  );
}

export default App;
