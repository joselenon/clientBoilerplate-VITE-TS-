import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { ScreenConfigProvider } from './contexts/ScreenConfigContext';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <ScreenConfigProvider>
      <App />
    </ScreenConfigProvider>
  </React.StrictMode>,
);
