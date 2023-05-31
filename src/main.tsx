import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { AppRouter } from './routers/index.tsx';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';
import { QueryClient, QueryClientProvider } from 'react-query';

const clientQuery = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={clientQuery}>
      <Provider store={store}>
        <RouterProvider router={AppRouter} />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
