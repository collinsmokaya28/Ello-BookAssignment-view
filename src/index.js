import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ApolloClientProvider from './apolloClient';

ReactDOM.render(
  <ApolloClientProvider>
    <App />
  </ApolloClientProvider>,
  document.getElementById('root')
);