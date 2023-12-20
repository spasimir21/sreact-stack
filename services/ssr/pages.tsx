import { CenteredLayout } from '@frontend/layouts/CenteredLayout';
import { RootLayout } from '@frontend/layouts/RootLayout';
import { composePage, SSRPage } from '@libs/shared/ssr';
import Products from '@frontend/pages/Products';

function createPages(indexLayout: SSRPage) {
  const rootLayout = composePage(indexLayout, <RootLayout />);

  const centeredLayout = composePage(rootLayout, <CenteredLayout />);

  return {
    products: composePage(centeredLayout, <Products />)
  } as const;
}

export { createPages };
