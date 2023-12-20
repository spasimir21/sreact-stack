import { HybridHtml } from '../hybridHtml';

interface SSRPageHybridHtmlContext {
  title: string;
  headElements: string;
}

type SSRPageHybridHtml = HybridHtml<SSRPageHybridHtmlContext>;

interface SSRPage {
  layoutElements: React.ReactElement[];
  hybridHtml: SSRPageHybridHtml;
}

export { SSRPage, SSRPageHybridHtml, SSRPageHybridHtmlContext };
