import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CenteredLayout } from './layouts/CenteredLayout';
import { RootLayout } from './layouts/RootLayout';
import React, { Suspense, lazy } from 'react';

const Products = lazy(() => import('./pages/Products'));
const Home = lazy(() => import('./pages/Home'));

const router = (
  <BrowserRouter>
    <Suspense>
      <Routes>
        <Route element={<RootLayout />}>
          <Route element={<CenteredLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export { router };
