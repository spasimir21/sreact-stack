import { HybridComponent, html } from '@libs/shared/react-hybrid-components';
import { Header } from '@frontend/components/Header';
import { LayoutContent } from '@libs/shared/ssr';

const RootLayout = HybridComponent({
  container: () => <div></div>,
  html: html`
    <div class="fixed top-0 left-0 w-screen" rhc-target="header"></div>
    <div rhc-target="content"></div>
  `,
  slots: {
    header: <Header />,
    content: <LayoutContent />
  }
});

export { RootLayout };
