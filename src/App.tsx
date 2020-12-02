import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/global';

import Routes from './routes';
import Hooks from './hooks';

const App: React.FC = () => (
  <BrowserRouter>
    <Hooks>
      <Routes />
    </Hooks>

    <GlobalStyles />
  </BrowserRouter>
);

export default App;
