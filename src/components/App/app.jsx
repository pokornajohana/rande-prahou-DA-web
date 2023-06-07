import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Header } from '../Header/header';
import { Home } from '../Home/home';
import { Petra } from '../Petra/petra';
import { Johana } from '../Johana/johana';
import { Footer } from '../Footer/footer';

export const App = () => (
  <>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  { path: '/petra', element: <Petra /> },
  { path: '/johana', element: <Johana /> },
  { path: '/mapa', element: <Mapa /> },
  ,
]);
