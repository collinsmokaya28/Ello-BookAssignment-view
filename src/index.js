import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import ApolloClientProvider from './apolloClient';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <ApolloClientProvider>
    <App />
  </ApolloClientProvider>
);
