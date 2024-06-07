import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { Global, ThemeProvider } from '@emotion/react';
import './translation/i18n.ts';
import { Provider } from 'react-redux';
import store from './redux/store.ts';
import { theme } from './styles/Theme.ts';
import { globalStyles } from './styles/GlobalStyles';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter basename="faq_team_fe">
          <App />
        </BrowserRouter>
        <Global styles={globalStyles} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);
