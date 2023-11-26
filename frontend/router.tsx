import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CenteredLayout } from './layouts/CenteredLayout';
import { InnerLayout } from './layouts/InnerLayout';
import React, { lazy } from 'react';

const Products = lazy(() => import('./pages/Products'));
const Home = lazy(() => import('./pages/Home'));

const router = (
  <BrowserRouter>
    <Routes>
      <Route element={<CenteredLayout />}>
        <Route element={<InnerLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

export { router };
