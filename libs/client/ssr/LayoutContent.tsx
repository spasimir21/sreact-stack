import React, { PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';
import { isClient } from './isClient';

function LayoutContent({ children }: PropsWithChildren) {
  if (children) return children;
  return isClient() ? <Outlet /> : <div id='layout-content'></div>;
}

export { LayoutContent };
