import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from 'store';
import Root from 'pages';

import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'assets/argon-design/css/nucleo-svg.css';
import 'assets/argon-design/css/nucleo-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'assets/argon-design/scss/argon-design-system.scss?v1.0.0';

ReactDOM.render(
  <BrowserRouter>
    <AppProvider>
      <Root />
    </AppProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
