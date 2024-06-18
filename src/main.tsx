import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Global, ThemeProvider } from '@emotion/react';
import App from 'App.tsx';
import store from 'redux/store.ts';
import { globalStyles } from 'styles/globalStyles.ts';
import { theme } from 'styles/theme.ts';

import 'translation/i18n.ts';

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
