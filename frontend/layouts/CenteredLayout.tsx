import React, { PropsWithChildren, Suspense } from 'react';
import { LayoutContent } from '@libs/client/ssr';

function CenteredLayout({ children }: PropsWithChildren) {
  return (
    <Suspense>
      <div className='grid fixed top-0 left-0 w-screen h-screen place-items-center text-center'>
        <LayoutContent>{children}</LayoutContent>
      </div>
    </Suspense>
  );
}

export { CenteredLayout };
