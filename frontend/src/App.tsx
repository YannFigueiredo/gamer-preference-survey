import React from 'react';

import { RoutesApp } from './routes';
import RecordProvider from './contexts/Records';

function App() {
  return (
    <RecordProvider>
      <RoutesApp/>
    </RecordProvider>
  );
}

export default App;
