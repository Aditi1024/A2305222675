
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ShortURLProvider } from './context/ShortURLContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ShortURLProvider>
      <App />
    </ShortURLProvider>
  </React.StrictMode>
);

reportWebVitals();
