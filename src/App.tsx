import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Header from './components/Header/Header';
import MyRoutes from './routes';
import GlobalStyles from './styles/GlobalStyles';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Header />

      <MyRoutes />

      <GlobalStyles />
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        closeOnClick
        rtl={false}
        draggable={'mouse'}
        theme="light"
      />
    </BrowserRouter>
  );
}

export default App;
