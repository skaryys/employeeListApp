import ReactDOM from 'react-dom';
import { StrictMode } from 'react';

import './styles.css';
import { AppContainer } from './components/AppContainer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppContainer />
  </StrictMode>
);
