import { HybridComponent, html } from '@libs/shared/react-hybrid-components';
import { LayoutContent } from '@libs/shared/ssr';

const CenteredLayout = HybridComponent({
  container: () => <div className='grid place-items-center h-screen w-screen'></div>,
  html: html`<div rhc-target="content"></div>`,
  slots: {
    content: <LayoutContent />
  }
});

export { CenteredLayout };
