import React, { PropsWithChildren } from 'react';
import { LayoutContent } from '@libs/client/ssr';

function InnerLayout({ children }: PropsWithChildren) {
  return (
    <div className='text-purple-600'>
      <LayoutContent>{children}</LayoutContent>
    </div>
  );
}

export { InnerLayout };
