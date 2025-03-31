import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './styles/reset.css';
import './styles/vars.css';
import './styles/global.css';
import './styles/media-queries.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faSearch, faBook, faPlus, faGlobe, faPlay } from '@fortawesome/free-solid-svg-icons';

// Add ícones à biblioteca
library.add(faHome, faSearch, faBook, faPlus, faGlobe, faPlay);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);