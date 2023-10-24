import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import './styles.css';
import { AppContainer } from './components/AppContainer';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppContainer />
  </StrictMode>
);
