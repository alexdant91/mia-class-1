import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {LangProvider} from './providers/LangProvider.jsx';
import {DarkModeProvider} from './providers/DarkModeProvider.jsx';

ReactDOM.createRoot (document.getElementById ('root')).render (
  <DarkModeProvider>
      <LangProvider>
        <App />
      </LangProvider>
  </DarkModeProvider>
);
